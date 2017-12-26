import React, { Component} from 'react';
import { connect } from 'react-redux'
import PazienteDetails from '../pazienti/PazienteDetails';
import ConsultiList from '../consulti/ConsultiList';
import AnamnesiRemoteList from '../anamnesiRemote/AnamnesiRemoteList';
import {bindActionCreators} from 'redux';
import {fetchPaziente} from '../pazienti/pazientiActions';
import {resetActiveConsulto} from '../consulti/consultiActions';

class PazienteDetailsPage extends Component {
  // constructor(props, context) {
  //   super(props, context);
  // }

  componentWillMount() {
    this.props.resetActiveConsulto();
  }  

  componentDidMount() {
    const { id } = this.props.match.params;
    if(id){
      this.props.fetchPaziente(id)
    } else {
      console.error('missing id from path');
    }
  }  

  render() {
    return (
      <div className="ui grid">

          <div className="four wide column">
          <PazienteDetails paziente={this.props.paziente} />
          </div>
          <div className="five wide column">
            <AnamnesiRemoteList anamnesi={this.props.anamnesiRemote} tipi={this.props.tipiAnamnesiRemota} />
          </div>
          <div className="seven wide column">
            <ConsultiList consulti={this.props.consulti} />
          </div>
        </div>
  
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    paziente: state.pazienteStore.paziente,
    anamnesiRemote: state.anamnesiRemoteStore.entities,
    tipiAnamnesiRemota: state.anamnesiRemoteStore.tipi,
    consulti: state.consultiStore.entities
  };
}

export default connect(mapStateToProps, {fetchPaziente, resetActiveConsulto})(PazienteDetailsPage);