import React from 'react';
import './timer.css';
// /**funcion para que mantega dos digitos y no se mueva el diseño*/
// function leftPad(number) {
//   const pad = '00';
//   return pad.substring(0, pad.length - number.length) + number;
// }
// /*Formatear tiempo en minutos y segundos*/
//  function formattedTime(secs) {
//   const minutes = parseInt(secs / 60, 10);
//   const seconds = parseInt(secs % 60, 10);
//   return `${minutes} : ${leftPad(seconds.toString())}`
// }
// /***********************************************/
 function Timer(props) {
  return (
    <div className="Timer">
      <p>
        {/* mostrar la duracion */}
        {/* <span>00 / {props.duration}</span> */}
        <span>{(props.currentTime)} / {(props.duration)}</span>
      </p>
    </div>
  )
}
 export default Timer;