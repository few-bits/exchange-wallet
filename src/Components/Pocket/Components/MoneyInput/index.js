import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

class MoneyInput extends Component {
    onInputChange(e) {
        const { onChange } = this.props;
        const { value } = e.target;
        onChange(value);
    }

    render() {
        const {
            value,
            active,
            setActive,
        } = this.props;

        return (
            <div className={styles.moneyInput}>
                <input
                    value={value}
                    onChange={this.onInputChange.bind(this)}
                    onClick={setActive}
                    type="text"
                />
            </div>
        );
    }
}

MoneyInput.propTypes = {
    value: PropTypes.number,
    active: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    setActive: PropTypes.func.isRequired,
};

MoneyInput.defaultProps = {
    value: 0,
};

export default MoneyInput;
