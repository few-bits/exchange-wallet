import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import ExchangeWidget from './Containers/ExchangeWidget';

const App = ({ store }) => (
    <Provider store={store}>
        <ExchangeWidget />
    </Provider>
);

App.propTypes = {
    store: PropTypes.object.isRequired,
};

export default App;
