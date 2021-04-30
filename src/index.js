import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import { BrowserRouter } from 'react-router-dom';

const WithRouter = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

ReactDOM.render(
  <WithRouter />,
  document.getElementById('root')
);


