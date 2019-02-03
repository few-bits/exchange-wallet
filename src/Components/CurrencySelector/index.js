import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import formatMessage from 'format-message';

import styles from './styles.module.scss';
import lang from '../../lang';

const getOptionLabel = (currencyCode) => ({
    value: currencyCode,
    label: formatMessage(lang.CURRENCY_SELECTOR_OPTION, { currencyCode, currencyDescription: lang.CURRENCY_DESCRIPTION[currencyCode] }),
    className: 'currency-selector-option',
});

const CurrencySelector = ({
    currency,
    currencies,
    onSelect,
    disabled,
}) => {
    const options = currencies.map(getOptionLabel);

    const defaultValue = getOptionLabel(currency);

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
