import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './styles.module.scss';
import {
    CURRENCY_EUR,
    CURRENCY_USD,
    CURRENCY_GBP,
    POCKET_KEY_1,
    POCKET_KEY_2,
} from '../../Constants';
import Pocket from '../../Components/Pocket';
import Rate from '../../Components/Rate';
import Button from '../../Components/Button';

import { startRatesRefreshing, stopRatesRefreshing } from '../../redux/rates/actions';
import {
    amountOnChange,
    currencyOnChange,
    setActive
} from '../../redux/pockets/actions';
import lang from '../../lang';

const getCurrentPocketData = (pocket1, pocket2) => {
    const {currency: currency1, rate: rate1, amount: amount1 } = pocket1;
    const {currency: currency2, rate: rate2, amount: amount2, active: active2 } = pocket2;

    let currencyFrom = currency1;
    let currencyTo = currency2;
    let rate = rate2;
    let amount = amount1;
    if (active2) {
        currencyFrom = currency2;
        currencyTo = currency1;
        rate = rate1;
        amount = amount2;
    }

    return {
        currencyFrom,
        currencyTo,
        rate,
        amount,
    };
};

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
            rates,
        } = this.props;

        const currencies = Object.keys(account);
        const pocket1 = pockets[POCKET_KEY_1];
        const pocket2 = pockets[POCKET_KEY_2];
        const currency1 = pockets[POCKET_KEY_1].currency;
        const currency2 = pockets[POCKET_KEY_2].currency;

        const {
            currencyFrom,
            currencyTo,
            rate,
            amount,
        } = getCurrentPocketData(pocket1, pocket2);

        return (
            <div className={styles.exchangeWidget}>
                <header className={styles.header}>
                    <Pocket
                        { ...pockets[POCKET_KEY_1] }
                        currencies={currencies}
                        pocketKey={POCKET_KEY_1}
                        balance={account[currency1].balance}
                        amountOnChange={actions.amountOnChange}
                        currencyOnChange={(pocketKey, value) => actions.currencyOnChange(pocketKey, value, rates)}
                        setActive={actions.setActive}
                        disabled={!rate}
                    />
                    <Rate
                        currencyFrom={currencyFrom}
                        currencyTo={currencyTo}
                        rate={rate}
                    />
                    <Pocket
                        { ...pockets[POCKET_KEY_2] }
                        currencies={currencies}
                        pocketKey={POCKET_KEY_2}
                        balance={account[currency2].balance}
                        amountOnChange={actions.amountOnChange}
                        currencyOnChange={(pocketKey, value) => actions.currencyOnChange(pocketKey, value, rates)}
                        setActive={actions.setActive}
                        disabled={!rate}
                    />
                    <Button
                        text={lang.EXCHANGE}
                        disabled={!rate || amount > account[currencyFrom].balance}
                        onClick={() => {}}
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
        currencyOnChange: (pocketKey, value, rates) => dispatch(currencyOnChange(pocketKey, value, rates)),
        setActive: (pocketKey) => dispatch(setActive(pocketKey)),
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ExchangeWidget);
