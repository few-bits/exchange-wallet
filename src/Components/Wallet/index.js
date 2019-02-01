import React from 'react';
import PropTypes from 'prop-types';

import styles from './Wallet.module.scss';
import {
    CURRENCY_EUR,
    CURRENCY_USD,
    CURRENCY_GBP,
} from '../../Constants'

const Wallet = ({ balance }) => (
    <div className={styles.balance}>
        { balance }
    </div>
);

Wallet.propTypes = {
    currency: PropTypes.oneOf([
        CURRENCY_EUR,
        CURRENCY_USD,
        CURRENCY_GBP,
    ]).isRequired,
    balance: PropTypes.number.isRequired,
};

export default Wallet;
