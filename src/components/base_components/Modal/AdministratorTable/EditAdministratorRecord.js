import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Table, Modal, Form, Button} from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import $ from 'jquery'

import ButtonPrimary from '../../Button/ButtonPrimary';
import './editadministratortable.css'

const EditAdministratorRecord=(props)=> {
    const [passwordInput, setPasswordInput] = useState('');
    const IsNameValid = (evnt) => {
        let valueInput, text="", formIsValid=true;
      
        // Get the value of the input field with id="numb"
        valueInput = document.getElementById("inputNameEditRecordAdministratorTable").value;
        if (!valueInput) {
            text = "Name cannot be empty !";
            formIsValid=false;
        }
        
        document.getElementById("errorValueNameEditRecord").innerHTML = text;
        return formIsValid;
    }
    const IsEmailValid = () => {
        let valueInput, text="", formIsValid=true;
      
        // Get the value of the input field with id="numb"
        valueInput = document.getElementById("inputEmailEditRecordAdministratorTable").value;
        if (!valueInput) {
            text = "e-Mail cannot be empty !";
            formIsValid=false;
        }
        else if(typeof valueInput !== "undefined"){
            let lastAtPos = valueInput.lastIndexOf('@');
            let lastDotPos = valueInput.lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && valueInput.indexOf('@@') == -1 && lastDotPos > 2 && (valueInput.length - lastDotPos) > 2)) {
                text = "Invalid Format (ex. jhon@gmail.com)";
                formIsValid=false;
            }
        }
  
        document.getElementById("errorValueEmailEditRecord").innerHTML = text;
        return formIsValid;
    }
    const IsPasswordValid = () => {
        let valueInput, text="", formIsValid=true;
        let lowerCaseLetters = /[a-z]/g;
        let upperCaseLetters = /[A-Z]/g;
        let numbers = /[0-9]/g;

      
        // Get the value of the input field with id="numb"
        valueInput = document.getElementById("inputPasswordEditRecordAdministratorTable").value;
        if (!valueInput) {
            text = "Password cannot be empty !";
            formIsValid=false;
        }
        else{

            if(!valueInput.match(lowerCaseLetters)){
                text = "Password must contain at least a lowercase letter !";
                formIsValid=false;
            }
            if(!valueInput.match(upperCaseLetters)){
                text = "Password must contain at least a uppercase letter !";
                formIsValid=false;
            }
            if(!valueInput.match(numbers)){
                text = "Password must contain at least a number !";
                formIsValid=false;
            }
            if(valueInput.length<8){
                text = "Password must contain 8 characters !";
                formIsValid=false;
            }
    
        }
        document.getElementById("errorValuePasswordEditRecord").innerHTML = text;
        return formIsValid;
    }
    const IsPasswordRepeatValid = () => {
        let valueInput, valueInputPassword, text="", formIsValid=true;
      
        // Get the value of the input field with id="numb"
        valueInputPassword = document.getElementById("inputPasswordEditRecordAdministratorTable").value;
        valueInput = document.getElementById("inputPasswordRepeatEditRecordAdministratorTable").value;
        if (!valueInput) {
            text = "Password cannot be empty !";
            formIsValid=false;
        }
        else
        {
            if(valueInputPassword !== valueInput){
                text = "Password Not Match !!";
                formIsValid=false;
            }
        }
        
        document.getElementById("errorValueRepeatPasswordEditRecord").innerHTML = text;
        return formIsValid;
    }
    const buttonClickHandle = () => {
        let formIsValid=true;
        if(!IsNameValid()){
            formIsValid=false;
        }
        if(!IsEmailValid()){
            formIsValid=false;
        }
        if(!IsPasswordValid()){
            formIsValid=false;
        }
        if(!IsPasswordRepeatValid()){
            formIsValid=false;
        }
        return formIsValid;
    }
    const onButtonClickHandle = () =>{
        if(buttonClickHandle()){
            console.log("Button Edit Activated !!");
        }
    }
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        id="modalEditAdministratorRecordId"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Admin
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Container>
                <Row>
                    <Col><LabelModal>ID <LabelAutoGenerate>*Auto Generate</LabelAutoGenerate></LabelModal></Col>
                    <Col><LabelModal>Nama</LabelModal></Col>
                </Row>
                <Row>
                    <Col>
                        <InputModal 
                            type="text" 
                            disabled 
                            value={props.store.id} 
                        />
                    </Col>
                    <Col>
                        <InputModal 
                            id="inputNameEditRecordAdministratorTable"
                            type="text" 
                            name="name" 
                            placeholder="Masukan Nama Anda" 
                            onKeyUp={()=>{IsNameValid()}}
                            value={props.store.name} 
                        />
                    </Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col>
                        <ErrorLabel id="errorValueNameEditRecord" ></ErrorLabel>
                    </Col>
                </Row>
                <Row>
                    <Col><LabelModal>Email</LabelModal></Col>
                    <Col><LabelModal>Role</LabelModal></Col>
                </Row>
                <Row>
                    <Col>
                        <InputModal 
                            id="inputEmailEditRecordAdministratorTable"
                            type="email" 
                            nmae="email" 
                            placeholder="Masukan Email Anda" 
                            onKeyUp={()=>{IsEmailValid()}}
                            value={props.store.email} 
                        />
                    </Col>
                    <Col>
                        <Form.Group style={{marginBottom:"0px"}}>
                            <Form.Control as="select" name="role">
                                <OptionRole>Super Admin</OptionRole>
                                <OptionRole>Admin</OptionRole>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col><ErrorLabel id="errorValueEmailEditRecord"></ErrorLabel></Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col><LabelModal>Password Untuk Operator</LabelModal></Col>
                    <Col><LabelModal>Tulis Ulang Password</LabelModal></Col>
                </Row>
                <Row>
                    <Col>
                        <InputModal
                            id="inputPasswordEditRecordAdministratorTable"
                            type="password" 
                            name="password" 
                            onKeyUp={(e)=>{IsPasswordValid(); setPasswordInput(e.target.value)}}
                        />
                    </Col>
                    <Col>
                        <InputModal
                            id="inputPasswordRepeatEditRecordAdministratorTable"
                            type="password" 
                            name="password" 
                            onKeyUp={(e)=>{IsPasswordRepeatValid()}}
                            disabled={passwordInput === '' ? true : false}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ErrorLabel id="errorValuePasswordEditRecord"></ErrorLabel>
                    </Col>
                    <Col>
                        <ErrorLabel id="errorValueRepeatPasswordEditRecord"></ErrorLabel>
                    </Col>
                </Row>
                <Row>
                    <Col><div style={{marginBottom:"40px"}}></div></Col>
                    <Col><div style={{marginBottom:"40px"}}></div></Col>
                </Row>
            </Container>
        </Modal.Body>
        <Modal.Footer>
          <Link 
            className="buttonBackModalEditAdministeatorRecord"
            onClick={props.onHide}
          >Kembali</Link>
          <ButtonPrimary
            id="buttonAddModalEditAdministeatorRecord"
            width="90px" 
            variant="primary" 
            name="Simpan"
            onClick={()=>{onButtonClickHandle()}}
          />
        </Modal.Footer>
      </Modal>
    );
}

const InputModal = styled.input`
    width: 254.94px;
    height: 38px;

    // background: #FFFFFF;
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

const LabelAutoGenerate = styled.span`
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 24px;

    /* or 240% */
    display: flex;
    align-items: flex-end;

    /* darkblue-eduplus */
    color: #1A6EB2;
    margin-left:10px;
`;

const ErrorLabel = styled.div`
    box-sizing: border-box;
    color: #950217;
    font-family: "Poppins";
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    pointer-events: auto;
    text-align: left;
    margin-top:7px;
`;

const OptionRole = styled.option`
    font-family: "Poppins";
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;

    /* identical to box height, or 171% */

    /* Gray 1 */
    color: #333333;
`;

EditAdministratorRecord.propTypes = {
    name : PropTypes.string
}


export default EditAdministratorRecord