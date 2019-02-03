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
}) => {
    const content = rate
        ? (
            <div className={classnames({
                [styles.info]: true,
                [styles.invert]: invert,
            })}>
                <span>1{CURRENCY_SIGNS[currencyFrom]}</span>
                <span>=</span>
                <span>{rate}{CURRENCY_SIGNS[currencyTo]}</span>
            </div>
        )
        : (
            <div className={styles.loading}>{lang.LOADING}</div>
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
    invert: PropTypes.bool,
};

Rate.defaultProps = {
    rate: null,
    invert: false,
};

export default Rate;
