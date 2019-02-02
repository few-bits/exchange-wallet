import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';
import {
    CURRENCY_EUR,
    CURRENCY_USD,
    CURRENCY_GBP,
} from '../../Constants'

const Pocket = ({ currency, balance, rate }) => (
    <div className={styles.balance}>
        [{currency}] {balance} ({rate})
    </div>
);

Pocket.propTypes = {
    currency: PropTypes.oneOf([
        CURRENCY_EUR,
        CURRENCY_USD,
        CURRENCY_GBP,
    ]).isRequired,
    balance: PropTypes.number.isRequired,
    rate: PropTypes.number,
};

Pocket.defaultProps = {
    rate: 0,
};

export default Pocket;
