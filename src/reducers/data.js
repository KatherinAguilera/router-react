import schema from '../schemas/index.js';
import { fromJS } from 'immutable';
import { SEARCH_ENTITIES } from '../actions-types/index';

const initialState = fromJS({
  entities: schema.entities,
  categories: schema.result.categories,
  // search: [],
  search: '',
})
function data(state = initialState, action) {
  switch (action.type) {
    case SEARCH_ENTITIES: {
      // // action.payload.query
      // let results = [];
      // if (action.payload.query) {
      //   const list = state.data.categories[2].playlist;
      //   results = list.filter((item) => {
      //     return item.author.includes(action.payload.query)
      //   })
      // }
      // return {
      //   ...state,
      //   search: results
      // }
      // devolver un nuevo mapa de inmutable
      return state.set('search', action.payload.query)
    }
    default:
      return state
  }
}
export default data;