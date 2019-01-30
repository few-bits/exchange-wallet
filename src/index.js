import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import createStore from './store/createStore';

const store = createStore();

const render = (App) => {
    return ReactDOM.render(
        <App store={store} />,
        document.getElementById('root')
    );
};

render(App);

if (module.hot) {
    module.hot.accept('./App', () => {
        const NextApp = require('./App').default;
        render(NextApp);
    })
}
