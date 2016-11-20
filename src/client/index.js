import { render } from 'react-dom';
import React from 'react';
import Main from '../shared/components';
import { AppContainer } from 'react-hot-loader';

const root = document.getElementById('app');

render(
  <AppContainer>
    <Main />
  </AppContainer>,
  root
);

if (module.hot) {
  module.hot.accept('../shared/components', () => {
    const App = require('../shared/components').default;

    render((
      <AppContainer>
        <App />
      </AppContainer>
    ), root);
  });
}
