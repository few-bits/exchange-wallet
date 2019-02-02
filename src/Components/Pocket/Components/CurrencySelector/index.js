import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const CurrencySelector = ({
    currency,
    currencies,
    onSelect,
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
};

export default CurrencySelector;
