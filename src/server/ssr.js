import React  from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import localeData from '../i18n/data.json';
import { getFile, getHashedUrl } from './util';
import routes  from '../routes';
import App from '../client/components/app'
import { justSSR, bundle, styles } from '../../params';

addLocaleData([...en]);

const bundleUrl = getHashedUrl('/static/js/bundle.js', bundle);
const appCss = getFile(styles);

const indexHtml = ({ appCss, html, bundleUrl, preloadedState, justSSR }) => `
  <html>
    <head>
      <title>redpelicans</title>
      <style type="text/css"> ${appCss} </style>
      <meta charset="utf-8">
    </head>
    <body>
      <div id='root'>
        ${html}
      </div>
      <script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)};
      </script>
      <script type="text/javascript" src="${bundleUrl}" async></script>
    </body>
  </html>
`;

const language = 'en';
const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];
const messages = localeData[languageWithoutRegionCode] || localeData[language] || localeData.en;

const renderIndexPage = (req, res) => {
  const context = {};
  const Root = (
    <IntlProvider locale={language} messages={messages}> 
      <Router location={req.url} context={context}>
        <App ssr={true} />
      </Router>
    </IntlProvider>
  );
  const html = renderToString(Root);
  if (context.url) {
    res.redirect(301, context.url);
  }
  else {
    res.send(indexHtml({ justSSR, appCss, html, bundleUrl, preloadedState: {toto: 1} }));
  }
}

export default renderIndexPage;

