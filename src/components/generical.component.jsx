import React from 'react';
import PropTypes from 'prop-types';


export const ConvertDate = ({ timestamp }) => {
    ConvertDate.propTypes = {
        timestamp: PropTypes.number.isRequired,
    };

    return <>
        {new Date(timestamp).toLocaleDateString("pt-br")}
    </>
};

export const PercentageByInteger = ({ integer }) => {
    PercentageByInteger.propTypes = {
        integer: PropTypes.number.isRequired,
    };

    return <>{integer}%</>;
};
