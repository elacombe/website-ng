import React from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

const Devops = () => (
  <div className="grey slide devops">
    <div className="container">
      <div className="row">
        <div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-xs-12">
          <h2 className="text-center"><FormattedHTMLMessage id="home.devops.h1" /></h2>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 visible-xs col-sm-12 visible-sm">
          <div className="body">
            <span className="glyphicon glyphicon-cloud-upload"></span>
          </div>
        </div>
        <div className="col-lg-5 col-md-5 col-xs-12 col-sm-6">
          <div className="body">
            <h3><FormattedMessage id="home.devops.content.h1" /></h3>
            <p><FormattedHTMLMessage id="home.devops.content.p1" /></p>
          </div>
        </div>
        <div className="col-lg-2 col-md-2 hidden-xs hidden-sm">
          <div className="head invisible">
            <span className="glyphicon glyphicon-cloud-upload"></span>
          </div>
          <div className="body">
            <br /><br />
            <span className="glyphicon glyphicon-cloud-upload"></span>
          </div>
        </div>
        <div className="col-lg-5 col-md-5 col-xs-12 col-sm-6">
          <div className="body">
            <h3><FormattedMessage id="home.devops.content.h2" /></h3>
            <p><FormattedHTMLMessage id="home.devops.content.p2" /></p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-xs-12">
          <h2 className="text-center"><FormattedHTMLMessage id="home.devops.h2" /></h2>
        </div>
      </div>
    </div>
  </div>
);

export default Devops;
