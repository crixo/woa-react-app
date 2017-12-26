import initialState from '../store/initialState';


export default (state=initialState, action={}) => {
  //console.log(`reducer -> ${action.type}`)
  switch (action.type) {
    case 'PAZIENTE_RESET': {
      return {
        ...state,
        loading: false,
        paziente: initialState.paziente,
        activeConsultoId: undefined
      }
    }

    case 'FETCH_PAZIENTE_PENDING': {
      return {
        ...state,
        loading: true,
        paziente: initialState.paziente
      }
    }
    
    case 'FETCH_PAZIENTE_FULFILLED': {
      let paziente = {...action.payload.data};

      let consulti=[], esami=[], trattamenti=[], valutazioni=[], anamnesiProssime = [];
      paziente.consulti.forEach(consulto => {
        let c = {...consulto};
        esami.push(...c.esami);
        trattamenti.push(...c.trattamenti);
        valutazioni.push(...c.valutazioni);
        if(c.anamnesiProssima !== undefined){
          anamnesiProssime.push(c.anamnesiProssima);
        }
        delete c.esami;
        delete c.trattamenti;
        delete c.valutazioni;
        delete c.anamnesiProssima;
        consulti.push(c);
      });

      const anamnesiRemote = [...paziente.anamnesiRemote];

      delete paziente.consulti;
      delete paziente.anamnesiRemote;

      return {
        ...state,
        paziente: paziente,
        anamnesiRemote: anamnesiRemote,
        consulti: consulti,
        anamnesiProssime: anamnesiProssime,
        esami: esami,
        trattamenti: trattamenti,
        valutazioni: valutazioni,
        errors: {},
        loading: false
      }
    }

    case 'NEW_PAZIENTE': {
      return {
        ...state,
        paziente: {cognome:"test"}
      }
    }

    // case 'SAVE_PAZIENTE': {

    //   console.log('SAVE_PAZIENTE');
    //   console.log(action.payload.data.paziente);
    //   return {
    //     ...state,
    //     paziente: action.payload.data.paziente,
    //     loading: false
    //   }
    // }

    case 'SAVE_PAZIENTE_PENDING': {
      return {
        ...state,
        loading: true
      }
    }

    case 'SAVE_PAZIENTE_FULFILLED': {
      // console.log('SAVE_PAZIENTE_FULFILLED');
      // console.log(action.payload.data);
      return {
        ...state,
        paziente: action.payload.data,
        errors: {},
        loading: false
      }
    }

    case 'SAVE_PAZIENTE_REJECTED': {
      console.log(action);
      const data = {message: "error"};
      //console.log(action.payload);
      //const data = action.payload.response.data;
      // convert feathers error formatting to match client-side error formatting
      //const { "name.first":first, "name.last":last, phone, email } = data.errors;
      const errors = { global: data.message, nome: {message:"nome is required"}, prov: {message:"prov is required"}, gender: {message:"prov is required"}};//, name: { first,last }, phone, email 
      return {
        ...state,
        errors: errors,
        loading: false
      }
    }   

    // case 'CONSULTO_ACTIVE': {
    //   return {
    //     ...state,
    //     activeConsultoId: action.payload
    //   }
    // }

    case 'FETCH_PROVINCE_PENDING': {
      return {
        ...state,
        loading: true
      }
    }   

    case 'FETCH_PROVINCE_FULFILLED': {
      return {
        ...state,
        province: action.payload.data.map(x=>({value:x.sigla, text:x.descrizione})),
        loading: false
      }
    }   

    // case 'FETCH_TIPI_ANAMNESI_PENDING': {
    //   return {
    //     ...state,
    //     loading: true
    //   }
    // }  
    
    // case 'FETCH_TIPI_ANAMNESI_FULFILLED': {
    //   return {
    //     ...state,
    //     tipiAnamnesi: action.payload.data.map(x=>({value:x.id, text:x.descrizione})),
    //     loading: false
    //   }
    // }  

    // case 'SAVE_ANAMNESI_REMOTA_PENDING': {
    //   return {
    //     ...state,
    //     loading: true
    //   }
    // }  

    // case 'SAVE_ANAMNESI_REMOTA_FULFILLED': {
    //   console.log(action.payload.data);
    //   let anamesi = action.payload.data;
    //   const tipo = state.tipiAnamnesi.find(x=>x.id === anamesi.tipoId);
    //   anamesi.tipo = {...tipo};
    //   return {
    //     ...state,
    //     anamnesiRemote: [...state.anamnesiRemote.filter(x => x.id !== action.payload.data.id), Object.assign({}, anamesi)],
    //     loading: false
    //   }
    // }  
    // case 'SAVE_ANAMNESI_REMOTA_REJECTED': {
    //   const errors = { global: 'SAVE_ANAMNESI_REMOTA_REJECTED'};
    //   return {
    //     ...state,
    //     errors: errors,
    //     loading: false
    //   }
    // }  
    

    // case 'SAVE_ANAMNESI_PROSSIMA_PENDING': {
    //   return {
    //     ...state,
    //     loading: true
    //   }
    // }  

    // case 'SAVE_ANAMNESI_PROSSIMA_FULFILLED': {
    //   console.log(action.payload.data);
    //   const anamesi = action.payload.data;
    //   return {
    //     ...state,
    //     anamnesiProssime: [...state.anamnesiProssime.filter(x => x.consultoId !== action.payload.data.consultoId), Object.assign({}, anamesi)],
    //     loading: false
    //   }
    // }  
    // case 'SAVE_ANAMNESI_PROSSIMA_REJECTED': {
    //   const errors = { global: 'SAVE_ANAMNESI_PROSSIMA_REJECTED'};
    //   return {
    //     ...state,
    //     errors: errors,
    //     loading: false
    //   }
    // }      

    default:
      return state;
  }
}