import React from 'react';
import Playlist from '../../playlist/components/Playlist.jsx';
import './category.css'

function Category(props) {
  return (
    <div className="Category">
      <p className="Category-description">{props.description}</p>
      <h2 className="Category-title">{props.title}</h2>
      {/* importando del playlist */}
      <Playlist
        handleOpenModal={props.handleOpenModal}
        playlist={props.playlist}
      />
    </div>
  )
}

export default Category;