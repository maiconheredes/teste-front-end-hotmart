import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';


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

export const Input = ({ id, label, ...rest }) => {
    Input.propTypes = {
        id: PropTypes.string,
        label: PropTypes.string,
    };

    return <Form.Group controlId={id}>
        <Form.Label>{label}</Form.Label>
        <Form.Control {...rest} placeholder={label} />
    </Form.Group>;
};
