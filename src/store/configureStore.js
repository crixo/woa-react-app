import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./rootReducer";
import { initializeStore } from '@orange-marmalade/paginate-this'
import { loadState, saveState } from './localStorage'
import throttle from 'lodash/throttle'

const reduxmiddleware = composeWithDevTools(applyMiddleware(promise(), thunk));

export default function configureStore(initialState) {

  console.log(`initialState:${initialState}`);
  if(initialState === undefined){
    console.log('reload state from localStorage');
    initialState = loadState();
  }
  
  const store = createStore(rootReducer, initialState, reduxmiddleware);

  initializeStore(store);

  store.subscribe(throttle(() => {
    saveState({
      pazienteStore: store.getState().pazienteStore,
      anamnesiRemoteStore: store.getState().anamnesiRemoteStore,
      consultiStore: store.getState().consultiStore,
      anamnesiProssimeStore: store.getState().anamnesiProssimeStore,
      esamiStore: store.getState().esamiStore,
    })
  }, 1000))

  return store;
}



