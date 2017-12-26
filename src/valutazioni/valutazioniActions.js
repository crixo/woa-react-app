import api from './ValutazioniApi';

  export function saveValutazione(entity) {
    return dispatch => {
      return dispatch({
        type: 'SAVE_VALUTAZIONE',
        payload: api.save(entity)
      })
    }
  }