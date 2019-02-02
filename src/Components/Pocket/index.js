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
                    value={credit ? credit : ''}
                    onChange={(e) => {
                        const { value } = e.target;
                        const match = value.match(/^[0-9]+(\.[0-9]{1,2})?$/);
                        let filteredValue = match ? match[0] : credit;
                        filteredValue = value === '' ? value : filteredValue;

                        onCreditChange(pocketKey, filteredValue, rate)
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
