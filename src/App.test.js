import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {withRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  //const Component = () => <App />
  //const WrappedComponent = withRouter(<App />)
  ReactDOM.render(withRouter(<App />), div);
});

