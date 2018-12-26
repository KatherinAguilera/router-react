import React from 'react';
import './progress-bar.css';
 function ProgressBar(props) {
  return (
    <div className="ProgressBar">
      <input
      // barra de rango de tiempo
        type="range"
        min={0}
        max={props.duration}
        // tamño de la duracion del video
        value={props.value}
        // cambios del evento mover barra adelantar
        onChange={props.handleProgressChange}
      />
    </div>
  )
}
 export default ProgressBar