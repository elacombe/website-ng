import React from 'react';
import { FormattedHTMLMessage } from 'react-intl';

const Javascript1 = () => (
  <div className="javascript1 slide">
    <div className="container">
      <div className="strip top">
        <div className="row">
          <div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-12 col-xs-12">
            <h1><FormattedHTMLMessage id="technologies.javascript1.h1" /></h1>
            <p><FormattedHTMLMessage id="technologies.javascript1.p1" /></p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <div className="head">
            <span className="glyphicon glyphicon-signal"></span>
          </div>
          <div className="body">
            <h3><FormattedHTMLMessage id="technologies.javascript1.content.h1" /></h3>
            <p><FormattedHTMLMessage id="technologies.javascript1.content.p1" /></p>
            <span className="red"><FormattedHTMLMessage id="technologies.javascript1.content.s1" /></span>
            <div className="image performance" />
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <div className="head">
            <span className="glyphicon glyphicon-globe"></span>
          </div>
          <div className="body">
            <h3><FormattedHTMLMessage id="technologies.javascript1.content.h2" /></h3>
            <p><FormattedHTMLMessage id="technologies.javascript1.content.p2" /></p>
            <span className="red"><FormattedHTMLMessage id="technologies.javascript1.content.s2" /></span>
            <div className="image ecosystem" />
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <div className="head">
            <span className="glyphicon glyphicon-heart"></span>
          </div>
          <div className="body">
            <h3><FormattedHTMLMessage id="technologies.javascript1.content.h3" /></h3>
            <p><FormattedHTMLMessage id="technologies.javascript1.content.p3" /></p>
            <span className="red"><FormattedHTMLMessage id="technologies.javascript1.content.s3" /></span>
            <div className="image adoption" />
          </div>
        </div>
      </div>
      <div className="strip bottom">
        <div className="row">
          <div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-12 col-xs-12">
            <p><FormattedHTMLMessage id="technologies.javascript1.h2" /></p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Javascript1;
