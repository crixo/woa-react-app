import React, { Component } from 'react';
import { connect } from 'react-redux'
import { NavLink, Route, withRouter } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import { PrivateRoute } from './authentication/PrivateRoute';

import PazientiListPage from './pages/pazienti-list-page';
import PazienteFormPage from './pages/paziente-form-page';
import PazienteDetailsPage from './pages/paziente-details-page';
import ConsultoDetailsPage from './pages/consulto-details-page';
import ConsultoFormPage from './pages/consulto-form-page';
import AnamnesiRemotaFormPage from './pages/anamnesi-remota-form-page';
import AnamnesiProssimaFormPage from './pages/anamnesi-prossima-form-page';
import EsameFormPage from './pages/esame-form-page';
import TrattamentoFormPage from './pages/trattamento-form-page';
import ValutazioneFormPage from './pages/valutazione-form-page';
import LoginPage from './pages/login-page';

import { fetchProvince } from './pazienti/pazientiActions';
import { fetchTipiAnamnesiRemote } from './anamnesiRemote/anamnesiRemoteActions';
import { fetchTipiEsame } from './esami/esamiActions';

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.props.fetchProvince();
    this.props.fetchTipiAnamnesiRemote();
    this.props.fetchTipiEsame();
  }



  render() {
    const pazienteLink = this.props.pazienteId !== undefined?
      <NavLink className="item" activeClassName="active" to={`/paziente/details/${this.props.pazienteId}`}>Paziente</NavLink>
      : <a className="item disabled">Paziente</a>;

      const consultoLink = this.props.consultoId !== undefined?
      <NavLink className="item" activeClassName="active" to={`/consulto/details/${this.props.consultoId}`}>Consulto</NavLink>
      : <a className="item disabled">Consulto</a>;     
      
    const menu = this.props.authenticated?
      <div className="ui five item menu">
        <NavLink className="item" activeClassName="active" exact to="/">
          Pazienti
        </NavLink>
        <NavLink className="item" activeClassName="active" exact to="/paziente/new">
          Crea Paziente
        </NavLink>
        {pazienteLink}
        {consultoLink}
        <NavLink className="item" activeClassName="active" exact to="/login">
          Logout
        </NavLink>
      </div>
      : <div></div>;


    return (
      <Container>
        {menu}

        <Route path="/login" component={LoginPage}/>

        <PrivateRoute exact path="/" authenticated={this.props.authenticated} component={PazientiListPage} />
        <PrivateRoute path="/paziente/details/:id" authenticated={this.props.authenticated} component={PazienteDetailsPage} />
        <PrivateRoute path="/paziente/new" authenticated={this.props.authenticated} component={PazienteFormPage} />
        <PrivateRoute path="/paziente/edit/:id" authenticated={this.props.authenticated} component={PazienteFormPage} />

        <PrivateRoute path="/anamnesi-remota/new" authenticated={this.props.authenticated} component={AnamnesiRemotaFormPage} />
        <PrivateRoute path="/anamnesi-remota/edit/:id" authenticated={this.props.authenticated} component={AnamnesiRemotaFormPage} />

        <PrivateRoute path="/consulto/details/:id" authenticated={this.props.authenticated} component={ConsultoDetailsPage} />
        <PrivateRoute path="/consulto/new" authenticated={this.props.authenticated} component={ConsultoFormPage} />
        <PrivateRoute path="/consulto/edit/:id" authenticated={this.props.authenticated} component={ConsultoFormPage} />

        <PrivateRoute path="/anamnesi-prossima/new" authenticated={this.props.authenticated} component={AnamnesiProssimaFormPage} />
        <PrivateRoute path="/anamnesi-prossima/edit/:id" authenticated={this.props.authenticated} component={AnamnesiProssimaFormPage} />

        <PrivateRoute path="/esame/new" authenticated={this.props.authenticated} component={EsameFormPage} />
        <PrivateRoute path="/esame/edit/:id" authenticated={this.props.authenticated} component={EsameFormPage} />

        <PrivateRoute path="/trattamento/new" authenticated={this.props.authenticated} component={TrattamentoFormPage} />
        <PrivateRoute path="/trattamento/edit/:id" authenticated={this.props.authenticated} component={TrattamentoFormPage} />

        <PrivateRoute path="/valutazione/new" authenticated={this.props.authenticated} component={ValutazioneFormPage} />
        <PrivateRoute path="/valutazione/edit/:id" authenticated={this.props.authenticated} component={ValutazioneFormPage} />
      </Container>
    );
  }
}

function mapStateToProps(state) {
  const pazienteId = state.pazienteStore.paziente.id;
  const consultoId = state.consultiStore.activeConsultoId;

  return {
    pazienteId: pazienteId,
    consultoId: consultoId,
    authenticated: state.userStore.authenticated
  }
}

//https://egghead.io/lessons/javascript-redux-using-withrouter-to-inject-the-params-into-connected-components
export default withRouter(connect(mapStateToProps, { fetchProvince, fetchTipiAnamnesiRemote, fetchTipiEsame })(App));
