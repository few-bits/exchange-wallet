import React from 'react';
import PropTypes from 'prop-types';
import formatMessage from 'format-message';

import styles from './styles.module.scss';
import { CURRENCY_SIGNS } from '../../../../Constants';
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
        <div className={styles.pocketBalance}>
            {content}
        </div>
    );
};

Balance.propTypes = {
    currency: PropTypes.string.isRequired,
    balance: PropTypes.number.isRequired,
};

export default Balance;
