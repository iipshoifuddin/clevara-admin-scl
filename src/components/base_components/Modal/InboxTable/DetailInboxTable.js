import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Table, Modal, Form, Button} from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import $ from 'jquery'

import ButtonPrimary from '../../Button/ButtonPrimary';
import './detailinboxtable.css';


const DetailInboxTable=(props)=> {
    const [passwordInput, setPasswordInput] = useState('');
    
    const onButtonClickHandle = () =>{
        console.log("Button Activated !!");
    }
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        id="modalDetailInboxTitleId" >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
              Detail Pesan
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Container>
                <Row>
                    <Col><LabelModal>Date</LabelModal></Col>
                </Row>
                <Row>
                    <Col>
                        <InputModal 
                            id="inputEmailAddRecordAdministratorTable"
                            type="text" 
                            nmae="data" 
                            placeholder="Masukan Email Anda" 
                            onKeyUp={()=>{}}
                            disabled
                        />
                    </Col>
                    <Col>
                    </Col>
                </Row>
                <Row>
                    <Col><LabelModal>Nama</LabelModal></Col>
                </Row>
                <Row>
                    <Col>
                        <InputModal 
                            id="inputEmailAddRecordAdministratorTable"
                            type="text" 
                            nmae="email" 
                            placeholder="Masukan Email Anda" 
                            onKeyUp={()=>{}}
                            disabled
                        />
                    </Col>
                    <Col>
                    </Col>
                </Row>
                <Row>
                    <Col><LabelModal>Email</LabelModal></Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col>
                        <InputModal 
                            id="inputEmailAddRecordAdministratorTable"
                            type="email" 
                            nmae="email" 
                            placeholder="Masukan Email Anda" 
                            onKeyUp={()=>{}}
                            disabled
                        />
                    </Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col><LabelModal>Pesan</LabelModal></Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col>
                        <InputModalTextArea 
                            id="inputEmailAddRecordAdministratorTable"
                            type="email" 
                            nmae="email" 
                            placeholder="Masukan Email Anda" 
                            onKeyUp={()=>{}}
                            disabled
                        />
                    </Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col><div style={{marginBottom:"40px"}}></div></Col>
                    <Col><div style={{marginBottom:"40px"}}></div></Col>
                </Row>
            </Container>
        </Modal.Body>
        <Modal.Footer>
          <Link 
            className="buttonBackDetailInboxTableRecord"
            onClick={()=>{onButtonClickHandle()}}
          >Delete</Link>
          <ButtonPrimary
            id="buttonDetailInboxTableRecord"
            width="90px" 
            variant="primary" 
            name="Close"
            onClick={props.onHide}

          />
        </Modal.Footer>
      </Modal>
    );
}

const InputModal = styled.input`
    width: 254.94px;
    height: 38px;

    background: #FFFFFF;
    border: 1px solid #CCCCCC;
    box-sizing: border-box;
    border-radius: 4px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    padding-left: 14px;
`;

const InputModalTextArea = styled.textarea`
    width: 254.94px;
    height: 133px;

    background: #FFFFFF;
    border: 1px solid #CCCCCC;
    box-sizing: border-box;
    border-radius: 4px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    padding-left: 14px;
`;

const LabelModal = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;

    /* identical to box height, or 150% */
    display: flex;
    align-items: flex-end;

    color: #373A3C;
    margin-top:24px;
    margin-bottom:8px;
`;

const OptionRole = styled.option`
    font-family: "Poppins" !important;
    font-style: normal !important;
    font-weight: normal !important;
    font-size: 14px;
    line-height: 24px;

    /* identical to box height, or 171% */

    /* Gray 1 */
    color: #333333;
    &:hover{
        background:#1A6EB2;
    }
`;

DetailInboxTable.propTypes = {
    name : PropTypes.string
}

export default DetailInboxTable