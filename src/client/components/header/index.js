import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import './header.less';

class Header extends Component {
  state = { isMenuVisible: false }
  toggleMenu = () => this.setState({ isMenuVisible: !this.state.isMenuVisible })
  render() {
    const { breadcrumbs } = this.props;
    const { toggleMenu } = this;
    const { isMenuVisible } = this.state;
    return (
      <div className="header">
        <div className="nav">
          <div className="brand text-center">
            <Link to="/home">
              <span className="glyphicon glyphicon-send"></span>
              <FormattedMessage id="redpelicans" />
            </Link>
          </div>
        </div>
        <div className="hidden-xs breadcrumbs">
          {breadcrumbs}
        </div>
        <div className={`toggle ${isMenuVisible ? 'active' : ''}`}>
          <a onClick={toggleMenu}>
            <span></span>
          </a>
        </div>
        <div className="blog">
          <a href="//blog.redpelicans.com">
            <span className="glyphicon glyphicon-book"></span>
          </a>
        </div>
        <div className="contact">
          <a href="mailto:contact@redpelicans.com">
            <span className="glyphicon glyphicon-envelope"></span>
          </a>
        </div>
        <div className={`menu ${isMenuVisible ? 'active' : ''}`}>
          <nav>
            <ul>
              <li>
                <Link onClick={toggleMenu} to="/home" className={breadcrumbs === 'home' ? 'active' : ''}>
                  <span className="glyphicon glyphicon-home"></span>
                  <FormattedMessage id="menu.home" />
                </Link>
              </li>
              <li>
                <Link onClick={toggleMenu} to="/technologies" className={breadcrumbs === 'technologies' ? 'active' : ''}>
                  <span className="glyphicon glyphicon-cog"></span>
                  <FormattedMessage id="menu.technologies" />
                </Link>
              </li>
              <li>
                <Link onClick={toggleMenu} to="/portfolio" className={breadcrumbs === 'portfolio' ? 'active' : ''}>
                  <span className="glyphicon glyphicon-briefcase"></span>
                  <FormattedMessage id="menu.portfolio" />
                </Link>
              </li>
              <li onClick={toggleMenu}>
                <a href="//blog.redpelicans.com">
                  <span className="glyphicon glyphicon-book"></span>
                  <FormattedMessage id="menu.blog" />
                </a>
              </li>
            </ul>
          </nav>
          <div className="overlay" onClick={toggleMenu}></div>
        </div>
      </div>
    );
  }
}

export default Header;
