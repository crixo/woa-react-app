import React, { Component } from 'react';
import { Form, Grid, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import {MyTextarea, MyDatePicker, MySelect, dateFromPickerParser} from '../common/FormFields';

const validate = (values) => {
  const errors = {};
  if(!values.data) {
    errors.data = {
      message: 'Data obbligatoria'
    }
  }
  if(!values.tipoId) {
    errors.tipoId = {
      message: 'Tipo obbligatorio'
    }
  }
  if(!values.descrizione) {
    errors.descrizione = {
      message: 'Descrizione obbligatorio'
    }
  }
  return errors;
}


class AnamnesiRemotaForm extends Component {

  // componentWillReceiveProps = (nextProps) => { // Receive Contact data Asynchronously
  //   console.log('componentWillReceiveProps');
  //     const { entity } = nextProps;
  //     console.log(entity);
  //     if(entity.id !== this.props.entity.id) { // Initialize  form only once
  //       this.props.initialize(entity)
  //     }
  //   }

  componentWillMount = () => {
    console.log('componentWillMount');
    this.props.initialize(this.props.entity)
  }

  render() {
    const { handleSubmit, pristine, submitting, loading } = this.props;
    
    return (
      <Grid centered columns={2}>
        <Grid.Column>
          <h3 style={{marginTop:"1em"}}>Anamnesi remota</h3>
          <Form onSubmit={handleSubmit} loading={loading}>

            <Field name="data" type="text" component={MyDatePicker} parse={dateFromPickerParser} label="Data" />  

            <Field name="tipoId" component={MySelect} label="Tipo" options={this.props.tipiAnamnesi} selectionMessage="scegli tipo" />

            <Field name="descrizione" type="text" component={MyTextarea} label="Descrizione"/>
            
            <Button primary type='submit' disabled={pristine || submitting}>Save</Button>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

export default reduxForm({form: 'anamnesiRemota-form', validate})(AnamnesiRemotaForm);

