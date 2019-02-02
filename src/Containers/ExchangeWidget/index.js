import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import styles from './styles.module.scss';
import {
    CURRENCY_EUR,
    CURRENCY_USD,
    CURRENCY_GBP,
} from '../../Constants';
import Pocket from '../../Components/Pocket';

import { startRatesRefreshing, stopRatesRefreshing } from '../../redux/rates/actions';

class ExchangeWidget extends Component {
    static propTypes = {
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
        actions: PropTypes.shape({
            startRatesRefreshing: PropTypes.func,
            stopRatesRefreshing: PropTypes.func,
        }).isRequired,
    };

    componentDidMount() {
        const { actions } = this.props;
        actions.startRatesRefreshing();
    }

    componentWillUnmount() {
        const { actions } = this.props;
        actions.stopRatesRefreshing();
    }


    render() {
        const {
            account,
            pockets,
            rates,
        } = this.props;

        const {currency: sourceCurrency} = pockets.source;
        const {currency: receiverCurrency} = pockets.receiver;

        const sourceRate = rates[receiverCurrency] ? rates[receiverCurrency][sourceCurrency] : 0;
        const receiverRate = rates[sourceCurrency] ? rates[sourceCurrency][receiverCurrency] : 0;

        return (
            <div className={styles.exchangeWidget}>
                <header className={styles.header}>
                    <Pocket
                        currency={sourceCurrency}
                        balance={account[sourceCurrency].balance}
                        rate={receiverRate}
                    />
                    <Pocket
                        currency={receiverCurrency}
                        balance={account[receiverCurrency].balance}
                        rate={sourceRate}
                    />
                </header>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    account: state.account,
    pockets: state.pockets,
    rates: state.rates,
});

const mapDispatchToProps = (dispatch) => ({
    actions: {
        startRatesRefreshing: () => dispatch(startRatesRefreshing),
        stopRatesRefreshing: () => dispatch(stopRatesRefreshing)
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ExchangeWidget);
