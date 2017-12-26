import initialState from '../store/initialState';

export default (state=initialState.anamnesiProssimeState, action={}) => {
  switch (action.type) {

    case 'FETCH_TIPI_ESAME_PENDING': {
      return {
        ...state,
        tipi: []
      }
    }  
    
    case 'FETCH_TIPI_ESAME_FULFILLED': {
      return {
        ...state,
        tipi: action.payload.data.map(x=>({value:x.id, text:x.descrizione})),
      }
    }       

    case 'PAZIENTE_RESET': {
      return {
        ...state,
        entities: []
      }
    }

    case 'FETCH_PAZIENTE_PENDING': {
      return {
        ...state,
        entities: []
      }
    }
    
    case 'FETCH_PAZIENTE_FULFILLED': {
      const paziente = action.payload.data;

      let esami = [];
      paziente.consulti.forEach(c => {
        esami.push(...c.esami);
      });

      const newState = {
        ...initialState.esamiState,
        entities: esami
      };

      return newState;
    }    


    case 'SAVE_ESAME_PENDING': {
      return {
        ...state
      }
    }  

    case 'SAVE_ESAME_FULFILLED': {
      const anamesi = {...action.payload.data};
      return {
        ...state,
        entities: [
          ...state.entities.filter(x => x.id !== action.payload.data.id), 
          anamesi
        ]
      }
    }  
    case 'SAVE_ESAME_REJECTED': {
      //const errors = { global: 'SAVE_ANAMNESI_PROSSIMA_REJECTED'};
      return {
        ...state
      }
    } 

    default:
      return state;
  }
}    