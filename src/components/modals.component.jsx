import React, { useEffect, useReducer, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Form, Jumbotron, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons';
import { Input, InputMoney, Select } from './inputs.component';

import ObjectsReducer from '../reducers/objects.reducer';
import ExpenseState from '../states/expense.state';
import { copyObj, nullOrEmpty } from '../utils';
import { UPDATE_OBJECT, UPDATE_OBJECT_PROPERTY } from '../types/actions.type';
import requester from '../requester';
import { useSelector } from 'react-redux';


export const AddExpenseModal = ({ children }) => {
    AddExpenseModal.propTypes = {
        children: PropTypes.any,
    };

    const [modalShow, setModalShow] = useState(false);
    const [expense, controllerExpense] = useReducer(ObjectsReducer, copyObj(ExpenseState));

    const {
        expense: expenseService,
    } = useSelector(state => state.ServicesReducer);

    const setField = (field, value) => {
        controllerExpense({
            type: UPDATE_OBJECT_PROPERTY,
            payload: {
                field, value,
            },
        });
    };

    const setFieldFile = (event) => {
        let file = event.target.files[0];

        if (!file) return;

        if (file.size > (1024 * 1024)) {
            alert('O arquivo é maior que 1MB.');
            setField('resourceUrl', null);
            event.target.value = null;
            return;
        }

        setField('resourceUrl', file);
    };

    const submitForm = async (event) => {
        if (event) event.preventDefault();

        if (nullOrEmpty(expense.amountSpent) || nullOrEmpty(expense.amountTotal)) {
            alert('Informe os valores monetários.');
            return;
        }

        let formData = new FormData();
        for (let key in expense) {
            formData.append(key, expense[key]);
        }

        const [error, response] = await requester(expenseService.add, {
            body: formData,
        });

        if (response && !error) {
            if (response.hasOwnProperty('id')) {
                setModalShow(false);
                controllerExpense({
                    type: UPDATE_OBJECT,
                    payload: copyObj(ExpenseState),
                });
                alert('Despesa adicionada com sucesso!');
                return;
            }
        }

        alert('Houve um erro ao adicionar despesa.');
    };

    useEffect(() => {
        console.log('expense', expense);
    }, [expense]);

    return <>
        <div style={{marginBottom: '1rem', textAlign: 'right'}}>
            <Button onClick={() => setModalShow(true)} variant={'secondary'}>
                <FontAwesomeIcon icon={faFileInvoiceDollar} /> {'Adicionar Despesa'}
            </Button>
        </div>

        <Modal
            aria-labelledby={'add-expense-modal'}
            onHide={() => setModalShow(false)}
            animation={false}
            show={modalShow}
            size={'xl'}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title children={'Adicionar Despesa'} />
            </Modal.Header>
            <Modal.Body>
                <Form id={'add_expense_form'} onSubmit={event => submitForm(event)}>
                    <Form.Row>
                        <Col lg={6}>
                            <Jumbotron style={{margin: 0, padding: '2rem', marginBottom: '1rem'}} className={'text-center'}>
                                <p><strong>{'Envie o comprovante'}</strong></p>
                                <p>{'Você pode inserir arquivos nos formatos PNG, JPG ou PDF, Tamanho máx: 1MB'}</p>
                                <Input
                                    label={' '} type={'file'} 
                                    onChange={event => setFieldFile(event)}
                                    accept={'application/pdf,image/png,image/jpeg'}
                                    required
                                />
                            </Jumbotron>
                        </Col>
                        <Col lg={3}>
                            <Select label={'Tipo *'} first={'-- Selecione o Tipo --'} required options={[
                                {value: 'hotel-fee', label: 'Hotel'}, 
                                {value: 'food', label: 'Alimentação'},
                                {value: 'transport', label: 'Transporte'},
                            ]} onChange={event => setField('expenseTypeCode', event.target.value)} />
                            <Input
                                label={'Descrição da despesa *'} type={'text'}
                                onChange={event => setField('notes', event.target.value)}
                                required
                            />
                            <Input
                                label={'Data do comprovante *'} type={'date'}
                                onChange={event => setField('cardDate', (new Date(event.target.value)).getTime())}
                                required
                            />
                        </Col>
                        <Col lg={3}>
                            <Select label={'Moeda *'} first={'-- Selecione a Moeda --'} required options={[
                                {value: 'BRL', label: 'BRL'}, 
                                {value: 'USD', label: 'USD'},
                                {value: 'MXN', label: 'MXN'},
                            ]} onChange={event => setField('currencyCode', event.target.value)} />
                            {expense.currencyCode !== null && expense.currencyCode !== '' && <>
                                <InputMoney
                                    label={'Valor total da nota/cupom'}
                                    onChange={(event, masked, value) => setField('amountTotal', value)}
                                    value={expense.amountTotal}
                                    required
                                />
                                <InputMoney
                                    label={'Valor a ser considerado'}
                                    onChange={(event, masked, value) => setField('amountSpent', value)}
                                    value={expense.amountSpent}
                                    required
                                />
                            </>}
                        </Col>
                    </Form.Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => setModalShow(false)} variant={'secondary'}>{'Cancelar'}</Button>
                <Button form={'add_expense_form'} type={'submit'} variant={'primary'}>{'Salvar'}</Button>
            </Modal.Footer>
        </Modal>
    </>
};
