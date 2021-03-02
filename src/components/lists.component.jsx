import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Badge, Col, Row } from 'react-bootstrap';
import { faAsterisk, faConciergeBell, faUsers } from '@fortawesome/free-solid-svg-icons';
import {
    FontAwesomeIcon
} from '@fortawesome/react-fontawesome';

import requester from '../requester';
import { 
    TimelineBoxStyled, 
    TimelineIconStyled, 
    TimelineSubtitleStyled,
    TimelineNotesStyled
} from '../styles';
import {
    CARD_TYPE_ACCOUNTABILITY_CREATED,
    CARD_TYPE_ACCOUNTABILITY_SUBMITTED,
    CARD_TYPE_EVALUATION,
    CARD_TYPE_EXPENSE,
    EXPENSE_CODE_HOTEL,
    EXPENSE_CODE_FOOD,
    STATUS_PEDING
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
                <Col lg={2} className={'text-center'}>
                    {line.cardType === CARD_TYPE_EXPENSE && <TimelineIconStyled>
                        <FontAwesomeIcon icon={faConciergeBell} />
                    </TimelineIconStyled>}
                    {(
                        line.cardType === CARD_TYPE_ACCOUNTABILITY_SUBMITTED || 
                        line.cardType === CARD_TYPE_ACCOUNTABILITY_CREATED
                    ) && <TimelineIconStyled>
                        <FontAwesomeIcon icon={faAsterisk} />
                    </TimelineIconStyled>}
                    {line.cardType === CARD_TYPE_EVALUATION && <TimelineIconStyled>
                        <FontAwesomeIcon icon={faUsers} />
                    </TimelineIconStyled>}<br/>
                    <TimelineNotesStyled children={(new Date(line.cardDate)).toLocaleDateString()} />
                </Col>
                <Col lg={line.cardType === CARD_TYPE_EXPENSE ? 2 : 4}>
                    <TimelineSubtitleStyled children={'TIPO'} />
                    {line.cardType === CARD_TYPE_EVALUATION && <h5>
                        {`Aprovação da Solicitação ${line.author.name}`}
                    </h5>}
                    {(
                        line.cardType === CARD_TYPE_ACCOUNTABILITY_SUBMITTED || 
                        line.cardType === CARD_TYPE_ACCOUNTABILITY_CREATED
                    ) && <h5>
                        {`Solicitação concluída por ${line.author.name}`}
                    </h5>}
                    {line.cardType === CARD_TYPE_EXPENSE && <h5>
                        {line.expenseTypeCode === EXPENSE_CODE_HOTEL && <>{'HOTEL'}</>}
                        {line.expenseTypeCode === EXPENSE_CODE_FOOD && <>{'ALIMENTAÇÃO'}</>}
                    </h5>}
                    <TimelineNotesStyled>{line.notes}</TimelineNotesStyled>
                </Col>
                {line.cardType === CARD_TYPE_EXPENSE && <Col lg={2}>
                    <TimelineSubtitleStyled children={'VALOR'} />
                    <h5>{line.currencySymbol} {line.amountTotal}</h5>
                    <TimelineNotesStyled>{`Valor da nota: ${line.currencySymbol} ${line.amountSpent}`}</TimelineNotesStyled>
                </Col>}
                {(
                    line.cardType === CARD_TYPE_EVALUATION || 
                    line.cardType === CARD_TYPE_EXPENSE
                ) && <Col lg={2}>
                    <TimelineSubtitleStyled children={'STATUS'} />
                    {line.status === STATUS_PEDING && <Badge pill variant={'warning'} children={'PENDENTE'} />}
                    <br/><br/>
                    {line.amountTotal !== null && line.amountTotal !== undefined && <TimelineNotesStyled>
                        {`Valor aprovado: ${line.currencySymbol} ${line.amountTotal}`}
                    </TimelineNotesStyled>}
                </Col>}
            </Row>
        </TimelineBoxStyled>)}
    </>
};

