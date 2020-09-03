import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Table, Modal, Form, Button} from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import $ from 'jquery'

import ButtonPrimary from '../../Button/ButtonPrimary';
import './acceptofficerrequest.css'

const AcceptOfficerRequest=(props)=> {
    // const [passwordInput, setPasswordInput] = useState('');
    const onButtonClickHandle=()=>{
        console.log("this is Delete Button !!");
    }
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        id="modalAcceptOfficerRequestId"
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
            <Container className="acceptOfficerRequestContainer">
                <Row>
                    <Col>
                        <TitleModalDelete>
                            Accept This Request <strong style={{color: "#1A6EB2"}}>{props.idData}</strong> ?
                        </TitleModalDelete>
                    </Col>
                </Row>
                <Row>
                    <Col className="cancelButton">
                        <Link 
                            // className="buttonBackModalOfficerRequest"
                            onClick={props.onHide}
                        >Decline</Link>
                    </Col>
                    <Col className="deleteButton">
                        {/* <Button variant="danger">Delete</Button> */}
                        <ButtonPrimary
                            id="buttonAcceptOfficerRequest"
                            width="90px" 
                            background="#1A6EB2"
                            name="Accept"
                            onClick={()=>{onButtonClickHandle()}}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col><div style={{marginBottom:"76px"}}></div></Col>
                    <Col><div style={{marginBottom:"76px"}}></div></Col>
                </Row>
            </Container>
        </Modal.Body>
      </Modal>
    );
}

const TitleModalDelete = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 26px;

    /* identical to box height, or 108% */
    text-align: center;
    color: #373A3C;
    margin-bottom:36px;
`;

AcceptOfficerRequest.propTypes = {
    name : PropTypes.string
}


export default AcceptOfficerRequest