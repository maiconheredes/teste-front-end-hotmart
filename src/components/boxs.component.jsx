import React from 'react';
import PropType from 'prop-types';

import {
    ReimbursementBoxStyled
} from '../styles';


export const ReimbursementBox = ({ children }) => {
    ReimbursementBox.propTypes = {
        children: PropType.any,
    };

    return <ReimbursementBoxStyled>

    </ReimbursementBoxStyled>;
};
