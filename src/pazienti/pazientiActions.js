import api from './PazientiApi';


// export const FETCH_PAZIENTI = 'FETCH_PAZIENTI'
// export const FETCH_PAZIENTI_SUCCESS = 'FETCH_PAZIENTI_SUCCESS'
// export const FETCH_PAZIENTI_ERROR = 'FETCH_PAZIENTI_ERROR'

import { composables } from '@orange-marmalade/paginate-this'

 const pageActions = composables({ listId: 'pazienti' })

export function fetchPazienti(pageInfo) {
    // return dispatch => {
    //   dispatch({ type: FETCH_PAZIENTI })
    //   return api.getPazientiPaginated(pageInfo.query).then(resp => {
    //     dispatch({ type: FETCH_PAZIENTI_SUCCESS, ...resp.data })
    //     return resp
    //   }).catch(error => {
    //     dispatch({ type: FETCH_PAZIENTI_ERROR, error })
    //     throw error
    //   })
    // }
    return () => api.getPazientiPaginated(pageInfo.query)
  }

  export function showActive(showingActive) {
    return pageActions.setFilter('active', showingActive || undefined);
  }

  export function filter(filterValue) {
    return pageActions.setFilter('filter', filterValue || undefined);
  } 

  export function fetchPaziente(id) {
    return dispatch => {
      return dispatch({
        type: 'FETCH_PAZIENTE',
        payload: api.getPaziente(id)
      })
    }
  }

  export function newPaziente() {
    return dispatch => {
      dispatch({
        type: 'NEW_PAZIENTE'
      })
    }
  }
  
  export function savePaziente(paziente) {
    console.log(paziente);
    //paziente = converDatesToIso(paziente);
    //console.log(paziente);
    return dispatch => {
      return dispatch({
        type: 'SAVE_PAZIENTE',
        payload: api.savePaziente(paziente)//{data:{paziente:{id: -1, nome:"test", cognome:"test cog",consulti:[],anamnesiRemote:[]}}}//api.savePaziente(paziente)
      })
    }
  }

  export function resetPaziente() {
    return dispatch => {
      return dispatch({
        type: 'PAZIENTE_RESET',
        payload: null
      })
    }
  }

  export function setActiveConsultoId(consultoId) {
    return dispatch => {
      return dispatch({
        type: 'CONSULTO_ACTIVE',
        payload: consultoId
      })
    }
  }

  export function fetchProvince() {
    return dispatch => {
      return dispatch({
        type: 'FETCH_PROVINCE',
        payload: api.getProvince()
      })
    }
  }