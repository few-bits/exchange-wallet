import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';
import lang from '../../lang';

class MoneyInput extends PureComponent {
    constructor(props) {
        super(props);

        const { value } = this.props;

        this.state = {
            stringValue: this.getStringValue(value),
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.value !== Number(this.state.stringValue)) {
            this.setState({
                stringValue: this.getStringValue(this.props.value),
            });
        }
    }

    getStringValue(value) {
        return value === 0 ? '' : value;
    }

    onInputChange(e) {
        const { onChange } = this.props;

        const value = this.trimLeadingZeroes(e.target.value);

        if (this.isValid(value)) {
            this.setState({
                stringValue: value,
            });

            onChange(value);
        }
    }

    trimLeadingZeroes(value) {
        return value.replace(/^[0]+/, '0');
    }

    isValid(value) {
        const regexp = new RegExp(`^$|^\\d{1,9}?(\\.\\d{0,2})?$`);

        return regexp.test(value);
    }

    render() {
        const {
            onClick,
            disabled,
        } = this.props;

        return (
            <div className={styles.moneyInput}>
                <input
                    value={this.state.stringValue}
                    onChange={this.onInputChange.bind(this)}
                    onClick={onClick}
                    onFocus={onClick}
                    type="text"
                    placeholder={lang.MONEY_INPUT_PLACEHOLDER}
                    disabled={disabled}
                />
            </div>
        );
    }
}

MoneyInput.propTypes = {
    value: PropTypes.number,
    onChange: PropTypes.func.isRequired,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
};

MoneyInput.defaultProps = {
    value: 0,
    disabled: false,
    onClick: () => {},
};

export default MoneyInput;
