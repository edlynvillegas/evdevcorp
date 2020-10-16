import React from 'react';
import { render } from '@testing-library/react'
import App from './App';
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

it('renders without crashing', () => {
  const history = createMemoryHistory()
  const div = document.createElement('div');
  render(
    <Router history={history}>
      <App />
    </Router>, div);
});