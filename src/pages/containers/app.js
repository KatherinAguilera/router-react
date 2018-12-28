import React, {  Fragment, Component } from 'react';
import  { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Map as map } from 'immutable';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Route, Switch, Redirect } from 'react-router-dom';

import reducer from '../../reducers/index';
import HomePage from './homepage';
import Home from '../components/home';
import NotFound from '../components/not-found';
import Video from './video';

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

class App extends Component {
  render(){
    return(
      <Provider store={store}>
      <Fragment>
      {/* de router para que no muetre siempre el componente 404 en todos los componentes del menu */}
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/videos" component={ HomePage } />
        <Route exact path="/videos/:id" component={ Video } />
        <Redirect from="/v" to="/videos" />
        <Redirect from="/v/:id" to="/videos/:id" />
        <Route component={ NotFound } />
      </Switch>
      </Fragment>
    </Provider>
    )
  }
}

export default App