import React, { Component } from 'react';
import { Form, Grid, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { MyInput } from '../common/FormFields';

const validate = (values) => {
  const errors = {};
  // if(!values.data) {
  //   errors.data = {
  //     message: 'Data obbligatoria'
  //   }
  // }
  return errors;
}


class ValutazioneForm extends Component {

  componentWillMount = () => {
    this.props.initialize(this.props.entity)
  }

  render() {
    const { handleSubmit, pristine, submitting, loading } = this.props;

    return (
      <Grid centered columns={2}>
        <Grid.Column>
          <h3 style={{ marginTop: "1em" }}>Valutazione</h3>
          <Form onSubmit={handleSubmit} loading={loading}>
            <Field name="strutturale" type="text" component={MyInput} label="Strutturale" />

            <Field name="cranioSacrale" type="text" component={MyInput} label="Cranio Sacrale" />

            <Field name="akOrtodontica" type="text" component={MyInput} label="Ak Ortodontica" />

            <Button primary type='submit' disabled={pristine || submitting}>Save</Button>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

export default reduxForm({ form: 'valutazione-form', validate })(ValutazioneForm);

