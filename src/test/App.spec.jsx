/* eslint-disable no-undef */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

describe('App', () => {
  it('must render App', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
  });
});
