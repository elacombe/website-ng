import React from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

export const School = () => (
  <div id="school" className="light-grey slide">
    <div className="container">
      <div className="row">
        <div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-xs-12">
          <h2 className="text-center"><FormattedHTMLMessage id="home.school.h" /></h2>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-xs-12">
          <div className="head">
            <span className="glyphicon glyphicon-book"></span>
          </div>
          <div className="body">
            <h3><FormattedMessage id="home.school.content.h" /></h3>
            <p><FormattedHTMLMessage id="home.school.content.p" /></p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default School;
