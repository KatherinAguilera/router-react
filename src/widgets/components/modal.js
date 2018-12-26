import React from 'react';
import './modal.css';
import { Link } from 'react-router-dom';

 function Modal(props) {
   // los componenetes funcionales no deben manejar eventos sino sus propias propiedades
  return (
    <div className="Overlay" id="overlay">
      <div className="Modal" id="hide-modal">
        {props.children}
        {/* colocar y que vuelva a ser /videos */}
        <Link
          to={{
            pathname: '/videos',
            state: {
            modal: false,
            }
          }}
        >
          <button 
            className="Modal-close"   
            id="modal-close"
            onClick={props.handleClick}
          />
        </Link>
      </div>
    </div>
  )
}
 export default Modal;