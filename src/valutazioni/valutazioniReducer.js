import initialState from '../store/initialState';

export default (state=initialState.trattamentiState, action={}) => {
  switch (action.type) {     

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

      let valutazioni = [];
      paziente.consulti.forEach(c => {
        valutazioni.push(...c.valutazioni);
      });

      const newState = {
        ...state,
        entities: valutazioni
      };

      return newState;
    }    


    case 'SAVE_VALUTAZIONE_PENDING': {
      return {
        ...state
      }
    }  

    case 'SAVE_VALUTAZIONE_FULFILLED': {
      const entity = {...action.payload.data};
      return {
        ...state,
        entities: [
          ...state.entities.filter(x => x.id !== action.payload.data.id), 
          entity
        ]
      }
    }  
    case 'SAVE_VALUTAZIONE_REJECTED': {
      //const errors = { global: 'SAVE_ANAMNESI_PROSSIMA_REJECTED'};
      return {
        ...state
      }
    } 

    default:
      return state;
  }
}    