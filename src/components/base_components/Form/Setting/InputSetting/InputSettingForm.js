import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Icon, { FontAwesome, Feather } from 'react-web-vector-icons';
import $ from 'jquery';

import { Container, Row, Col, Button } from 'react-bootstrap';

import ButtonPrimary from '../../../Button/ButtonPrimary';
import ButtonSecondary from '../../../Button/ButtonSecondary';
import InputFilePrimary from '../../../Input/InputFilePrimary';
import './inputsettingform.css';
import '../../../Icon/Icon';

const fiveSlideJumbotronData=[
    {
        inputidImage: "inputFileIdForImageJumbotronFirst",
        buttonidImage: "inputButtonIdForImageJumbotronFirst",
        inputidImageSecond: "inputFileIdForImageJumbotronSecond",
        buttonidImageSecond: "inputButtonIdForImageJumbotronSecond",
        inputidImageThird: "inputFileIdForImageJumbotronThird",
        buttonidImageThird: "inputButtonIdForImageJumbotronThird",
        inputidImageForth: "inputFileIdForImageJumbotronForth",
        buttonidImageForth: "inputButtonIdForImageJumbotronForth",
        inputidImageFifth: "inputFileIdForImageJumbotronFive",
        buttonidImageFifth: "inputButtonIdForImageJumbotronFive",
        // inputidImageSixth: "inputFileIdForImageJumbotronFirst",
        // buttonidImageSixth: "inputButtonIdForImageJumbotronFirst",
    },
];

