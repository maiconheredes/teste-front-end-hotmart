import React, { useCallback, useEffect, useReducer } from 'react';
import { useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import PropType from 'prop-types';

import {
    ReimbursementBoxStyled
} from '../styles';
import requester from '../requester';
import {
    PercentageByInteger,
    ConvertDate,
    SelectAnalysts
} from '.';
import ObjectsReducer from '../reducers/objects.reducer';
import {
    UPDATE_OBJECT
} from '../types/actions.type';


export const ReimbursementBox = ({ children }) => {
    ReimbursementBox.propTypes = {
        children: PropType.any,
    };

    const [header, controlHeader] = useReducer(ObjectsReducer, {});

    const {
        header: headerService,
    } = useSelector(store => store.ServicesReducer);

    const findHeader = useCallback(async () => {
        const [error, response] = await requester(headerService);

        if (response && !error) {
            if (response.hasOwnProperty('id')) {
                controlHeader({
                    type: UPDATE_OBJECT,
                    payload: response,
                });
                return;
            }
        }

        alert('Houve um erro na requisição do cabeçalho.');
    }, [headerService]);

    useEffect(() => {
        findHeader();
    }, [findHeader]);

    return <ReimbursementBoxStyled>
        <Row>
            <Col lg={7}>
                {header.type === 'REFUND' && <h3>Reembolso #{header.id} - {header.justification}</h3>}
                {header.collaborator?.name && <Row className={'mb-05r'}>
                    <Col xs={6} lg={3} className={'text-right'}>Nome</Col>
                    <Col xs={6} lg={3}><strong>{header.collaborator?.name}</strong></Col>
                </Row>}
                {header.collaborator?.email && <Row className={'mb-05r'}>
                    <Col xs={6} lg={3} className={'text-right'}>E-mail</Col>
                    <Col xs={6} lg={3}><strong>{header.collaborator?.email}</strong></Col>
                </Row>}
                {header.justification && <Row className={'mb-05r'}>
                    <Col xs={6} lg={3} className={'text-right'}>Justificativa</Col>
                    <Col xs={6} lg={3}><strong>{header.justification}</strong></Col>
                </Row>}
                {header.purpose && <Row className={'mb-05r'}>
                    <Col xs={6} lg={3} className={'text-right'}>Finalidade</Col>
                    <Col xs={6} lg={3}>
                        <strong>{header.purpose === 'FRATERNIZATION' && 'Confraternização'}</strong>
                    </Col>
                </Row>}
                {header.project?.title && <Row className={'mb-05r'}>
                    <Col xs={6} lg={3} className={'text-right'}>Projeto</Col>
                    <Col xs={6} lg={3}><strong>{header.project?.title}</strong></Col>
                </Row>}
                {header.accountabilityExtraInfo?.eventDate && <Row className={'mb-05r'}>
                    <Col xs={6} lg={3} className={'text-right'}>Data</Col>
                    <Col xs={6} lg={3}>
                        <strong><ConvertDate timestamp={header.accountabilityExtraInfo?.eventDate} /></strong>
                    </Col>
                </Row>}
                {header.accountabilityExtraInfo?.amountOfPeople > 0 && <>
                    <Row className={'mb-05r'}>
                        <Col xs={6} lg={3} className={'text-right'}>Quantidade</Col>
                        <Col xs={6} lg={3}>
                            {header.accountabilityExtraInfo?.amountOfPeople === 1 && <>
                                <strong>{header.accountabilityExtraInfo?.amountOfPeople} pessoa</strong>
                            </>}
                            {header.accountabilityExtraInfo?.amountOfPeople > 1 && <>
                                <strong>{header.accountabilityExtraInfo?.amountOfPeople} pessoas</strong>
                            </>}
                        </Col>
                    </Row>
                </>}
                {header.accountabilityExtraInfo?.budgetForBreakfast !== null && <Row className={'mb-05r'}>
                    <Col xs={6} lg={3} className={'text-right'}>Inclui café da manhã</Col>
                    <Col xs={6} lg={3}>
                        {header.accountabilityExtraInfo?.budgetForBreakfast === true && <>
                            <strong>Sim</strong>
                        </>}
                        {header.accountabilityExtraInfo?.budgetForBreakfast === false && <>
                            <strong>Não</strong>
                        </>}
                    </Col>
                </Row>}
            </Col>
            <Col lg={5} style={{ borderLeft: '3px solid #fafbfc' }}>
                <SelectAnalysts />
                {header.costCenters?.length > 0 && <>
                    <p><strong>Centro de custo</strong></p>
                    {header.costCenters.map(costCenter => <p key={costCenter.id}>
                        <PercentageByInteger integer={costCenter.percentage} /> - {costCenter.name}
                    </p>)}
                </>}
            </Col>
        </Row>
    </ReimbursementBoxStyled>;
};
