import React from 'react';
import { scroller } from 'react-scroll';
import Header from '../header';
import Footer from '../footer';
import Contact from '../contact';
import Splash from './splash';
import HeadroomRP from './headroom';
import Javascript1 from './javascript1';
import Javascript2 from './javascript2';
import Datavisualization from './datavisualization';
import Frontend from './frontend';
import Backend from './backend';
import Nosql from './nosql';
import './technologies.less';

class Technologies extends React.Component {

  componentDidMount(){
    const { anchor } = this.props.match.params;
    if (!anchor) return;
    scroller.scrollTo(anchor, {
      duration: 700,
      smooth: true,
      offset: -75
    });
  }

  render() {
    const { name } = this.props;
    return (
      <div className="technologies">
        <Header breadcrumbs={name} />
        <HeadroomRP />
        <Splash />
        <Javascript1 />
        <Javascript2 />
        <Datavisualization />
        <Frontend />
        <Backend />
        <Nosql />
        <Contact />
        <Footer />
      </div>
    );
  }
};

export default Technologies;
