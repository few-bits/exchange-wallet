import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';
import {
    POCKET_KEY_1,
    POCKET_KEY_2,
} from '../../Constants';
import CurrencySelector from './Components/CurrencySelector';
import MoneyInput from './Components/MoneyInput';

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
}) => {
    return (
        <div className={styles.pocket}>
            {balance} || {amount}
            <CurrencySelector currency={currency} currencies={currencies} onSelect={currencyOnChange} />
            <MoneyInput
                value={amount}
                onChange={amountOnChange}
                active={active}
                setActive={() => setActive(pocketKey)}
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
};

Pocket.defaultProps = {
    active: false,
    amount: 0,
};

export default Pocket;
