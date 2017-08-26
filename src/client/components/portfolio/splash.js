import React from 'react';
import { FormattedHTMLMessage } from 'react-intl';

const Splash = () => (
  <div className="splash">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <h2 className="text-center"><FormattedHTMLMessage id="portfolio.splash.h" /></h2>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="separator-grey">
            <span></span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Splash;
