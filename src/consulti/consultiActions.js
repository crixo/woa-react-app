import api from './ConsultiApi';

  export function setActiveConsulto(consultoId) {
    return dispatch => {
      return dispatch({
        type: 'CONSULTO_ACTIVE',
        payload: consultoId
      })
    }
  }

  export function resetActiveConsulto() {
    return dispatch => {
      return dispatch({
        type: 'CONSULTO_DEACTIVE',
        payload: null
      })
    }
  }  

  export function saveConsulto(consulto) {
    return dispatch => {
      return dispatch({
        type: 'SAVE_CONSULTO',
        payload: api.save(consulto)
      })
    }
  }