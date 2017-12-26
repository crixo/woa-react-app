import initialState from '../store/initialState';


export default (state = initialState.pazienteState, action = {}) => {
  switch (action.type) {

    case 'NEW_PAZIENTE': {
      return {
        ...state,
        paziente: initialState.pazienteState
      }
    }

    case 'PAZIENTE_RESET': {
      return {
        ...state,
        paziente: initialState.pazienteState
      }
    }

    case 'FETCH_PAZIENTE_PENDING': {
      return {
        ...state,
        paziente: initialState.pazienteState
      }
    }

    case 'FETCH_PAZIENTE_FULFILLED': {
      let paziente = { ...action.payload.data };

      delete paziente.consulti;
      delete paziente.anamnesiRemote;

      return {
        ...state,
        paziente: paziente
      }
    }
    
    case 'SAVE_PAZIENTE_PENDING': {
      return {
        ...state
      }
    }

    case 'SAVE_PAZIENTE_FULFILLED': {
      return {
        ...state,
        paziente: action.payload.data
      }
    }

    case 'SAVE_PAZIENTE_REJECTED': {
      return {
        ...state
      }
    }

    case 'FETCH_PROVINCE_PENDING': {
      return {
        ...state
      }
    }

    case 'FETCH_PROVINCE_FULFILLED': {
      return {
        ...state,
        province: action.payload.data.map(x => ({ value: x.sigla, text: x.descrizione }))
      }
    }

    default:
      return state;
  }
}