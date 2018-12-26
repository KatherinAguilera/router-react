/*componente que se exportara a index*/
import React, { Component } from 'react';
// Importo media para ser utilizado
// import Media from './media.js';
import MediaContainer from '../containers/media';
import './playlist.css';
// 1. Declaro Playlist
function Playlist(props) {
  // const playlist = props.data.categories[0].playlist
  return (
    <div className="Playlist">
      {
        props.playlist.map((mediaId) => {
          return <MediaContainer openModal={props.handleOpenModal} id={mediaId} key={mediaId} />
        })
      }
    </div>
  )
}
// 2. Exporto para se utilizada
export default Playlist;