import initialState from '../store/initialState';


export default (state=initialState.uiState, action={}) => {

  if(action.type.indexOf('_PENDING')>0){
    return {
      errors: {},
      loading: true
    };
  }

  if(action.type.indexOf('_FULFILLED')>0){
    return {
      ...state,
      loading: false
    };
  }  

  if(action.type.indexOf('_REJECTED')>0){
    return {
      errors: {global: action.type},
      loading: false
    };
  }    

  return state;

}
