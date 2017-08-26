import React from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

export const Hiring = () => (
  <div id="hiring" className="grey slide">
    <div className="container">
      <div className="row">
        <div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-xs-12">
          <h2 className="text-center"><FormattedHTMLMessage id="home.hiring.h" /></h2>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-xs-12">
          <div className="head">
            <span className="glyphicon glyphicon-tree-deciduous"></span>
          </div>
          <div className="body">
            <h3><FormattedMessage id="home.hiring.content.h" /></h3>
            <p><FormattedHTMLMessage id="home.hiring.content.p" /></p>
            <a href="mailto:contact@redpelicans.com" className="fade-link">
              <FormattedMessage id="applynow" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Hiring;
