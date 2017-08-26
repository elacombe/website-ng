import React from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

const Consulting = ({ id, icon }) => (
  <div className="col-lg-4 col-md-4 col-xs-12 col-sm-6">
    <div className="head">
      <span className={`glyphicon glyphicon-${icon}`}></span>
    </div>
    <div className="body">
      <h3><FormattedMessage id={`home.consulting2.content.h${id}`} /></h3>
      <p><FormattedHTMLMessage id={`home.consulting2.content.p${id}`} /></p>
    </div>
  </div>
);

const LinkContactUs = () => (
  <a href="mailto:contact@redpelicans.com" className="fade-link">
    <FormattedMessage id="contactus" />
  </a>
);

const Consulting2 = () => (
  <div className="light-grey slide">
    <div className="container">
      <div className="row">
        <div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-xs-12">
          <h2 className="text-center"><FormattedHTMLMessage id="home.consulting2.h" /></h2>
        </div>
      </div>
      <div className="row">
        <Consulting id="1" icon="wrench" />
        <div className="col-lg-4 col-md-4 hidden-xs hidden-sm">
          <div className="head invisible">
            <span className="glyphicon glyphicon-envelope"></span>
          </div>
          <div className="body"><br /><br /><br /><LinkContactUs /></div>
        </div>
        <Consulting id="2" icon="flag" />
        <div className="col-xs-12 visible-xs col-sm-12 visible-sm"><LinkContactUs /></div>
      </div>
    </div>
  </div>
);

export default Consulting2;
