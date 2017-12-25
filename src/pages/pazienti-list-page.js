import React, { Component} from 'react';
import { connect } from 'react-redux';
import PazientiList from '../pazienti/PazientiList';
import * as actions from '../pazienti/pazientiActions';

class PazientiListPage extends Component {
  componentWillMount() {
    this.props.resetPaziente();
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

function mapStateToProps(state) {
  return {
    contact: 'test'
  }
}

export default connect(  mapStateToProps, { resetPaziente: actions.resetPaziente })(PazientiListPage);