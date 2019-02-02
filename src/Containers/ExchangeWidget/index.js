import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import styles from './styles.module.scss';
import {
    CURRENCY_EUR,
    CURRENCY_USD,
    CURRENCY_GBP,
} from '../../Constants';
import Wallet from '../../Components/Wallet';

const ExchangeWidget = ({ account, pockets, rates }) => {
    const { currency: sourceCurrency } = pockets.source;
    const { currency: receiverCurrency } = pockets.receiver;

    const sourceRate = rates[receiverCurrency].rates[sourceCurrency];
    const receiverRate = rates[sourceCurrency].rates[receiverCurrency];

    return (
        <div className={styles.exchangeWidget}>
            <header className={styles.header}>
                <Wallet
                    currency={sourceCurrency}
                    balance={account[sourceCurrency].balance}
                    rate={receiverRate}
                />
                <Wallet
                    currency={receiverCurrency}
                    balance={account[receiverCurrency].balance}
                    rate={sourceRate}
                />
            </header>
        </div>
    );
};

const mapStateToProps = (state) => ({
    account: state.account,
    pockets: state.pockets,
    rates: state.rates,
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
    rates: PropTypes.shape({
        [CURRENCY_EUR]: PropTypes.shape({
            rates: PropTypes.object
        }),
        [CURRENCY_USD]: PropTypes.shape({
            rates: PropTypes.object
        }),
        [CURRENCY_GBP]: PropTypes.shape({
            rates: PropTypes.object
        })
    }).isRequired,
};

export default connect(mapStateToProps, null)(ExchangeWidget);
