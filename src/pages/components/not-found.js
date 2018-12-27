import React, { PureComponent } from'react';
import'./generic-page.css';

class NotFound extends PureComponent{
  handleRandomClick = () => {
    const random = Math.round(Math.random() * (10-1) +1);
    this.props.history.push(`/videos?id=${random}`, {id: random})
  }
  handleBackClick = () => {
    // ir hacia atras atraves del metodo history.go
    this.props.history.goBack();
    // this.props.history.go(-1);
  }
  handleForwardClick = () => {
    this.props.history.goForward();
  }
  render() {
    return (
      <div className="Page NotFound">
        <h1>404</h1>
        <h3 className="SadFace">:(</h3>
        <h2>No hemos encontrado la página que buscabas</h2>
        <button
          className="Button"
          onClick={this.handleBackClick}
        >
        Ir hacia atras
        </button>
        <button
          className="Button"
          onClick={this.handleForwardClick}
        >
        Ir hacia adelante
        </button>
        <button
          className="Button"
          onClick={this.handleRandomClick}
        >
        Ir video Random
        </button>        
      </div>
    )
  }
}

export default NotFound