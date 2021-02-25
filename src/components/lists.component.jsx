import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import { faAsterisk, faConciergeBell, faUsers } from '@fortawesome/free-solid-svg-icons';
import {
    FontAwesomeIcon
} from '@fortawesome/react-fontawesome';

import requester from '../requester';
import { TimelineBoxStyled, TimelineIconStyled } from '../styles';
import {
    CARD_TYPE_ACCOUNTABILITY_CREATED,
    CARD_TYPE_ACCOUNTABILITY_SUBMITTED,
    CARD_TYPE_EVALUATION,
    CARD_TYPE_EXPENSE
} from '../types/generical.type';


export const TimelineList = ({ children }) => {
    TimelineList.propTypes = {
        children: PropTypes.any,
    };

    const [timeline, setTimeline] = useState([]);

    const {
        timeline: timelineService,
    } = useSelector(state => state.ServicesReducer);

    const findTimeline = useCallback(async () => {
        const [error, response] = await requester(timelineService);

        if (response && !error) {
            if (response.hasOwnProperty('content')) {
                setTimeline(response.content);
                return;
            }
        }

        alert('Houve um erro no carregamento da Timeline.');
    }, [timelineService]);

    useEffect(() => {
        findTimeline();
    }, [findTimeline]);

    return <>
        {timeline.length === 0 && <h3 className={'text-center'}>{'-- Nenhum item na Timeline --'}</h3>}
        {timeline.map(line => <TimelineBoxStyled key={line.id}>
            <Row>
                <Col className={'text-center'}>
                    {line.cardType === CARD_TYPE_EXPENSE && <TimelineIconStyled>
                        <FontAwesomeIcon icon={faConciergeBell} />
                    </TimelineIconStyled>}
                    {line.cardType === CARD_TYPE_ACCOUNTABILITY_SUBMITTED && <TimelineIconStyled>
                        <FontAwesomeIcon icon={faAsterisk} />
                    </TimelineIconStyled>}
                    {line.cardType === CARD_TYPE_ACCOUNTABILITY_CREATED && <TimelineIconStyled>
                        <FontAwesomeIcon icon={faAsterisk} />
                    </TimelineIconStyled>}
                    {line.cardType === CARD_TYPE_EVALUATION && <TimelineIconStyled>
                        <FontAwesomeIcon icon={faUsers} />
                    </TimelineIconStyled>}<br/>
                    13/06/1996
                </Col>
            </Row>
        </TimelineBoxStyled>)}
    </>
};

