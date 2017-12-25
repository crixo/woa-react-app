import React, { Component} from 'react';
import { Redirect } from 'react-router';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import PazienteDetails from '../pazienti/PazienteDetails';
import ConsultoForm from '../consulti/ConsultoForm';
import { saveConsulto } from '../consulti/consultiActions';

class ConsultoFormPage extends Component {

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

  submit = (entity) => {
    return this.props.saveConsulto(entity)
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
            <ConsultoForm entity={this.props.entity} loading={this.props.loading} onSubmit={this.submit} />
          </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  const { id } = ownProps.match.params;
  const entityId = parseInt(id, 10);
  const entity = id? state.pazienteStore.consulti.find(x=>x.id === entityId) : {pazienteId: state.pazienteStore.paziente.id};
  console.log(entity);
  return {
    paziente: state.pazienteStore.paziente,
    entity: entity,
    errors: state.pazienteStore.errors,
    loading: state.pazienteStore.loading
  }
}

export default connect(mapStateToProps, {saveConsulto})(ConsultoFormPage);