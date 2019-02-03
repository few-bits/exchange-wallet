import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

import styles from './styles.module.scss';

const CurrencySelector = ({
    currency,
    currencies,
    onSelect,
    disabled,
}) => {
    const options = currencies.map((id) => ({
            value: id,
            label: id,
            className: 'currency-selector-option',
        })
    );

    const defaultValue = {value: currency, label: currency};

    return (
        <div className={styles.currencySelector}>
            <Select
                defaultValue={defaultValue}
                options={options}
                isClearable={false}
                isSearchable={false}
                isDisabled={disabled}
                onChange={selectedItem => onSelect(selectedItem.value)}
            />
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
