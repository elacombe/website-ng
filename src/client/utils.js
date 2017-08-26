import React from 'react';
import Transition from 'react-transition-group/Transition';

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
};

export const transitionedPage = name => WrappedComponent => {
  const TransitionedComponent = props => (

      <WrappedComponent {...props} />
  );
  return TransitionedComponent;
};

// import { RouteTransition } from 'react-router-transition';
// export const transitionedPage = name => WrappedComponent => {
//   const TransitionedComponent = props => (
//     <RouteTransition
//       pathname={name}
//       atEnter={{ opacity: 0 }}
//       atLeave={{ opacity: 0 }}
//       atActive={{ opacity: 1 }}
//     >
//       <WrappedComponent {...props} />
//     </RouteTransition>
//   );
//   return TransitionedComponent;
// };
