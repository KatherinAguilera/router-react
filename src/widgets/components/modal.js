import React from 'react';
import './modal.css';
 function Modal(props) {
   // los componenetes funcionales no deben manejar eventos sino sus propias propiedades
  return (
    <div className="Overlay" id="overlay">
      <div className="Modal" id="hide-modal">
        {props.children}
        <button className="Modal-close" id="modal-close" onClick={props.handleClick}></button>
      </div>
    </div>
  )
}
 export default Modal;