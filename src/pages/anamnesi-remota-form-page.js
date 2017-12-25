import React, { Component} from 'react';
import { Redirect } from 'react-router';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import PazienteDetails from '../pazienti/PazienteDetails';
import AnamnesiRemotaForm from '../anamnesiRemote/AnamnesiRemotaForm';
import { fetchTipi, saveAnamnesiRemota} from '../anamnesiRemote/anamnesiRemoteActions';

class AnamnesiRemotaFormPage extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      redirect: false
    };

    if(this.props.tipiAnamnesi.length == 0){
      this.props.fetchTipi();
    }
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
            <AnamnesiRemotaForm entity={this.props.anamnesi} tipiAnamnesi={this.props.tipiAnamnesi} loading={this.props.loading} onSubmit={this.submit} />
          </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  const { id } = ownProps.match.params;
  const anamnesiRemotaId = parseInt(id, 10);
  const anamnesi = id? state.pazienteStore.anamnesiRemote.find(x=>x.id === anamnesiRemotaId) : {pazienteId: state.pazienteStore.paziente.id};
  console.log(anamnesi);
  return {
    paziente: state.pazienteStore.paziente,
    anamnesi: anamnesi,
    tipiAnamnesi: state.pazienteStore.tipiAnamnesi,
    errors: state.pazienteStore.errors,
    loading: state.pazienteStore.loading
  }
}

export default connect(mapStateToProps, {saveAnamnesiRemota, fetchTipi})(AnamnesiRemotaFormPage);