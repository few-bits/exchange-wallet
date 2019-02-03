import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';
import { CURRENCY_SIGNS } from '../../../../Constants';

const Balance = ({
    currency,
    balance,
}) => {
    return (
        <div className={styles.pocketBalance}>
            <span className={styles.balance}>{balance}</span>
            <span className={styles.currencySign}>{CURRENCY_SIGNS[currency]}</span>
        </div>
    );
};

Balance.propTypes = {
    currency: PropTypes.string.isRequired,
    balance: PropTypes.number.isRequired,
};

export default Balance;
