import React, { Component} from 'react';
import { connect } from 'react-redux';
import PazientiList from '../pazienti/PazientiList';
import {resetPaziente} from '../pazienti/pazientiActions';
import {resetActiveConsulto} from '../consulti/consultiActions';

class PazientiListPage extends Component {
  componentWillMount() {
    this.props.resetPaziente();
    this.props.resetActiveConsulto();
  }

  render() {
    return (
      <div>
        <h1>Pazienti</h1>
        <PazientiList />
      </div>
    )
  }
}



export default connect(  undefined, { resetPaziente, resetActiveConsulto })(PazientiListPage);