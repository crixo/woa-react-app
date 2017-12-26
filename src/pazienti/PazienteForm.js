import React, { Component } from 'react';
import { Form, Grid, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import {MyInput, MyDatePicker, MySelect, dateFromPickerParser} from '../common/FormFields';

const validate = (values) => {
  const errors = {};
  if(!values.nome) {
    errors.nome = {
      message: 'Nome obbligatorio'
    }
  }
  if(!values.cognome) {
    errors.cognome = {
      message: 'Cognome obbligatorio'
    }
  }
  if(!values.dataDiNascita) {
    errors.dataDiNascita = {
      message: 'data di nascita obbligatoria'
    }
  }
  // if(!values.phone) {
  //   errors.phone = {
  //     message: 'You need to provide a Phone number'
  //   }
  // } else if(!/^\+(?:[0-9] ?){6,14}[0-9]$/.test(values.phone)) {
  //   errors.phone = {
  //     message: 'Phone number must be in International format'
  //   }
  // }
  if(values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = {
      message: 'email non valida'
    }
  }
  return errors;
}




class PazienteForm extends Component {

  componentWillReceiveProps = (nextProps) => { // Receive Contact data Asynchronously
      const { paziente } = nextProps;
      if(paziente.id !== this.props.paziente.id) { // Initialize  form only once
        this.props.initialize(paziente)
      }
    }

  render() {
    const { handleSubmit, pristine, submitting, loading } = this.props;

    const title = this.props.paziente.id===undefined? 'Crea nuovo paziente' : 'Modifica paziente';

    return (
      <Grid centered columns={2}>
        <Grid.Column>
          <h3 style={{marginTop:"1em"}}>{title}</h3>
          <Form onSubmit={handleSubmit} loading={loading}>

            <Form.Group widths='equal'>
              <Field name="nome" type="text" component={MyInput}  label="Nome"/>
              <Field name="cognome" type="text" component= {MyInput} label="Cognome"/>
            </Form.Group>

            <Form.Group>
              <Field name="professione" type="text" component={MyInput}  label="Professione" width={'eleven'}/>
              <Field name="dataDiNascita" type="text" component={MyDatePicker} 
                parse={dateFromPickerParser}
                label="Data di nascita" width={'five'}/>
            </Form.Group>

            <Field name="indirizzo" type="text" component={MyInput} label="Indirizzo"/>
            <Form.Group>
              <Field name="cap" type="text" component= {MyInput} label="CAP" width={'three'} />
              <Field name="citta" type="text" component= {MyInput} label="Città" width={'ten'} />
              <Field name="prov" component={MySelect} label="Prov" options={this.props.province} selectionMessage="..." width={'three'}/>
            </Form.Group>

            <Form.Group widths='equal'>
              <Field name="telefono" type="text" component={MyInput} label="Telefono"/>
              <Field name="cellulare" type="text" component= {MyInput} label="Cellulare"/>
            </Form.Group>

            <Field name="email" type="text" component= {MyInput} label="Email"/>
            
            <Button primary type='submit' disabled={pristine || submitting}>Save</Button>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

export default reduxForm({form: 'paziente-form', validate})(PazienteForm);

