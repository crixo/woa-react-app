import { createPaginator, configurePageParams } from '@orange-marmalade/paginate-this';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import UiReducer from './uiReducer';
import { fetchPazienti } from '../pazienti/pazientiActions';
import PazientiReducer from '../pazienti/pazientiReducer';
import AnamnesiRemoteReducer from '../anamnesiRemote/anamnesiRemoteReducer';
import ConsultiReducer from '../consulti/consultiReducer';
import AnamnesiProssimeReducer from '../anamnesiProssime/anamnesiProssimeReducer';
import EsamiReducer from '../esami/esamiReducer';
import TrattamentiReducer from '../trattamenti/trattamentiReducer';

configurePageParams({
  page: 'skip',
  perPage: 'limit',
  results: 'records',
  totalCount: 'totalRecords',
  sortReverse: true
})
 
export default combineReducers({
  pazienti: createPaginator({
    listId: 'pazienti',
    fetch: fetchPazienti,
    initialSettings: {
        pageSize: 10
      },
  }),
  pazienteStore: PazientiReducer,
  anamnesiRemoteStore: AnamnesiRemoteReducer,
  consultiStore: ConsultiReducer,
  anamnesiProssimeStore: AnamnesiProssimeReducer,
  esamiStore: EsamiReducer,
  trattamentiStore: TrattamentiReducer,
  uiStore: UiReducer,
  form: formReducer
});