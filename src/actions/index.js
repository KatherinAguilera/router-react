import {
  CLOSE_MODAL,
  OPEN_MODAL,
  SEARCH_ENTITIES,
  SEARCH_ASYNC_ENTITIES,
  IS_LOADING
} from '../actions-types/index';

// creadores de acciones
export function openModal(mediaId) {
  return {
    type: OPEN_MODAL,
    payload: {
      mediaId
    }
  }
}
export function closeModal() {
  return {
    type: CLOSE_MODAL,
  }
}
export function isLoading(value) {
  return {
    type: IS_LOADING,
    payload: {
      value
    }
  }
}

export function searchEntities(query) {
  return {
    type: SEARCH_ENTITIES,
    payload: {
      query,
    }
  }
}
export function searchAsyncEntities(query) {
  return (dispatch) => {
    // fetch().then(()=>)
    // XHR
    // trae
    dispatch(isLoading(true))
    setTimeout(()=> {
      dispatch(isLoading(false))
      dispatch(searchEntities(query))
    }, 3000)
  }
}
