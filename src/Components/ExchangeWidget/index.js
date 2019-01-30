import React, { Component } from 'react';

import styles from './ExchangeWidget.module.scss';

import Wallet from '../../Elements/Wallet';

class ExchangeWidget extends Component {
    render() {
        return (
            <div className={styles.exchangeWidget}>
                <header className={styles.header}>
                    <Wallet balance={123.5} />
                    <Wallet balance={805.13} />
                </header>
            </div>
        );
    }
}

export default ExchangeWidget;
