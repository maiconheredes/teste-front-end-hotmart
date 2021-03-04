import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Form, Jumbotron, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons';
import { Input, Select } from './inputs.component';


export const AddExpenseModal = ({ children }) => {
    AddExpenseModal.propTypes = {
        children: PropTypes.any,
    };

    const [modalShow, setModalShow] = useState(false);

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
                <Form.Row>
                    <Col lg={6}>
                        <Jumbotron style={{margin: 0, padding: '2rem', marginBottom: '1rem'}} className={'text-center'}>
                            <p><strong>{'Envie o comprovante'}</strong></p>
                            <p>{'Você pode inserir arquivos nos formatos PNG, JPG ou PDF, Tamanho máx: 1MB'}</p>
                            <Input label={' '} type={'file'} onChange={event => console.log(event.target.value)} />
                        </Jumbotron>
                    </Col>
                    <Col lg={3}>
                        <Select label={'Tipo *'} first={'-- Selecione o Tipo --'} options={[
                            {value: 'hotel-fee', label: 'Hotel'}, 
                            {value: 'food', label: 'Alimentação'},
                            {value: 'transport', label: 'Transporte'},
                        ]} />
                        <Input label={'Descrição da despesa *'} type="text" />
                        <Input label={'Data do comprovante *'} type={'date'} />
                    </Col>
                    <Col lg={3}>
                        <Select label={'Moeda *'} first={'-- Selecione a Moeda --'} options={[
                            {value: 'BRL', label: 'BRL'}, 
                            {value: 'USD', label: 'USD'},
                            {value: 'MXN', label: 'MXN'},
                        ]} />
                    </Col>
                </Form.Row>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => setModalShow(false)} variant={'secondary'}>{'Cancelar'}</Button>
                <Button onClick={() => { }} variant={'primary'}>{'Salvar'}</Button>
            </Modal.Footer>
        </Modal>
    </>
};
