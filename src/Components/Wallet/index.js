import React from 'react';
import PropTypes from 'prop-types';

import styles from './Wallet.module.scss';

const Wallet = ({ balance }) => (
    <div className={styles.balance}>
        { balance }
    </div>
);

Wallet.propTypes = {
    balance: PropTypes.number.isRequired,
};

export default Wallet;
