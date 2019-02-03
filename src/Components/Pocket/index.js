import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';
import {
    POCKET_KEY_1,
    POCKET_KEY_2,
} from '../../Constants';
import CurrencySelector from './Components/CurrencySelector';
import MoneyInput from './Components/MoneyInput';
import Balance from './Components/Balance';

const Pocket = ({
    pocketKey,
    active,
    amount,
    currencies,
    currency,
    balance,
    amountOnChange,
    currencyOnChange,
    setActive,
    disabled,
}) => {
    return (
        <div className={styles.pocket}>
            <Balance currency={currency} balance={balance}/>
            <CurrencySelector
                currency={currency}
                currencies={currencies}
                onSelect={currencyOnChange}
                disabled={disabled}
            />
            <MoneyInput
                value={amount}
                onChange={amountOnChange}
                active={active}
                setActive={() => setActive(pocketKey)}
                disabled={disabled}
            />
        </div>
    );
};

Pocket.propTypes = {
    pocketKey: PropTypes.oneOf([ POCKET_KEY_1, POCKET_KEY_2]),
    currencies: PropTypes.array.isRequired,
    currency: PropTypes.string.isRequired,
    currencyOnChange: PropTypes.func.isRequired,
    amount: PropTypes.number,
    amountOnChange: PropTypes.func.isRequired,
    active: PropTypes.bool,
    setActive: PropTypes.func.isRequired,
    balance: PropTypes.number.isRequired,
    disabled: PropTypes.bool,
};

Pocket.defaultProps = {
    active: false,
    amount: 0,
    disabled: false,
};

export default Pocket;
