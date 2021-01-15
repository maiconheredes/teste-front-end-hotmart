import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';


export const Select = ({ id, label, options = [], ...rest }) => {
    Select.propTypes = {
        id: PropTypes.string,
        label: PropTypes.string,
        options: PropTypes.array,
    };

    return <Form.Group controlId={id}>
        <Form.Label>{label}</Form.Label>
        <Form.Control {...rest} as={'select'}>
            {options.map(option => <option key={option.value} value={option.value}>
                {option.label}
            </option>)}
        </Form.Control>
    </Form.Group>;
};
