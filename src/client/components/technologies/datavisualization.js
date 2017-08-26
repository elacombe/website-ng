import React from 'react';
import { FormattedHTMLMessage } from 'react-intl';

const Datavisualization = () => (
  <div id="datavisualization" className="slide">
    <div className="container">
      <div className="strip top">
        <div className="row">
          <div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-12 col-xs-12">
            <h1><FormattedHTMLMessage id="technologies.datavisualization.h" /></h1>
            <p><FormattedHTMLMessage id="technologies.datavisualization.content.p1" /></p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="body">
            <div className="image d3js" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
          <div className="body">
            <h4><FormattedHTMLMessage id="technologies.datavisualization.content.h2" /></h4>
            <p><FormattedHTMLMessage id="technologies.datavisualization.content.p2" /></p>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
          <div className="body">
            <h4><FormattedHTMLMessage id="technologies.datavisualization.content.h3" /></h4>
            <p><FormattedHTMLMessage id="technologies.datavisualization.content.p3" /></p>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
          <div className="body">
            <h4><FormattedHTMLMessage id="technologies.datavisualization.content.h4" /></h4>
            <p><FormattedHTMLMessage id="technologies.datavisualization.content.p4" /></p>
          </div>
        </div>
      </div>
      <div className="strip bottom">
        <div className="row">
          <div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-12 col-xs-12">
            <p><FormattedHTMLMessage id="technologies.datavisualization.content.p5" /></p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Datavisualization;
