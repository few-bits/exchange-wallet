import React from 'react';
import PropTypes from 'prop-types';
import formatMessage from 'format-message';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';
import {CURRENCY_SIGNS, URL_WALLET} from '../../../../Constants';
import lang from '../../../../lang';

const Balance = ({
    currency,
    balance,
}) => {
    const content = formatMessage(lang.BALANCE, {
        balance,
        currencySign: CURRENCY_SIGNS[currency],
    });

    return (
        <Link
            to={`${URL_WALLET}/${currency}`}
            className={styles.pocketBalance}
        >
            {content}
        </Link>
    );
};

Balance.propTypes = {
    currency: PropTypes.string.isRequired,
    balance: PropTypes.number.isRequired,
};

export default Balance;
