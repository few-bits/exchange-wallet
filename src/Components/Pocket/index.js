import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';
import {
    POCKET_KEY_1,
    POCKET_KEY_2,
} from '../../Constants';

const Pocket = ({
    pocketKey,
    active,
    credit,
    debit,
    currency,
    balance,
    rate,
    onCreditChange,
    setActive,
}) => (
    <div className={styles.pocket}>
        [{currency}] {balance} ({rate})
        {
            active
            ? <input
                    type="number"
                    min="0"
                    step=".01"
                    value={credit ? credit : ''}
                    onChange={(e) => {
                        onCreditChange(pocketKey, e.target.value, rate)
                    }}
                    autoFocus
                />
            : <span onClick={() => setActive(pocketKey)}>{debit}</span>
        }
    </div>
);

Pocket.propTypes = {
    pocketKey: PropTypes.oneOf([ POCKET_KEY_1, POCKET_KEY_2]).isRequired,
    active: PropTypes.bool,
    credit: PropTypes.number,
    debit: PropTypes.number,
    currency: PropTypes.string.isRequired,
    balance: PropTypes.number.isRequired,
    rate: PropTypes.number,
    onCreditChange: PropTypes.func.isRequired,
    setActive: PropTypes.func.isRequired,
};

Pocket.defaultProps = {
    rate: 0,
    active: false,
    credit: null,
    debit: null,
};

export default Pocket;
