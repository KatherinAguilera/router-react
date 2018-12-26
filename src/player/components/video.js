import React, { Component } from 'react';
import './video.css';
 class Video extends Component {
  togglePlay() {
    if (this.props.pause) {
      // metodos nativos del navegador play() pause()
      // this.video accediendo al elemento
      this.video.play()
    } else {
      this.video.pause()
    }
  }
  // nuevas propiedades que se apause el video o play
  UNSAFE_componentWillReceiveProps(nextProps) {
    // si es diferente a lo que ya tengo
    if (nextProps.pause !== this.props.pause) {
      // ejecute la funcion togglePlay
      this.togglePlay();
    }
  }
  // hacer la referencia al elemento de video
  setRef = element => {
    this.video = element;
  }
  render() {
    // constante para pasarla a onloadedMetadata
    const {
      handleLoadedMetadata,
      handleTimeUpdate,
      handleSeeking,
      handleSeeked,
    handleClick,} = this.props;
    return (
      <div className="Video">
        <video
          autoPlay={this.props.autoplay}
          src={this.props.src}
          // que pausar a que le damos play
          //hacer una referencia al elemnto del video que es el que pausa y play
          ref={this.setRef}
          // Metodo para obtener la duracion del video
          onLoadedMetadata={handleLoadedMetadata}
          // cada vez que se ejecute el tirmpo ejecute una accion
          onTimeUpdate={handleTimeUpdate}
          onSeeking={handleSeeking}
          onSeeked={handleSeeked}
          onClick={handleClick}
        />
      </div>
    )
  }
}
 export default Video;