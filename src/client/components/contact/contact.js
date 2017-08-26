import React from 'react';
import { FormattedHTMLMessage } from 'react-intl';

const Contact = () => (
  <div className="contact slide">
    <div className="container">
      <div className="row">
        <div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-12 col-xs-12">
          <h2><FormattedHTMLMessage id="talkus" /></h2>
          <a href="mailto:contact@redpelicans.com" className="fade-link">
            <FormattedHTMLMessage id="contactus" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
