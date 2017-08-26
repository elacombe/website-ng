import React from 'react';
import { FormattedMessage } from 'react-intl';
import Scroll from 'react-scroll';

const Nav = ({ xs = 3 }) => (
  <nav>
    <div className="container">
      <div className="row">
        <div className={`col-lg-3 col-md-3 col-sm-3 col-xs-${xs}`}>
          <div>
            <Scroll.Link activeClass="active" to="datavisualization" offset={-75} spy={true} smooth={true} duration={2000}>
              <span className="glyphicon glyphicon-stats"></span>
            </Scroll.Link>
            <h3><FormattedMessage id="technologies.datavisualization.h" /></h3>
            <p><FormattedMessage id="technologies.datavisualization.p" /></p>
          </div>
        </div>
        <div className={`col-lg-3 col-md-3 col-sm-3 col-xs-${xs}`}>
          <div>
            <Scroll.Link activeClass="active" to="frontend" offset={-75} spy={true} smooth={true} duration={2000}>
              <span className="glyphicon glyphicon-dashboard"></span>
            </Scroll.Link>
            <h3><FormattedMessage id="technologies.frontend.h" /></h3>
            <p><FormattedMessage id="technologies.frontend.p" /></p>
          </div>
        </div>
        <div className={`col-lg-3 col-md-3 col-sm-3 col-xs-${xs}`}>
          <div>
            <Scroll.Link activeClass="active" to="backend" offset={-75} spy={true} smooth={true} duration={2000}>
              <span className="glyphicon glyphicon-hdd"></span>
            </Scroll.Link>
            <h3><FormattedMessage id="technologies.backend.h" /></h3>
            <p><FormattedMessage id="technologies.backend.p" /></p>
          </div>
        </div>
        <div className={`col-lg-3 col-md-3 col-sm-3 col-xs-${xs}`}>
          <div>
            <Scroll.Link activeClass="active" to="nosql" offset={-75} spy={true} smooth={true} duration={2000}>
              <span className="glyphicon glyphicon-leaf"></span>
            </Scroll.Link>
            <h3><FormattedMessage id="technologies.nosql.h" /></h3>
            <p><FormattedMessage id="technologies.nosql.p" /></p>
          </div>
        </div>
        <i className="line"><i className="cursor"></i></i>
      </div>
    </div>
  </nav>
);

export default Nav;
