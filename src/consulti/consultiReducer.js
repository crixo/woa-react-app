import initialState from '../store/initialState';


export default (state=initialState.consultiState, action={}) => {
  //console.log(`reducer -> ${action.type}`)
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
      let consulti=[];
      paziente.consulti.forEach(consulto => {
        let c = {...consulto};
        delete c.trattamenti;
        delete c.valutazioni;
        delete c.anamnesiProssima;
        consulti.push(c);
      });

      return {
        ...state,
        entities: consulti
      }
    }

    case 'CONSULTO_ACTIVE': {
      return {
        ...state,
        activeConsultoId: action.payload
      }
    }    

    case 'SAVE_CONSULTO_PENDING': {
      return {
        ...state
      }
    }  

    case 'SAVE_CONSULTO_FULFILLED': {
      const consulto = {...action.payload.data};
      return {
        ...state,
        entities: [
          ...state.entities.filter(x => x.id !== action.payload.data.id), 
          consulto
        ]
      }
    }  

    case 'SAVE_CONSULTO_REJECTED': {
      //const errors = { global: 'SAVE_ANAMNESI_REMOTA_REJECTED'};
      return {
        ...state
      }
    }      

    default:
      return state;
  }
}