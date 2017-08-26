import React from 'react';
import { FormattedHTMLMessage } from 'react-intl';

const Frontend = () => (
  <div id="frontend" className="slide">
    <div className="container">
      <div className="strip top">
        <div className="row">
          <div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-12 col-xs-12">
            <h1><FormattedHTMLMessage id="technologies.frontend.h" /></h1>
            <p><FormattedHTMLMessage id="technologies.frontend.content.p1" /></p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="body">
            <div className="image angularjs" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
          <div className="body">
            <h4><FormattedHTMLMessage id="technologies.frontend.content.angularjs.h1" /></h4>
            <p><FormattedHTMLMessage id="technologies.frontend.content.angularjs.p1" /></p>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
          <div className="body">
            <h4><FormattedHTMLMessage id="technologies.frontend.content.angularjs.h2" /></h4>
            <p className="fat"><FormattedHTMLMessage id="technologies.frontend.content.angularjs.p2" /></p>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
          <div className="body">
            <h4><FormattedHTMLMessage id="technologies.frontend.content.angularjs.h3" /></h4>
            <p><FormattedHTMLMessage id="technologies.frontend.content.angularjs.p3" /></p>
          </div>
        </div>
      </div>   
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="body">
            <div className="image react" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
          <div className="body">
            <h4><FormattedHTMLMessage id="technologies.frontend.content.react.h1" /></h4>
            <p><FormattedHTMLMessage id="technologies.frontend.content.react.p1" /></p>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
          <div className="body">
            <h4><FormattedHTMLMessage id="technologies.frontend.content.react.h2" /></h4>
            <p className="fat"><FormattedHTMLMessage id="technologies.frontend.content.react.p2" /></p>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
          <div className="body">
            <h4><FormattedHTMLMessage id="technologies.frontend.content.react.h3" /></h4>
            <p><FormattedHTMLMessage id="technologies.frontend.content.react.p3" /></p>
          </div>
        </div>
      </div>
      <div className="strip bottom">
        <div className="row">
          <div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-12 col-xs-12">
            <p><FormattedHTMLMessage id="technologies.frontend.content.p2" /></p>
            <p><FormattedHTMLMessage id="technologies.frontend.content.p3" /></p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Frontend;
