import React from 'react';
import ReactDOM from 'react-dom';

import './Backdrop.scss';

const Backdrop = props => {
  return ReactDOM.createPortal(
    <div
      tabIndex="0"
      role="button"
      className="backdrop"
      onClick={props.onClick}></div>,
    document.getElementById('backdrop-hook')
  );
};

export default Backdrop;
