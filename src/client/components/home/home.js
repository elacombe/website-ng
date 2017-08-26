import React from 'react';
import Header from '../header';
import Footer from '../footer';
import Splash from './splash';
import Consulting1 from './consulting1';
import Content from './content';
import Devops from './devops';
import Consulting2 from './consulting2';
import Hiring from './hiring';
import School from './school.js';
import Stack from './stack';
import './home.less';

const Home = ({ name }) => (
  <div className="home">
    <Header breadcrumbs={name} />
    <Splash />
    <Consulting1 />
    <Content />
    <Devops />
    <Consulting2 />
    <Hiring />
    <School />
    <Stack />
    <Footer />
  </div>
);

export default Home;
