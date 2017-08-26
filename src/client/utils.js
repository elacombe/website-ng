import React from 'react';
import { RouteTransition } from 'react-router-transition';

export const transitionedPage = name => WrappedComponent => {
  const TransitionedComponent = props => (
    <RouteTransition
      pathname={name}
      atEnter={{ opacity: 0.01 }}
      atLeave={{ opacity: 0.01 }}
      atActive={{ opacity: 1 }}
    >
      <WrappedComponent {...props} />
    </RouteTransition>
  );
  return TransitionedComponent;
};
