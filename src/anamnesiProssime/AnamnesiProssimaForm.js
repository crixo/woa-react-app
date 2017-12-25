import React, { Component } from 'react';
import { Form, Grid, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import {MyInput, MyTextarea} from '../common/FormFields';

const validate = (values) => {
  const errors = {};
  // if(!values.data) {
  //   errors.data = {
  //     message: 'Data obbligatoria'
  //   }
  // }
  return errors;
}


class AnamnesiProssimaForm extends Component {

  componentWillMount = () => {
    console.log('componentWillMount');
    this.props.initialize(this.props.entity)
  }

  render() {
    const { handleSubmit, pristine, submitting, loading } = this.props;
    
    return (
      <Grid centered columns={2}>
        <Grid.Column>
          <h3 style={{marginTop:"1em"}}>Anamnesi prossima</h3>
          <Form onSubmit={handleSubmit} loading={loading}>

            <Field name="primaVolta" type="text" component={MyInput} label="Prima Volta" />  

            <Field name="tipologia" type="text" component={MyInput} label="Tipologia" />  

            <Field name="localizzazione" type="text" component={MyInput} label="Localizzazione" />  

            <Field name="irradiazione" type="text" component={MyInput} label="Irradiazione" />  

            <Field name="durata" type="text" component={MyInput} label="Durata" />  

            <Field name="familiarita" type="text" component={MyInput} label="Familiarità" />  

            <Field name="altreTerapie" type="text" component={MyInput} label="Altre Terapie" />  

            <Field name="varie" type="text" component={MyTextarea} label="Varie"/>
            
            <Button primary type='submit' disabled={pristine || submitting}>Save</Button>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

export default reduxForm({form: 'anamnesiProssima-form', validate})(AnamnesiProssimaForm);

