import React, { Component} from 'react';
import { connect } from 'react-redux'
import ConsultoDetails from '../consulti/ConsultoDetails';
import EsamiList from '../esami/EsamiList';
import TrattamentiList from '../trattamenti/TrattamentiList';
import ValutazioniList from '../valutazioni/ValutazioniList';
import AnamnesiProssima from '../anamnesiProssime/AnamnesiProssimaDetails';
import PazienteDetails from '../pazienti/PazienteDetails';
import * as actions from '../consulti/consultiActions';
import { bindActionCreators } from 'redux';

class ConsultoDetailsPage extends Component {
  componentWillMount() {
    this.props.actions.setActiveConsulto(this.props.consulto.id);
  }

  render() {
    return (
      <div className="ui two column divided grid">
        <div className="row">
          <div className="four wide column">
            <PazienteDetails paziente={this.props.paziente} />
          </div>
          <div className="twelve wide column">
            <div className="ui internally celled grid">
              <div className="row">
                <ConsultoDetails consulto={this.props.consulto} />
              </div>
              <div className="row">
                <div className="five wide column">
                  <AnamnesiProssima anamnesi={this.props.anamnesiProssima} />
                </div>
                <div className="seven wide column">
                  <EsamiList esami={this.props.esami} tipi={this.props.tipiEsame}/>
                  <TrattamentiList trattamenti={this.props.trattamenti} />
                  <ValutazioniList valutazioni={this.props.valutazioni} />
                </div>
              </div>
            </div>
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
  const consulto = state.consultiStore.entities.find(x=>x.id === consultoId);
  const anamnesi = state.anamnesiProssimeStore.entities.find(x=>x.consultoId === consultoId);
  const esami = state.esamiStore.entities.filter(x=>x.consultoId === consultoId);
  const trattamenti = state.trattamentiStore.entities.filter(x=>x.consultoId === consultoId);
  const valutazioni = state.pazienteStore.valutazioni.filter(x=>x.consultoId === consultoId);
  
  return {
    paziente: paziente,
    consulto: consulto,
    anamnesiProssima: anamnesi===undefined? {} : anamnesi,
    esami: esami, tipiEsame: state.esamiStore.tipi,
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