import initialState from '../store/initialState';

export default (state=initialState.anamnesiRemote, action={}) => {
  //console.log(`reducer -> ${action.type}`)
  switch (action.type) {

    case 'FETCH_PAZIENTE_PENDING': {
      return {
        ...state
      };
    }      

    case 'FETCH_PAZIENTE_FULFILLED': {
      return {
        ...state,
        entities: [...action.payload.data.anamnesiRemote]
      };
    }    

    case 'FETCH_TIPI_ANAMNESI_PENDING': {
      return {
        ...state,
        tipi: []
      }
    }  
    
    case 'FETCH_TIPI_ANAMNESI_FULFILLED': {
      return {
        ...state,
        tipi: action.payload.data.map(x=>({value:x.id, text:x.descrizione})),
      }
    }      

    case 'SAVE_ANAMNESI_REMOTA_PENDING': {
      return {
        ...state
      }
    }  

    case 'SAVE_ANAMNESI_REMOTA_FULFILLED': {
      let anamesi = {...action.payload.data};
      // const tipo = state.tipi.find(x=>x.id === anamesi.tipoId);
      // anamesi.tipo = {...tipo};
      return {
        ...state,
        entities: [
          ...state.entities.filter(x => x.id !== action.payload.data.id), 
          anamesi
        ]
      }
    }  

    case 'SAVE_ANAMNESI_REMOTA_REJECTED': {
      //const errors = { global: 'SAVE_ANAMNESI_REMOTA_REJECTED'};
      return {
        ...state
      }
    }  

    default:
      return state;
  }
}