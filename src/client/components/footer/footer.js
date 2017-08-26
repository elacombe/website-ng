import React from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import './footer.less';

const Footer = () => (
  <div className="footer">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="separator-grey">
            <span className="separator"></span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="container partners">
          <div className="image mongoPartner" />
        </div>
      </div>
      <div className="row">
        <div className="container text-center">
          <p>
            <FormattedHTMLMessage id="footer.copyright" />
            &nbsp;&nbsp;<span className="glyphicon glyphicon-send" />&nbsp;&nbsp;
            <FormattedMessage id="footer.rights" />
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
