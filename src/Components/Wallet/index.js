import React from 'react';
import PropTypes from 'prop-types';

import styles from './Wallet.module.scss';
import {
    CURRENCY_EUR,
    CURRENCY_USD,
    CURRENCY_GBP,
} from '../../Constants'

const Wallet = ({ currency, balance, rate }) => (
    <div className={styles.balance}>
        [{currency}] {balance} ({rate})
    </div>
);

Wallet.propTypes = {
    currency: PropTypes.oneOf([
        CURRENCY_EUR,
        CURRENCY_USD,
        CURRENCY_GBP,
    ]).isRequired,
    balance: PropTypes.number.isRequired,
    rate: PropTypes.number,
};

Wallet.defaultProps = {
    rate: 0,
};

export default Wallet;
