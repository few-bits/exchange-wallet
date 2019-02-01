import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import styles from './ExchangeWidget.module.scss';

import Wallet from '../../Components/Wallet';

const ExchangeWidget = ({ account }) => {
    return (
        <div className={styles.exchangeWidget}>
            <header className={styles.header}>
                <Wallet balance={account.balance} />
                <Wallet balance={account.balance} />
            </header>
        </div>
    );
};

const mapStateToProps = (state) => ({
    account: state.account,
});

ExchangeWidget.propTypes = {
    account: PropTypes.shape({
        balance: PropTypes.number
    }).isRequired,
};

export default connect(mapStateToProps, null)(ExchangeWidget);
