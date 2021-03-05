import React from 'react';
import PropTypes from 'prop-types';
import { Form, InputGroup } from 'react-bootstrap';
import CurrencyInput from 'react-currency-input';


export const Select = ({ id, label, options = [], first = null, ...rest }) => {
    Select.propTypes = {
        id: PropTypes.string,
        label: PropTypes.string,
        first: PropTypes.string,
        options: PropTypes.array,
    };

    return <Form.Group controlId={id}>
        <Form.Label>{label}</Form.Label>
        <Form.Control {...rest} as={'select'}>
            {first && <option value={''}>{first}</option>}
            {options.map(option => <option key={option.value} value={option.value}>
                {option.label}
            </option>)}
        </Form.Control>
    </Form.Group>;
};

export const Input = ({ id, label, value, ...rest }) => {
    Input.propTypes = {
        id: PropTypes.string,
        label: PropTypes.string,
        value: PropTypes.any,
    };

    return <Form.Group controlId={id}>
        <Form.Label>{label}</Form.Label>
        <Form.Control {...rest} placeholder={label} value={value === null ? '' : value} />
    </Form.Group>;
};

export const InputMoney = ({
    label, onChange, onChangeValue, 
    value, ...rest
}) => {
    InputMoney.propTypes = {
        label: PropTypes.string,
        onChange: PropTypes.func,
        onChangeValue: PropTypes.func,
        value: PropTypes.any,
    };

    return <Form.Group>
        {label && <label>{label}</label>}
        <InputGroup>
            <InputGroup.Prepend>
                <InputGroup.Text>{'$'}</InputGroup.Text>
            </InputGroup.Prepend>
            <CurrencyInput
                {...rest}
                onChange={onChangeValue}
                onChangeEvent={onChange}
                className={'form-control'}
                decimalSeparator={','}
                thousandSeparator={'.'}
                value={value ? value : 0}
            />
        </InputGroup>
    </Form.Group>
};
