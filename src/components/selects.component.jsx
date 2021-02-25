import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import {
    Select
} from '.';
import {
    copyObj
} from '../utils';
import AnalystsState from '../states/analysts.state';
import { updateAnalyst } from '../actions/analyst.action';


export const SelectAnalysts = ({ children }) => {
    SelectAnalysts.propTypes = {
        children: PropTypes.any,
    };

    const dispatch = useDispatch();

    const [analysts, setAnalysts] = useState([]);
    const analyst = useSelector(state => state.AnalystReducer);

    useEffect(() => {
        let newAnalysts = copyObj(AnalystsState);

        newAnalysts.unshift({
            label: '-- Informe o analista --',
            value: '',
        });

        setAnalysts(newAnalysts);
    }, []);
    
    return <Select 
        label={'Atribuir analista'} options={analysts} value={analyst}
        onChange={event => dispatch(updateAnalyst(event.target.value))}
    />
};
