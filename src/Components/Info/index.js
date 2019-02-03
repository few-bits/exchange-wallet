import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './styles.module.scss';
import { CURRENCY_SIGNS } from '../../Constants';
import lang from '../../lang';

const Rate = ({
    currencyFrom,
    currencyTo,
    rate,
    invert,
    isNetworkError,
}) => {
    let content = null;

    if (isNetworkError) {
        content = (
            <div className={styles.networkError}>
                {lang.NETWORK_ERROR}
            </div>
        );
    } else if (rate) {
        content = (
            <div className={classnames({
                [styles.rate]: true,
                [styles.invert]: invert,
            })}>
                <span>1{CURRENCY_SIGNS[currencyFrom]}</span>
                <span>=</span>
                <span>{rate}{CURRENCY_SIGNS[currencyTo]}</span>
            </div>
        );
    } else {
        content = <div className={styles.loading}>{lang.LOADING}</div>;
    }

    return (
        <div className={styles.info}>
            {content}
        </div>
    );
};

Rate.propTypes = {
    currencyFrom: PropTypes.string.isRequired,
    currencyTo: PropTypes.string.isRequired,
    rate: PropTypes.number,
    invert: PropTypes.bool,
    isNetworkError: PropTypes.bool,
};

Rate.defaultProps = {
    rate: null,
    invert: false,
    isNetworkError: false,
};

export default Rate;
