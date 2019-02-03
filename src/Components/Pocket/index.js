import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './styles.module.scss';
import {
    POCKET_KEY_1,
    POCKET_KEY_2,
} from '../../Constants';
import CurrencySelector from '../CurrencySelector';
import MoneyInput from '../MoneyInput';
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
    const notEnoughMoney = balance < amount && active;
    return (
        <div className={styles.pocket}>
            <div className={classnames({
                    [styles.block]: true,
                    [styles.active]: active,
                })}
            >
                <CurrencySelector
                    currency={currency}
                    currencies={currencies}
                    onSelect={(currency) => currencyOnChange(pocketKey, currency)}
                    disabled={disabled}
                />
                <MoneyInput
                    value={amount}
                    onChange={amountOnChange}
                    onClick={() => {
                        if (!active) {
                            setActive(pocketKey);
                        }
                    }}
                    disabled={disabled}
                />
            </div>
            <Balance
                currency={currency}
                balance={balance}
                notEnoughMoney={notEnoughMoney}
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
