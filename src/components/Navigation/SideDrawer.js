import React from 'react';
import { CSSTransition } from 'react-transition-group';

import './SideDrawer.scss';

const SideDrawer = (props) => (
  <CSSTransition
    in={props.show}
    timeout={200}
    classNames="slide-in-left"
    mountOnEnter
    unmountOnExit>
    <aside // eslint-disable-line jsx-a11y/click-events-have-key-events
      role="button"
      tabIndex="0"
      className="side-drawer"
      onClick={props.onClick}>
      {props.children}
    </aside>
  </CSSTransition>
);

export default SideDrawer;
