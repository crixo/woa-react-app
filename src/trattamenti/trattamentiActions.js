import api from './TrattamentiApi';

  export function saveTrattamento(entity) {
    return dispatch => {
      return dispatch({
        type: 'SAVE_TRATTAMENTO',
        payload: api.save(entity)
      })
    }
  }