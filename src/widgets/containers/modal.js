import React, { Component } from 'react';
// CreatePortal viene de react dom para componentes fuera del contenedor principal
import { createPortal } from 'react-dom';
class ModalContainer extends Component {
  render() {
    return createPortal(
      this.props.children,
      document.getElementById('modal-container')
    )
  }
}
export default ModalContainer;