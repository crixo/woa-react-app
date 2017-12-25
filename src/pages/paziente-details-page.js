import React, { Component} from 'react';
import { connect } from 'react-redux'
import PazienteDetails from '../pazienti/PazienteDetails';
import ConsultiList from '../consulti/ConsultiList';
import AnamnesiRemoteList from '../anamnesiRemote/AnamnesiRemoteList';
import {bindActionCreators} from 'redux';
import * as pazientiActions from '../pazienti/pazientiActions';

class PazienteDetailsPage extends Component {
  // constructor(props, context) {
  //   super(props, context);
  // }

  componentDidMount() {
    const { id } = this.props.match.params;
    if(id){
      this.props.actions.fetchPaziente(id)
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
            <AnamnesiRemoteList anamnesi={this.props.anamnesiRemote} />
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
    anamnesiRemote: state.pazienteStore.anamnesiRemote,
    consulti: state.pazienteStore.consulti
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(pazientiActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PazienteDetailsPage);