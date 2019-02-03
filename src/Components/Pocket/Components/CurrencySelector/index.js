import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const CurrencySelector = ({
    currency,
    currencies,
    onSelect,
    disabled,
}) => {
    return (
        <div className={styles.currencySelector}>
            {currency}
        </div>
    );
};

CurrencySelector.propTypes = {
    currency: PropTypes.string.isRequired,
    currencies: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
};

CurrencySelector.defaultProps = {
    disabled: false,
};

export default CurrencySelector;
