import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown, faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';


export const ConvertDate = ({ timestamp }) => {
    ConvertDate.propTypes = {
        timestamp: PropTypes.number.isRequired,
    };

    return <>
        {new Date(timestamp).toLocaleDateString('pt-br')}
    </>
};

export const PercentageByInteger = ({ integer }) => {
    PercentageByInteger.propTypes = {
        integer: PropTypes.number.isRequired,
    };

    return <>{integer}%</>;
};

export const MoneyIcon = ({
    coin = {},
}) => {
    MoneyIcon.propTypes = {
        coin: PropTypes.object,
    };

    const wrapDiv = {
        borderRight: '1px solid lightgray', position: 'relative', 
        width: '50%', display: 'inline-block',
        textAlign: 'center',
    };

    return <div style={{marginBottom: '2rem', marginTop: '1rem'}}>
        <div style={wrapDiv}>
            <span style={{lineHeight: '2rem', fontSize: '1.8rem', float: 'left', color: 'lightgray'}}>
                <FontAwesomeIcon icon={faArrowAltCircleUp} style={{verticalAlign: 'middle'}} />
            </span>
            <span style={{lineHeight: '1rem', fontSize: '1rem', color: 'lightgray'}}>{'Gastou'}</span><br/>
            <span style={{lineHeight: '1rem', fontSize: '1rem', whiteSpace: 'nowrap'}}>
                {`${coin.currency.symbol} ${coin.declared}`}
            </span>
        </div>
        <div style={{...wrapDiv, border: 0}}>
            <span style={{lineHeight: '2rem', fontSize: '1.8rem', float: 'left', color: 'lightgray', paddingLeft: '0.5rem'}}>
                <FontAwesomeIcon icon={faArrowAltCircleDown} style={{verticalAlign: 'middle'}} />
            </span>
            <span style={{lineHeight: '1rem', fontSize: '1rem', color: 'lightgray'}}>{'Recebeu'}</span><br/>
            <span style={{lineHeight: '1rem', fontSize: '1rem', whiteSpace: 'nowrap'}}>
                {`${coin.currency.symbol} ${coin.received}`}
            </span>
        </div>
    </div>
};