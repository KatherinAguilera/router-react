import React from 'react';
import Icon from './icon';
// componente funcional
 function Play(props) {
   // path del archivo sVG
  return (
    // componente unico para los iconos
    <Icon {...props}>
      <path d="M6 4l20 12-20 12z"></path>
    </Icon>
  )
}
 export default Play;