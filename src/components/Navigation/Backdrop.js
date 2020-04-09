import React from 'react';
import ReactDOM from 'react-dom';

import './Backdrop.scss';

const Backdrop = props => {
  return ReactDOM.createPortal(

    <div // eslint-disable-line jsx-a11y/click-events-have-key-events
      tabIndex="0"
      role="button"
      className="backdrop"
      onClick={props.onClick}></div>,
    document.getElementById('backdrop-hook')
  );
};

export default Backdrop;
