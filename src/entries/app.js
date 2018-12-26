import React, {  Fragment } from 'react';
import { render } from 'react-dom';
import HomePage from '../pages/containers/homepage';
// import Playlist from './src/playlist/components/playlist';
// import data from '../api.json';
// import data from '../schemas/index';
// componente que permite la conexion de mi store con la ui (conexion datos)
import  { Provider } from 'react-redux';
// import { createStore } from 'redux';
import { createStore, applyMiddleware } from 'redux';
// import reducer from '../reducers/data';
import reducer from '../reducers/index';
import { Map as map } from 'immutable';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { BrowserRouter, Route } from 'react-router-dom';
import Related from './../pages/components/related';
import HomeLayout from './../pages/components/home-layout';

// console.log(normalizedData);
// console.log(data);
/****REDUX ***************************************************************/
// inicializar estado
// const initialState = {
//   // datos de la api
//   data: {
//     // ...descomponer es decir obtener todos los datos que hay dentro de data
//     // ...data,
//     // entities de los datos normalizados elementos de busqueda
//     entities: data.entities,
//     categories: data.result.categories,
//   },
//   search: [],
// }
const logger_ = ({getState, dispatch }) => next => action => {
  console.log('este es mi viejo estado', getState().toJS())
  console.log('vamos a enviar está acción', action);
  const value = next(action)
  console.log('este es mi nuevo estado', getState().toJS())
  return value
}

// crear el store con sus tres parametros
const store = createStore(
  reducer,
  map(),
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  composeWithDevTools(
    applyMiddleware(
      logger,
      logger_,
      thunk
  )
 )
);

// console.log(store.getState());
/** **********************************************************************/

const homeContainer = document.getElementById('home-container')
// ReactDOM.render(que voy a renderizar, donde lo haré);
// const holaMundo = <h1>hola Estudiante!</h1>;
// render( <HomePage data={data}/>, homeContainer);
render(
  // Provider componente de alto nivel
  <BrowserRouter
  >
    <Provider store={store}>
      <Fragment>
      {/* Definiendo rutas */}
        <Route exact path="/" component={ HomePage } />
        <Route exact path="/videos"><div>Videos</div></Route>
        {/* <HomePage /> */}
      </Fragment>
    </Provider>
  </BrowserRouter>
  , homeContainer);