import React, { Component} from 'react';
import { Redirect } from 'react-router';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { newPaziente, savePaziente, fetchPaziente} from '../pazienti/pazientiActions';
import PazienteForm from '../pazienti/PazienteForm';

class PazienteFormPage extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      redirect: false
    };
  }

  componentDidMount = () => {
    const { id } = this.props.match.params;
    if(id){
      this.props.fetchPaziente(id)
    } else {
      this.props.newPaziente();
    }
  }

  submit = (paziente) => {
    console.log(paziente);
    return this.props.savePaziente(paziente)
      .then(response => this.setState({ redirect:true }))
      .catch(err => {
         throw new SubmissionError(this.props.errors)
       })
  }

  render() {
    return (
      <div>
        {
          this.state.redirect ?
          <Redirect to={`/paziente/details/${this.props.paziente.id}`} /> :
          <PazienteForm paziente={this.props.paziente} loading={this.props.loading} province={this.props.province} onSubmit={this.submit} />
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    paziente: state.pazienteStore.paziente,
    errors: state.pazienteStore.errors,
    province: state.pazienteStore.province,
    loading: state.pazienteStore.loading
  }
}

export default connect(mapStateToProps, {newPaziente, savePaziente, fetchPaziente})(PazienteFormPage);