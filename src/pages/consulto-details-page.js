import React, { Component} from 'react';
import { connect } from 'react-redux'
import ConsultoDetails from '../consulti/ConsultoDetails';
import EsamiList from '../esami/EsamiList';
import TrattamentiList from '../trattamenti/TrattamentiList';
import ValutazioniList from '../valutazioni/ValutazioniList';
import AnamnesiProssima from '../anamnesiProssime/AnamnesiProssimaDetails';
import PazienteDetails from '../pazienti/PazienteDetails';
import * as actions from '../pazienti/pazientiActions';
import { bindActionCreators } from 'redux';

class ConsultoDetailsPage extends Component {
  componentWillMount() {
    this.props.actions.setActiveConsultoId(this.props.consulto.id);
  }

  render() {
    return (
      <div className="ui three column divided grid">
        <div className="row">
          <div className="four wide column">
            <ConsultoDetails consulto={this.props.consulto} />
            <PazienteDetails paziente={this.props.paziente} />
          </div>
          <div className="five wide column">
            <AnamnesiProssima anamnesi={this.props.anamnesiProssima} />
          </div>
          <div className="seven wide column">
            <EsamiList esami={this.props.esami} />
            <TrattamentiList trattamenti={this.props.trattamenti} />
            <ValutazioniList valutazioni={this.props.valutazioni} />
          </div>
        </div>
      </div>   
    )
  }
}

function mapStateToProps(state, ownProps) {
  const { id } = ownProps.match.params;
  const consultoId = parseInt(id, 10);
  const paziente = state.pazienteStore.paziente;
  const consulto = state.pazienteStore.consulti.find(x=>x.id === consultoId);
  const anamnesi = state.pazienteStore.anamnesiProssime.find(x=>x.consultoId === consultoId);
  const esami = state.pazienteStore.esami.filter(x=>x.consultoId === consultoId);
  const trattamenti = state.pazienteStore.trattamenti.filter(x=>x.consultoId === consultoId);
  const valutazioni = state.pazienteStore.valutazioni.filter(x=>x.consultoId === consultoId);
  
console.log(typeof(consulto.id));
  return {
    paziente: paziente,
    consulto: consulto,
    anamnesiProssima: anamnesi===undefined? {} : anamnesi,
    esami: esami,
    trattamenti: trattamenti,
    valutazioni: valutazioni,

  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(  mapStateToProps, mapDispatchToProps)(ConsultoDetailsPage);