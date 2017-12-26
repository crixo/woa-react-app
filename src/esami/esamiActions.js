import api from './EsamiApi';

  export function fetchTipiEsame() {
    return dispatch => {
      return dispatch({
        type: 'FETCH_TIPI_ESAME',
        payload: api.getTipi()
      })
    }
  }


  export function saveEsame(esame) {
    console.log(esame);
    return dispatch => {
      return dispatch({
        type: 'SAVE_ESAME',
        payload: api.save(esame)
      })
    }
  }