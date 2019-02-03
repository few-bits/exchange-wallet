import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';
import { CURRENCY_SIGNS } from '../../Constants';

const Rate = ({
    currencyFrom,
    currencyTo,
    rate,
}) => {
    const content = rate
        ? (
            <>
                <span>1{CURRENCY_SIGNS[currencyFrom]}</span>
                <span>=</span>
                <span>{rate}{CURRENCY_SIGNS[currencyTo]}</span>
            </>
        )
        : (
            <div className={styles.loading}>loading...</div>
        );

    return (
        <div className={styles.rate}>
            {content}
        </div>
    );
};

Rate.propTypes = {
    currencyFrom: PropTypes.string.isRequired,
    currencyTo: PropTypes.string.isRequired,
    rate: PropTypes.number,
};

Rate.defaultProps = {
    rate: null,
};

export default Rate;
