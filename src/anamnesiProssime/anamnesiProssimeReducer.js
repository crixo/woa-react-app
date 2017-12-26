import initialState from '../store/initialState';

export default (state=initialState.anamnesiProssimeState, action={}) => {
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
      let paziente = {...action.payload.data};

      let anamnesiProssime = [];
      paziente.consulti.forEach(consulto => {
        let c = {...consulto};
        if(c.anamnesiProssima !== undefined){
          anamnesiProssime.push(c.anamnesiProssima);
        }
      });

      const newState = {
        ...initialState.anamnesiProssimeStore,
        entities: anamnesiProssime
      };

      return newState;
    }    


    case 'SAVE_ANAMNESI_PROSSIMA_PENDING': {
      return {
        ...state
      }
    }  

    case 'SAVE_ANAMNESI_PROSSIMA_FULFILLED': {
      const anamesi = {...action.payload.data};
      return {
        ...state,
        entities: [
          ...state.entities.filter(x => x.consultoId !== action.payload.data.consultoId), 
          anamesi
        ]
      }
    }  
    case 'SAVE_ANAMNESI_PROSSIMA_REJECTED': {
      //const errors = { global: 'SAVE_ANAMNESI_PROSSIMA_REJECTED'};
      return {
        ...state
      }
    } 

    default:
      return state;
  }
}    