import React from 'react';
import Loader from '../../widgets/components/loader'
import './spinner.css';
 function Spinner(props) {
  //  si no esta activo
  if (!props.active) return null
  return (
    <div className="Spinner">
      <Loader/>
    </div>
  )
}
export default Spinner