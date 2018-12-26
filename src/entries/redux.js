// importar metodo de redux
import { createStore } from 'redux';

const $form = document.getElementById('form');
$form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const data = new FormData($form);
  const title = data.get('title');
  console.log(title);
  //****1.1  DEFINIR METODO DE ACCIONES SE HACE CON dispatch
  store.dispatch({
    // siempre deberá ser e ir un type es tipo de acción como desayunar correr etc 
    type: 'ADD_SONG',
    // payload o como se quiera definir
    payload: {
      title,
    }
  })
}
//1. *DEFINIR ESTADO lista objetos, variablesmapas etc
const initialState = [
  {
    "title": "Kurenai",
  },
  {
    "title": "Imagine",
  },
  {
    "title": "With out you",
  }
]
// **2. DEFINIENDO MI REDUCER DEL STORE
//recibe mi estado (cambiar algo dentro de mi estado) y mi acción(validar ejm quitar o agregar una cancion)
const reducer = function(state, action)
// Que hago con el estado y la accion if, switch
{
  switch (action.type) {
    // corresponde a la accion
    case 'ADD_SONG':
    // crear nueva lista de canciones con el spri operator(..descomponer nuestro estado colocar anteriores canciones)
      // , action.playload agregar una nueva
      return [...state, action.payload]
      // no
    default:
      return state
  }
}
/*******DEFINIENDO MI STORE DE REDUX**************/
const store = createStore(
  // Lo que se pasa en un store 3 cosas//
  //1. reducer = funcion pura
  reducer,
  // 2.Estado inicial puede ser el modelado de mis datos inicial initialstate = variable
  initialState,
  // 3.Enhancer = conexion con otras herramienta ejem webtools de redux
  // cod segun este repo https://github.com/zalmoxisus/redux-devtools-extension
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)
/**OBTENER DATOS / MOSTRAR EN PANTALLA*/
function render() {
  // de redux.html
  const $container = document.getElementById('playlist');
  // constante de estado store.metodo getState obtener la lista de informacion
  const playlist = store.getState();
  // borrar todo lo que haya dentro del contenedor antes de iterar
  $container.innerHTML = '';
  // Imprimir la iteracion de los datos
  playlist.forEach((item) => {
    // crear etiqueta
    const template = document.createElement('p');
    // textContent es una propiedad recibira el title de initialState
    template.textContent = item.title;
    // appenChild añadir nuevos hijos html
    $container.appendChild(template);
  })
}
render();
// llamar render cada vez que se actualiza la aplicacion
function handleChange() {
  render();
}
// metodo del store
store.subscribe(handleChange)
// Mostar en consola los datos
// console.log(store.getState())
