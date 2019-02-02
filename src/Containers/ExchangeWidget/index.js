import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import styles from './styles.module.scss';
import {
    CURRENCY_EUR,
    CURRENCY_USD,
    CURRENCY_GBP,
    POCKET_KEY_1,
    POCKET_KEY_2,
} from '../../Constants';
import Pocket from '../../Components/Pocket';

import { startRatesRefreshing, stopRatesRefreshing } from '../../redux/rates/actions';
import {
    amountOnChange,
    currencyOnChange,
    setActive
} from '../../redux/pockets/actions';

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
                amount: PropTypes.number,
                currency: PropTypes.string
            }),
            pocket2: PropTypes.shape({
                active: PropTypes.bool,
                amount: PropTypes.number,
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
            amountOnChange: PropTypes.func,
            setActive: PropTypes.func,
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
            actions,
        } = this.props;

        const {currency: currency1} = pockets[POCKET_KEY_1];
        const {currency: currency2} = pockets[POCKET_KEY_2];
        const currencies = Object.keys(account);

        return (
            <div className={styles.exchangeWidget}>
                <header className={styles.header}>
                    <Pocket
                        { ...pockets[POCKET_KEY_1] }
                        currencies={currencies}
                        pocketKey={POCKET_KEY_1}
                        balance={account[currency1].balance}
                        amountOnChange={actions.amountOnChange}
                        currencyOnChange={actions.currencyOnChange}
                        setActive={actions.setActive}
                    />
                    <Pocket
                        { ...pockets[POCKET_KEY_2] }
                        currencies={currencies}
                        pocketKey={POCKET_KEY_2}
                        balance={account[currency2].balance}
                        amountOnChange={actions.amountOnChange}
                        currencyOnChange={actions.currencyOnChange}
                        setActive={actions.setActive}
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
        stopRatesRefreshing: () => dispatch(stopRatesRefreshing),
        amountOnChange: (value) => dispatch(amountOnChange(value)),
        currencyOnChange: (pocketKey, value) => dispatch(currencyOnChange(pocketKey, value)),
        setActive: (pocketKey) => dispatch(setActive(pocketKey)),
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ExchangeWidget);
