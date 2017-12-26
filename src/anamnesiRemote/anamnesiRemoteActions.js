import api from './AnamnesiRemoteApi';

  export function fetchTipiAnamnesiRemote() {
    return dispatch => {
      return dispatch({
        type: 'FETCH_TIPI_ANAMNESI',
        payload: api.getTipi()
      })
    }
  }

  export function saveAnamnesiRemota(anamnesi) {
    console.log(anamnesi);
    return dispatch => {
      return dispatch({
        type: 'SAVE_ANAMNESI_REMOTA',
        payload: api.save(anamnesi)
      })
    }
  }