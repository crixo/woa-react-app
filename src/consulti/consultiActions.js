import api from './ConsultiApi';

  export function saveConsulto(consulto) {
    return dispatch => {
      return dispatch({
        type: 'SAVE_CONSULTO',
        payload: api.save(consulto)
      })
    }
  }