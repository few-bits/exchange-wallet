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
            pocket1: PropTypes.shape({
                active: PropTypes.bool,
                credit: PropTypes.number,
                debit: PropTypes.number,
                currency: PropTypes.string
            }),
            pocket2: PropTypes.shape({
                active: PropTypes.bool,
                credit: PropTypes.number,
                debit: PropTypes.number,
                currency: PropTypes.string
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

        const {currency: currency1} = pockets.pocket1;
        const {currency: currency2} = pockets.pocket2;

        const pocket1Rate = rates[currency1] ? rates[currency1][currency2] : 0;
        const pocket2Rate = rates[currency2] ? rates[currency2][currency1] : 0;

        return (
            <div className={styles.exchangeWidget}>
                <header className={styles.header}>
                    <Pocket
                        currency={currency1}
                        balance={account[currency1].balance}
                        rate={pocket1Rate}
                    />
                    <Pocket
                        currency={currency2}
                        balance={account[currency2].balance}
                        rate={pocket2Rate}
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
