import React from 'react';
import error from'../../../images/404.png';
import'./regular-error.css';
const RegularError=(props) =>{
 (
    <div className= 'Error'>
      <h3>Ha ocurrido un error</h3>
      <img src= {error} />
    </div>
  )
}
 export default RegularError;