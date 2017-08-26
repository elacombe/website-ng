import Headroom from 'react-headrooms';
import React from 'react';
import Nav from './nav';

const HeadroomRP = () => (
  <div className="headroom">
    <Headroom tolerance={5} offset={555}>
      <div className="hidden-xs"><Nav /></div>
    </Headroom>
    <Headroom tolerance={5} offset={950}>
      <div className="visible-xs"><Nav xs={6} /></div>
    </Headroom>
  </div>
);

export default HeadroomRP;
