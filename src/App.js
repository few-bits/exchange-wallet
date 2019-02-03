import React from 'react';
import { Provider } from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom';

import createStore from './store/createStore';
import { URL_ROOT, URL_WALLET } from './Constants';
import Exchange from './Containers/Exchange';
import Wallet from './Containers/Wallet';
import lang from './lang';
import styles from './App.module.scss';

const store = createStore();

const App = () => (
    <Provider store={store}>
        <Router>
            <div className={styles.app}>
                <nav>
                    <Link to={URL_ROOT}>{lang.EXCHANGE_LINK}</Link>
                    <Link to={URL_WALLET}>{lang.WALLET_LINK}</Link>
                </nav>
                <div className={styles.content}>
                    <Route path={URL_ROOT} exact component={Exchange} />
                    <Route path={`${URL_WALLET}/:currencyCode?`} component={Wallet} />
                </div>
            </div>
        </Router>
    </Provider>
);

export default App;
