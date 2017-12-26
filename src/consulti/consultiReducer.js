import initialState from '../store/initialState';


export default (state=initialState.consultiStore, action={}) => {
  //console.log(`reducer -> ${action.type}`)
  switch (action.type) {
    case 'PAZIENTE_RESET': {
      return {
        ...initialState.consultiStore
      }
    }

    case 'FETCH_PAZIENTE_PENDING': {
      return {
        ...initialState.consultiStore
      }
    }
    
    case 'FETCH_PAZIENTE_FULFILLED': {
      let paziente = {...action.payload.data};

      console.log(paziente);

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
      console.log(action.payload.data);
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