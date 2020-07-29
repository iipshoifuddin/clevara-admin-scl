import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import $ from 'jquery';

import logo from '../../../asset/logo/eduplus.png';
import ButtonPrimary from '../Button/ButtonPrimary';
import ButtonLoading from '../Button/ButtonLoading';
import './logindashboard.css'

const LoginForm = props => {
    const [isButtonActive, setIsButtonActive] = useState(false);
    const IsEmailValid = () => {
        let valueInput, text="", formIsValid=true;
      
        // Get the value of the input field with id="numb"
        valueInput = document.getElementById("emailLoginComponents").value;
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
  
        document.getElementById("errorValueEmail").innerHTML = text;
        return formIsValid;
    }
    const IsPasswordValid = () => {
        let valueInput, text="", formIsValid=true;
        let lowerCaseLetters = /[a-z]/g;
        let upperCaseLetters = /[A-Z]/g;
        let numbers = /[0-9]/g;

      
        // Get the value of the input field with id="numb"
        valueInput = document.getElementById("passwordlLoginComponents").value;
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
        document.getElementById("errorValuePassword").innerHTML = text;
        return formIsValid;
    }
    const buttonClickHandle = () => {
        let formIsValid=true;
        if(!IsEmailValid()){
            formIsValid=false;
        }
        if(!IsPasswordValid()){
            formIsValid=false;
        }
        return formIsValid;
    }
    $(document).ready(()=> {
        $("#buttonmesaageFormcontact").click(()=>{
            if(buttonClickHandle()){
                setIsButtonActive(true);
            }

        });
    });
    return (
        <>
            <Container id="loginDashbordContainer">
                <Row>
                    <Col>
                        <DivFormLogin>
                            <DivLogo>
                                <img src={logo} height="50px" />
                            </DivLogo>
                            <DivInputEmail>
                                <Label>Email</Label>
                                <InputText 
                                    id="emailLoginComponents" 
                                    type="email" 
                                    // onBlur={()=>{IsEmailValid()}} 
                                    onChange={props.onChangeEmail}
                                    onKeyUp={()=>{IsEmailValid()}} 

                                />
                            </DivInputEmail>
                            <DivError>
                                <LabelError id="errorValueEmail"></LabelError>
                            </DivError>
                            <DivInputPassword>
                                <Label>Password</Label>
                                <InputText 
                                    id="passwordlLoginComponents" 
                                    type="password" 
                                    // onBlur={(()=>{IsPasswordValid()})} 
                                    onChange={props.onChangePassword}
                                    onKeyUp={()=>{IsPasswordValid()}}
                                />
                            </DivInputPassword>
                            <DivError>
                                <LabelError id="errorValuePassword"></LabelError>
                            </DivError>
                            <DivForgotPassword>
                                <ForgotLink href="">Lupa Password?</ForgotLink>
                            </DivForgotPassword>
                            <DivButton>
                                {props.onLoadingLogin ? 
                                    <ButtonLoading 
                                        id="buttonmesaageFormcontact"
                                        name="MASUK"
                                    />
                                :   
                                    <ButtonPrimary
                                        id="buttonmesaageFormcontact"
                                        name="MASUK"
                                        onClick={isButtonActive ? props.onClickButton : null}
                                    />
                                }
                            </DivButton>
                        </DivFormLogin>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

const DivFormLogin = styled.div`
    width: 780px;
    min-height: 650px;
    border: 1px;
    background: #FFFFFF;

    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
`;

const DivLogo = styled.div`
    width:100%;
    margin-top:101px;
`;

const DivInputEmail = styled.div`
    width:100%;
    margin-top:43px;
    padding-left:100px;
    padding-right:100px;
`;

const DivInputPassword = styled.div`
    width:100%;
    margin-top:30px;
    padding-left:100px;
    padding-right:100px;
`;

const DivForgotPassword = styled.div`
    width:100%;
    margin-top:30px;
    padding-left:100px;
    padding-right:100px;
    text-align: right;
`;

const DivButton = styled.div`
    width:100%;
    margin-top:58px;
    margin-bottom:115px;
    padding-left:100px;
    padding-right:100px;
    text-align: right;
`;

const DivError = styled.div`
    width:100%;
    margin-top:10px;
    padding-left:100px;
    padding-right:100px;
    text-align: left;
`;

const Label = styled.div`
    width:100%;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;
    color: #000000;
    text-align: left;
`;

const LabelError = styled.span`
    width:100%;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 27px;
    color: #C21E56;
    text-align: left;
`;

const InputText = styled.input`
    width: 100%;
    height: 50px;
    background: rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    font-size:16px;
    padding-left:16px;
    padding-right:16px;
    border: 0px;
`;

const ForgotLink = styled.a`
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    text-decoration-line: underline;
    color: #1A6EB2;
    text-decoration-line: underline !important;
    color: #1A6EB2 !important;
    cursor: pointer;
`;

LoginForm.propTypes = {
    name : PropTypes.string
}

export default LoginForm;