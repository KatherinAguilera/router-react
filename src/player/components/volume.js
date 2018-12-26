import React from 'react';
import VolumenIcon from '../../icons/components/volume';
import Mute from '../../icons/components/mute'
import './volume.css';
 function Volume(props) {
  return (
    <div className="Volume">
      <div
        className="VolumenOnClick"
        onClick={props.handleVolClick}
      >
			{
				props.onOff > 0 ?
      <VolumenIcon
        color="white"
        size={25}
      />
      :
      <Mute 
        size={25}
        color="#c1d354" 
      />
    }
  </div>
      <div className="Volume-range">
        <input
          type="range"
          // en html el volumen funciona entre 0(no se escucha) y 1 (alto volumen)
          min={0}
          max={1}
          // espacio que avanzara el input entre 0 y 1
          step={.05}
          onChange={props.handleVolumeChange}
        />
      </div>
    </div>
  )
}
 export default Volume;