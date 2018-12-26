import React from 'react';
import './play-pause.css';
import Play from '../../icons/components/play';
import Pause from '../../icons/components/pause';
const PlayPause = props=>(
    <div className="PlayPause">
    {/* {}if ternario */}
      {
        // props.pause===true ? si se cumple boton play
        props.pause ?
          <button
            onClick={props.handleClick}
          >
            <Play size={25} color="white" />
          </button>
          // : no se cumple boton pause
        :
        <button
          onClick={props.handleClick}
        >
          <Pause size={25} color="#c1d354" />
        </button>
      }
    </div>
  )
 export default PlayPause