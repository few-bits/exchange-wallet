import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import styles from './ExchangeWidget.module.scss';
import {
    CURRENCY_EUR,
    CURRENCY_USD,
    CURRENCY_GBP,
} from '../../Constants';
import Wallet from '../../Components/Wallet';

const ExchangeWidget = ({ account, pockets }) => {
    const { currency: sourceCurrency } = pockets.source;
    const { currency: receiverCurrency } = pockets.receiver;

    return (
        <div className={styles.exchangeWidget}>
            <header className={styles.header}>
                <Wallet
                    currency={sourceCurrency}
                    balance={account[sourceCurrency].balance}
                />
                <Wallet
                    currency={receiverCurrency}
                    balance={account[receiverCurrency].balance}
                />
            </header>
        </div>
    );
};

const mapStateToProps = (state) => ({
    account: state.account,
    pockets: state.pockets,
});

ExchangeWidget.propTypes = {
    account: PropTypes.shape({
        [CURRENCY_EUR]: PropTypes.shape({
            balance: PropTypes.number
        }),
        [CURRENCY_USD]: PropTypes.shape({
            balance: PropTypes.number
        }),
        [CURRENCY_GBP]: PropTypes.shape({
            balance: PropTypes.number
        })
    }).isRequired,
    pockets: PropTypes.shape({
        source: PropTypes.shape({
            currency: PropTypes.oneOf([CURRENCY_EUR, CURRENCY_USD, CURRENCY_GBP])
        }),
        receiver: PropTypes.shape({
            currency: PropTypes.oneOf([CURRENCY_EUR, CURRENCY_USD, CURRENCY_GBP])
        }),
    }).isRequired,
};

export default connect(mapStateToProps, null)(ExchangeWidget);
