import React, { Component} from 'react';
import { Redirect } from 'react-router';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import PazienteDetails from '../pazienti/PazienteDetails';
import AnamnesiRemotaForm from '../anamnesiRemote/AnamnesiRemotaForm';
import {saveAnamnesiRemota} from '../anamnesiRemote/anamnesiRemoteActions';

class AnamnesiRemotaFormPage extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      redirect: false
    };
  }

  componentDidMount = () => {
    // const { id } = this.props.match.params;
    // if(id){
    //   this.props.fetchPaziente(id)
    // } else {
    //   this.props.newPaziente();
    // }
  }

  submit = (anamnesi) => {
    return this.props.saveAnamnesiRemota(anamnesi)
      .then(response => this.setState({ redirect:true }))
      .catch(err => { 
        console.log(err);
        console.log(this.props.errors);
        throw new SubmissionError(this.props.errors) 
      })
  }

  render() {
    if(this.state.redirect){
      return (<Redirect to={`/paziente/details/${this.props.paziente.id}`} />);
    }
    return (
      <div className="ui grid">
          <div className="four wide column">
            <PazienteDetails paziente={this.props.paziente} />
          </div>
          <div className="twelve wide column">
            <AnamnesiRemotaForm entity={this.props.anamnesi} errors={this.props.errors} tipiAnamnesi={this.props.tipiAnamnesi} loading={this.props.loading} onSubmit={this.submit} />
          </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  const { id } = ownProps.match.params;
  const anamnesiRemotaId = parseInt(id, 10);
  const anamnesi = id? state.anamnesiRemoteStore.entities.find(x=>x.id === anamnesiRemotaId) : {pazienteId: state.pazienteStore.paziente.id};
  console.log(anamnesi);
  return {
    paziente: state.pazienteStore.paziente,
    anamnesi: anamnesi,
    tipiAnamnesi: state.anamnesiRemoteStore.tipi,
    errors: state.uiStore.errors,
    loading: state.uiStore.loading
  }
}

export default connect(mapStateToProps, {saveAnamnesiRemota})(AnamnesiRemotaFormPage);