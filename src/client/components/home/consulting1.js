import React from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

const Consulting1 = () => (
  <div className="grey slide">
    <div className="container">
      <div className="row">
        <div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-xs-12 col-sm-12">
          <h2 className="text-center"><FormattedHTMLMessage id="home.consulting1.h" /></h2>
        </div>
      </div>
      <div className="row">
        {
          [
            { icon: 'road', id: 1 },
            { icon: 'flash', id: 2 },
            { icon: 'record', id: 3 },
          ].map(
            c => (
              <div className="col-lg-4 col-md-4 col-xs-12 col-sm-4" key={`consulting1#${c.id}`}>
                <div className="head">
                  <span className={`glyphicon glyphicon-${c.icon}`}></span>
                </div>
                <div className="body">
                  <h3><FormattedMessage id={`home.consulting1.content.h${c.id}`} /></h3>
                  <p><FormattedHTMLMessage id={`home.consulting1.content.p${c.id}`} /></p>
                </div>
              </div>
            )
          )
        }
      </div>
    </div>
  </div>
);

export default Consulting1;