const InputSettingForm = (props)=> {
    const [enableSaveButtonSetting, setEnableSaveButtonSetting]=useState(false);
    const [limitLoopJumbotron, setLimitLoopJumbotron]=useState(1);
    const [isShowPassword, setIsShowPassword]= useState(false);
    const [isShowPasswordNew, setIsShowPasswordNew]= useState(false);
    const [isShowPasswordNewSecond, setIsShowPasswordNewSecond]= useState(false);
    const handleEyeButton = ()=>{
        setIsShowPassword(true);
        setInterval(()=>{setIsShowPassword(false)},3000);
    }
    const IsDefaultPasswordValid = () => {
        let valueInput, text="", formIsValid=true;
        let lowerCaseLetters = /[a-z]/g;
        let upperCaseLetters = /[A-Z]/g;
        let numbers = /[0-9]/g;

      
        // Get the value of the input field with id="numb"
        valueInput = document.getElementById("inputPasswordDefaultSettingOperator").value;
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
        document.getElementById("errorValueDefaultPassword").innerHTML = text;
        return formIsValid;
    }
    const IsPasswordValid = () => {
        let valueInput, text="", formIsValid=true;
        let lowerCaseLetters = /[a-z]/g;
        let upperCaseLetters = /[A-Z]/g;
        let numbers = /[0-9]/g;

      
        // Get the value of the input field with id="numb"
        valueInput = document.getElementById("inputPasswordSettingOperator").value;
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
    const IsRepeatPasswordValid = () => {
        let valueInput, valueInputPassword, text="", formIsValid=true;
        let lowerCaseLetters = /[a-z]/g;
        let upperCaseLetters = /[A-Z]/g;
        let numbers = /[0-9]/g;

      
        // Get the value of the input field with id="numb"
        valueInputPassword = document.getElementById("inputPasswordSettingOperator").value;
        valueInput = document.getElementById("inputPasswordRepeatSettingOperator").value;
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
        document.getElementById("errorValueRepeatPassword").innerHTML = text;
        return formIsValid;
    }

    const saveButtonClickHandle =async()=>{
        let formIsValid=true;
        if(!IsDefaultPasswordValid()){
            formIsValid=false;
        }
        if(!IsPasswordValid()){
            formIsValid=false;
        }
        if(!IsRepeatPasswordValid()){
            formIsValid=false;
        }
        if(formIsValid){
            setEnableSaveButtonSetting(true);
        }
        return formIsValid;
    }
    $(document).ready(async()=>{
        // saveButtonClickHandle()
        $("#buttonSaveForInputSettingId").click(async()=>{
            saveButtonClickHandle();
        });
        // document.getElementById('buttonSaveForInputSettingId').click(()=>{
        //     if(saveButtonClickHandle()){
        //         setEnableSaveButtonSetting(true);
        //     }
        // });
    });

    const onCancelButtonHandle=()=>{
        console.log(saveButtonClickHandle());
    }
    return (
        <>
            <Container id="inputSettingFormContainer">
                <Row>
                    <Col>
                        <TitleEveryDiv>Data Operator</TitleEveryDiv>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <DivInputSchools style={{background : props.nameDisabled ? "#E3E3E3":"#ffffff"}} >
                            <DivTitle>Nama</DivTitle>
                            <div className="inputClass">
                                <InputEmail 
                                    id="schoolsNameFormContactComponent"
                                    type="text" 
                                    name="schoolsname"
                                    placeholder="Masukan Nama Anda"
                                    // onChange={props.onChangeSchoolsName}
                                    // onKeyUp={()=>{IsSchoolsNameValid()}}
                                    disabled={props.nameDisabled}
                                    value={props.valueName}
                                />
                            </div>
                        </DivInputSchools>
                    </Col>
                    <Col>
                        <DivInputSchools style={{background : props.positionDisable ? "#E3E3E3":"#ffffff"}}>
                            <DivTitle>Jabatan</DivTitle>
                            <div className="inputClass">
                                <InputEmail 
                                    id="schoolsIdFormContactComponent"
                                    type="text" 
                                    name="schoolsid"
                                    placeholder="Jabatan Anda Saat ini"
                                    // onChange={props.onChangeSchoolsId}
                                    // onKeyUp={()=>{IsSchoolsIdValid()}}
                                    disabled={props.positionDisable}
                                    value={props.valuePosition}
                                />
                            </div>
                        </DivInputSchools>
                    </Col>
                    <Col>
                        <DivInputSchools style={{background : props.emailDisable ? "#E3E3E3":"#ffffff"}}>
                            <DivTitle>Email</DivTitle>
                            <div className="inputClass">
                                <InputEmail 
                                    id="schoolsIdFormContactComponent"
                                    type="text" 
                                    name="schoolsid"
                                    placeholder="Masukan Email Anda"
                                    // onChange={props.onChangeSchoolsId}
                                    // onKeyUp={()=>{IsSchoolsIdValid()}}
                                    disabled={props.emailDisable}
                                    value={props.emailValue}
                                />
                            </div>
                        </DivInputSchools>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <DivInputSchools style={{background : props.phoneDisable ? "#E3E3E3":"#ffffff"}}>
                            <DivTitle>Telepon</DivTitle>
                            <div className="inputClass">
                                <InputEmail 
                                    id="schoolsNameFormContactComponent"
                                    type="text" 
                                    name="schoolsname"
                                    placeholder="Masukan Nama Anda"
                                    // onChange={props.onChangeSchoolsName}
                                    // onKeyUp={()=>{IsSchoolsNameValid()}}
                                    disabled={props.phoneDisable}
                                    value={props.phoneValue}
                                />
                            </div>
                        </DivInputSchools>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col className="divColbackgroundInput">
                        <LineConten />
                    </Col>
                    <div style={{marginBottom: "55px"}}></div>
                </Row>
                <Row>
                    <Col className="colForChangePassword">
                        <ButtonPrimary
                            width="145px"
                            name="Ganti Password"
                            onClick={()=>{}}
                        />
                        <div style={{marginBottom: "40px"}}></div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <TitleEveryDiv>Ganti Password</TitleEveryDiv>
                    </Col>
                </Row>
                <Row>
                    <Col className="colFromPasswordDefault">
                        <DivInputSchools {...props}>
                            <DivTitle>Password Default</DivTitle>
                            <div className="inputClass">
                                <InputEmail 
                                    id="inputPasswordDefaultSettingOperator"
                                    type={isShowPassword ? "text" : "password"} 
                                    name="schoolsname"
                                    placeholder="Masukan Password Default"
                                    onChange={props.onChangeDefaultPassword}
                                    onKeyUp={()=>{IsDefaultPasswordValid()}}
                                    autoComplete="off"
                                    // autocomplete="off"
                                    // onKeyUp={()=>{IsSchoolsNameValid()}}
                                    // disabled={props.schoolsDisable}
                                    // value={props.valueSchoolsName}
                                />
                            </div>
                            <DivLinkForEye>
                                <LinkForEye
                                        className="eyeClassForDefaultPassword"
                                        onMouseDown={()=>{setIsShowPassword(true)}}
                                        onMouseUp={()=>{setIsShowPassword(false)}}
                                        onTouchStart={()=>{setIsShowPassword(true)}}
                                        onTouchEnd={()=>{setIsShowPassword(false)}}
                                    >
                                        <Icon  
                                            name="eye" 
                                            color="#151522"
                                            font="Entypo"
                                            size={24} 
                                        />
                                </LinkForEye>
                            </DivLinkForEye>
                        </DivInputSchools>
                    </Col>
                    <Col className="colFromPasswordDefault">
                        <DivInputSchools {...props}>
                            <DivTitle>Masukan Password Baru</DivTitle>
                            <div className="inputClass">
                                <InputEmail 
                                    id="inputPasswordSettingOperator"
                                    type={isShowPasswordNew ? "text" : "password"} 
                                    name="schoolsid"
                                    placeholder="Masukan Password Baru"
                                    onKeyUp={()=>{IsPasswordValid()}}
                                    // onKeyUp={()=>{IsSchoolsIdValid()}}
                                    // disabled={props.schoolsDisable}
                                    // value={props.valueSchoolsId}
                                />
                            </div>
                            <DivLinkForEye>
                                <LinkForEye
                                    className="eyeClassForDefaultPassword"
                                    onMouseDown={()=>{setIsShowPasswordNew(true)}}
                                    onMouseUp={()=>{setIsShowPasswordNew(false)}}
                                    onTouchStart={()=>{setIsShowPasswordNew(true)}}
                                    onTouchEnd={()=>{setIsShowPasswordNew(false)}}
                                >
                                    <Icon  
                                        name="eye" 
                                        color="#151522"
                                        font="Entypo"
                                        size={24} 
                                    />
                                </LinkForEye>
                            </DivLinkForEye>
                        </DivInputSchools>
                    </Col>
                    <Col className="colFromPasswordDefault">
                        <DivInputSchools {...props}>
                            <DivTitle>Ketik Ulang Password Baru</DivTitle>
                            <div className="inputClass">
                                <InputEmail 
                                    id="inputPasswordRepeatSettingOperator"
                                    type={isShowPasswordNewSecond ? "text" : "password"} 
                                    name="schoolsid"
                                    placeholder="Ketik Ulang Password Baru"
                                    onChange={props.onChangeRepeatPassword}
                                    onKeyUp={()=>{IsRepeatPasswordValid()}}
                                    // onKeyUp={()=>{IsSchoolsIdValid()}}
                                    // disabled={props.schoolsDisable}
                                    // value={props.valueSchoolsId}
                                />
                            </div>
                            <DivLinkForEye>
                                <LinkForEye
                                    className="eyeClassForDefaultPassword"
                                    onMouseDown={()=>{setIsShowPasswordNewSecond(true)}}
                                    onMouseUp={()=>{setIsShowPasswordNewSecond(false)}}
                                    onTouchStart={()=>{setIsShowPasswordNewSecond(true)}}
                                    onTouchEnd={()=>{setIsShowPasswordNewSecond(false)}}
                                >
                                    <Icon  
                                        name="eye" 
                                        color="#151522"
                                        font="Entypo"
                                        size={24} 
                                    />
                                </LinkForEye>
                            </DivLinkForEye>
                        </DivInputSchools>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ErrorLabel id="errorValueDefaultPassword"></ErrorLabel>
                    </Col>
                    <Col>
                        <ErrorLabel id="errorValuePassword"></ErrorLabel>
                    </Col>
                    <Col>
                        <ErrorLabel id="errorValueRepeatPassword"></ErrorLabel>
                    </Col>
                </Row>
                <Row>
                    <Col className="divColbackgroundInput">
                        <LineConten />
                    </Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col className="colButtonSaveCancelJumbotronBanner" lg={2}>
                        <ButtonSecondary
                            width="81px"
                            name="Cancel"
                            onClick={()=>{onCancelButtonHandle()}}
                        />
                        <ButtonPrimary
                            id="buttonSaveForInputSettingId"
                            width="67px"
                            name="Save"
                            onClick={enableSaveButtonSetting ? props.onClickButtonSaveSetting : ""}
                        />
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </>
    );
}

const TitleEveryDiv = styled.div`
    height: 17px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    color: #242424;
    margin-bottom: 24px;
`;

const DivLinkForEye = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const LinkForEye = styled.a`
    margin-top: -20px;
    margin-right: 14px;
    max-width: 25px;
    cursor:pointer;
`;

const DivInputSchools = styled.div(
    props => ({
        width: "350px",
        height: "64px",
        // background: props.schoolsDisable===true ? "#E3E3E3":"#FFFFFF",
        boxShadow: "0px 1px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "4px",
        marginBottom: "16px",
    })    
);

const DivTitle = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;


    /* black */
    color: #0A0A0A;
    margin-left: 20px;
    padding-top: 11px;
    text-align: left;
    letter-spacing: 0.001em;
`;

const InputEmail = styled.input`
    width: 276px;
    min-height: 24px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    margin-left: 20px;
    border : none;

    /* identical to box height */
    display: flex;
    align-items: center;
    letter-spacing: 0.0025em;

    color: #2D2D2D;
`;


const LineConten = styled.div`
    width: 100%;
    height: 0px;
    border-top: 1px solid #E0E0E0;
    margin-top: 32px;
`;

const DivTitleFormInput = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 6px;
    margin-top: 27px;
    /* identical to box height, or 150% */

    display: flex;
    align-items: flex-end;

    color: #373A3C;

`;

const InputTextJumbotron = styled.input`
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
    color: #333333;
    padding-left: 16px;
    padding-right: 16px;
`;

const ErrorLabel = styled.div`
    box-sizing: border-box;
    color: #950217;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 27px;
    pointer-events: auto;
    text-align: left;
    margin-top:7px;
`;


export default InputSettingForm;
