import api from './AnamnesiProssimeApi';

  export function saveAnamnesiProssima(anamnesi) {
    console.log(anamnesi);
    return dispatch => {
      return dispatch({
        type: 'SAVE_ANAMNESI_PROSSIMA',
        payload: api.save(anamnesi)
      })
    }
  }