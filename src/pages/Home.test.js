import React from 'react';
import ReactDOM from 'react-dom';
import Home from 'pages/Home';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Home />, div);
});
