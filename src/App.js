import React from 'react';
import { Provider } from 'react-redux';

import ExchangeWidget from './Containers/ExchangeWidget';
import createStore from './store/createStore';

const store = createStore();

const App = () => (
    <Provider store={store}>
        <ExchangeWidget />
    </Provider>
);

export default App;
