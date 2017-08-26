import React from 'react';
import { FormattedHTMLMessage } from 'react-intl';

const Javascript2 = () => (
  <div id="full-stack-javascript" className="javascript2 slide">
    <div className="container">
      <div className="strip top">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-12 col-xs-12">
            <h1><FormattedHTMLMessage id="technologies.javascript2.h1" /></h1>
            <p><FormattedHTMLMessage id="technologies.javascript2.p1" /></p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12 center-block">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div className="head">
                <span className="glyphicon glyphicon-dashboard"></span>
              </div>
              <div className="body">
                <h3><FormattedHTMLMessage id="technologies.javascript2.content.h1" /></h3>
                <p><FormattedHTMLMessage id="technologies.javascript2.content.p1" /></p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div className="head">
                <span className="glyphicon glyphicon-hdd"></span>
              </div>
              <div className="body">
                <h3><FormattedHTMLMessage id="technologies.javascript2.content.h2" /></h3>
                <p><FormattedHTMLMessage id="technologies.javascript2.content.p2" /></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="strip bottom">
        <div className="row">
          <div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-12 col-xs-12">
            <p><FormattedHTMLMessage id="technologies.javascript2.p2" /></p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Javascript2;