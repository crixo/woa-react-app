import React, { Component} from 'react';
import { Redirect } from 'react-router';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import PazienteDetails from '../pazienti/PazienteDetails';
import AnamnesiProssimaForm from '../anamnesiProssime/AnamnesiProssimaForm';
import { saveAnamnesiProssima } from '../anamnesiProssime/anamnesiProssimeActions';

class AnamnesiProssimaFormPage extends Component {

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
    return this.props.saveAnamnesiProssima(anamnesi)
      .then(response => this.setState({ redirect:true }))
      .catch(err => {
         throw new SubmissionError(this.props.errors)
       })
  }

  render() {
    if(this.state.redirect){
      return (<Redirect to={`/consulto/details/${this.props.activeConsultoId}`} />);
    }
    return (
      <div className="ui grid">
          <div className="four wide column">
            <PazienteDetails paziente={this.props.paziente} />
          </div>
          <div className="twelve wide column">
            <AnamnesiProssimaForm entity={this.props.anamnesi} loading={this.props.loading} onSubmit={this.submit} />
          </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  const { id } = ownProps.match.params;
  const anamnesiId = parseInt(id, 10);
  const paziente = state.pazienteStore.paziente;
  const activeConsultoId = state.consultiStore.activeConsultoId;
  const anamnesi = id? state.anamnesiProssimeStore.entities.find(x=>x.consultoId === anamnesiId) : {pazienteId: paziente.id, consultoId: activeConsultoId, isNew: true};
  console.log(anamnesi);
  return {
    paziente: paziente,
    anamnesi: anamnesi,
    activeConsultoId: activeConsultoId,
    errors: state.pazienteStore.errors,
    loading: state.pazienteStore.loading
  }
}

export default connect(mapStateToProps, {saveAnamnesiProssima})(AnamnesiProssimaFormPage);