import initialState from '../store/initialState';
import { initialize } from 'redux-form';


export default (state=initialState.userState, action={}) => {
  //console.log(`reducer -> ${action.type}`)
  switch (action.type) { 

    case 'LOGIN': {
      const loginResult = {...action.payload};
      console.log(loginResult);
      console.log(state);
      const newState = {
      ...state,
      authenticated: loginResult.authenticated,
      authMsg: loginResult.msg,
    }

    console.log(newState);
      return newState
    }      

    case 'LOGOUT': {
      return {
        ...state,
        authenticated: false,
        authMsg: ''
      }
    }      

    default:
      return state;
  }
}