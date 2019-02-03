import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './styles.module.scss';

import MoneyInput from '../../Components/MoneyInput';
import CurrencySelector from '../../Components/CurrencySelector';
import Button from '../../Components/Button';

import { updateBalance } from '../../redux/account/actions';
import lang from '../../lang';

class Wallet extends Component {
    constructor(props) {
        super(props);

        const { currency, balance } = this.props;

        this.state = { currency, balance };
    }
    static propTypes = {
        currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
        currency: PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired,
        balanceOnUpdate: PropTypes.func.isRequired,
    };

    currencyOnChange(currency) {
        this.setState({ currency });
    }

    balanceOnChange(balance) {
        this.setState({ balance: Number(balance) });
    }

    render() {
        const { currency, balance } = this.state;
        const { currencies, balanceOnUpdate } = this.props;

        return (
            <div className={styles.wallet}>
                <CurrencySelector
                    currency={currency}
                    currencies={currencies}
                    onSelect={this.currencyOnChange.bind(this)}
                />
                <MoneyInput value={balance} onChange={this.balanceOnChange.bind(this)} />
                <Button
                    onClick={() => balanceOnUpdate(currency, balance)}
                    text={lang.UPDATE_BALANCE}
                />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const { account } = state;
    const { currencyCode } = ownProps.match.params;
    const currencies = Object.keys(account);
    let currency = currencies[0];

    if (currencyCode) {
        currency = currencies.find(c => c.toUpperCase() === currencyCode.toUpperCase()) || currency;
    }
    const { balance } = account[currency];

    return {
        currencies,
        currency,
        balance,
    };
};

const mapDispatchToProps = (dispatch) => ({
    balanceOnUpdate: (currency, balance) => dispatch(updateBalance(currency, balance)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
