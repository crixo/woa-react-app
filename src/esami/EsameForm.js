import React, { Component } from 'react';
import { Form, Grid, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import {MySelect, MyDatePicker, MyTextarea, dateFromPickerParser} from '../common/FormFields';

const validate = (values) => {
  const errors = {};
  // if(!values.data) {
  //   errors.data = {
  //     message: 'Data obbligatoria'
  //   }
  // }
  return errors;
}


class EsameForm extends Component {

  componentWillMount = () => {
    console.log('componentWillMount');
    this.props.initialize(this.props.entity)
  }

  render() {
    const { handleSubmit, pristine, submitting, loading } = this.props;
    
    return (
      <Grid centered columns={2}>
        <Grid.Column>
          <h3 style={{marginTop:"1em"}}>Esame</h3>
          <Form onSubmit={handleSubmit} loading={loading}>
            <Field name="data" type="text" component={MyDatePicker} parse={dateFromPickerParser} label="Data" />  

            <Field name="tipoId" component={MySelect} label="Tipo" options={this.props.tipi} selectionMessage="scegli tipo" />

            <Field name="descrizione" type="text" component={MyTextarea} label="Descrizione"/>
            
            <Button primary type='submit' disabled={pristine || submitting}>Save</Button>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

export default reduxForm({form: 'esame-form', validate})(EsameForm);

