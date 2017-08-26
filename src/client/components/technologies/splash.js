import React from 'react';
import Nav from './nav';
import { FormattedHTMLMessage } from 'react-intl';

const Splash = () => (
  <div className="splash">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <h2 className="text-center"><FormattedHTMLMessage id="technologies.splash.h1" /></h2>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="separator-dark-red">
            <span className="separator"></span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <h3 className="text-center"><FormattedHTMLMessage id="technologies.splash.h2" /></h3>
          <h3 className="text-center"><FormattedHTMLMessage id="technologies.splash.h3" /></h3>
        </div>
      </div>
      <div className="hidden-xs"><Nav /></div>
      <div className="visible-xs"><Nav xs={6} /></div>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="separator-grey">
            <span className="separator"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Splash;
