import React from 'react';
import Transition from 'react-transition-group/Transition';
import TransitionGroup from 'react-transition-group/TransitionGroup';


const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 0.01 },
  exited: { opacity: 0.01 },  
  entered:  { opacity: 1 },
};

export const transitionedPage = name => WrappedComponent => {
  const TransitionedComponent = props => (
    <TransitionGroup appear={true} exit={false} enter={false}>
      <Transition appear timeout={duration}>
        {state => (
          <div style={{ ...defaultStyle, ...transitionStyles[state]}}>
            <WrappedComponent {...props} />
          </div>
        )}
      </Transition>
    </TransitionGroup>
  );
  return TransitionedComponent;
};
