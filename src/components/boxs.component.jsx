import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import PropType from 'prop-types';

import {
    ReimbursementBoxStyled
} from '../styles';
import requester from '../requester';


export const ReimbursementBox = ({ children }) => {
    ReimbursementBox.propTypes = {
        children: PropType.any,
    };

    const [header, setHeader] = useState({});

    const {
        header: headerService,
    } = useSelector(store => store.ServicesReducer);

    const findHeader = useCallback(async () => {
        const [error, response] = await requester(headerService);

        if (response && !error) {
            if (response.hasOwnProperty('id')) {
                setHeader(response);
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
                <Row>
                    <Col xs={6} lg={3}>Nome</Col>
                    <Col xs={6} lg={3}><strong>{header.collaborator.name}</strong></Col>
                </Row>
                <Row>
                    <Col xs={6} lg={3}>E-mail</Col>
                    <Col xs={6} lg={3}><strong>{header.collaborator.email}</strong></Col>
                </Row>
            </Col>
            <Col lg={5} style={{borderLeft: '3px solid #fafbfc'}}>

            </Col>
        </Row>
    </ReimbursementBoxStyled>;
};
