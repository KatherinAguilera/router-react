 import React from 'react';
import './search.css';
// importar Prompt avisar al usuario
import { Prompt } from 'react-router';
// function Search(props) {
//   return (
//     <form action=""></form>
//   )
// }
 const Search = (props) => (
  <form
    className="Search"
    onSubmit={props.handleSubmit}
  >
  <Prompt
    // when={true o false}
    when={props.prompt}
    message="En realidad quieres salir de la página?"
  />
    <input
    // referencia de react para almacenar el elemento del input
      ref={props.setRef}
      type="text"
      placeholder="Busca tu video favorito"
      className="Search-input"
      name="search"
      onChange={props.handleChange}
      // valor por defecto con react se hace con defaultValue pero en este caso no funcionaria
      value={props.value}
    />
    <button
      ref={props.setRef}
      type="text"
      placeholder="Busca tu video favorito"
      className="Search-button"
      name="search"
      onChange={props.handleChange}
      // valor por defecto con react se hace con defaultValue pero en este caso no funcionaria
      value={props.value}
      >
      Buscar
    </button>
  </form>
)
 export default Search