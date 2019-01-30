import React from 'react';
import ReactDOM from 'react-dom';
import ExchangeWidget from './Components/ExchangeWidget';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ExchangeWidget />, div);
  ReactDOM.unmountComponentAtNode(div);
});
