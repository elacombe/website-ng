import React from 'react';
import { FormattedMessage } from 'react-intl';
import mongodbThumb from '../../assets/images/mongodb-thumb.png'; // eslint-disable-line no-unused-vars
import nodejsThumb from '../../assets/images/nodejs-thumb.png'; // eslint-disable-line no-unused-vars
import angularjsThumb from '../../assets/images/angularjs-thumb.png'; // eslint-disable-line no-unused-vars
import reactThumb from '../../assets/images/react-thumb.png'; // eslint-disable-line no-unused-vars
import d3Thumb from '../../assets/images/d3-thumb.png'; // eslint-disable-line no-unused-vars
import redisThumb from '../../assets/images/redis-thumb.png'; // eslint-disable-line no-unused-vars

const Line = ({ items }) => (
  <div className="row">
    {
      items.map(
        (s) => (
          <div className="col-lg-2 col-md-2 col-sm-3 col-xs-12" key={`stack#${s.name}`}>
            <div className="wrapper">
              <a href={s.link}>
                <div className={`image ${s.image}`} />
                <span>{s.name}</span>
              </a>
            </div>
          </div>
        )
      )
    }
  </div>
);

const Stack = () => (
  <div id="stack" className="grey slide">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-xs-12">
          <h2 className="text-center">
            <FormattedMessage id="home.stack.h" />
          </h2>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-2 col-md-2 hidden-sm col-xs-12"></div>
        <Line items={[
          { name: "MongoDB", image: "mongodbThumb", link: "https://www.mongodb.org/" },
          { name: "Node.js", image: "nodejsThumb", link: "https://nodejs.org/" },
          { name: "React", image: "reactThumb", link: "http://facebook.github.io/react/" },
          { name: "React Native", image: "reactThumb", link: "https://facebook.github.io/react-native/" },
        ]} />
        <div className="col-lg-2 col-md-2 hidden-sm col-xs-12"></div>
        <Line items={[
          { name: "Docker", image: "dockerThumb", link: "https://www.docker.com/" },
          { name: "AngularJS", image: "angularjsThumb", link: "https://angularjs.org/" },
          { name: "D3JS", image: "d3Thumb", link: "https://d3js.org/" },
          { name: "Redis", image: "redisThumb", link: "https://redis.io/" },
        ]} />
      </div>
    </div>
  </div>
);

export default Stack;
