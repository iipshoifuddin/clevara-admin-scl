import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Icon, { FontAwesome, Feather } from 'react-web-vector-icons';
import $ from 'jquery';

import { Container, Row, Col, Button } from 'react-bootstrap';

import ButtonPrimary from '../../../Button/ButtonPrimary';
import ButtonSecondary from '../../../Button/ButtonSecondary';
import ExtendJumbotronForm from './ExtendJumbotronForm';
import InputFilePrimary from '../../../Input/InputFilePrimary';
import './jumbotronform.css';

const fiveSlideJumbotronData=[
    {
        inputidBackground: "inputFileIdForBanckgroundJumbotronFirst",
        buttonidBackground: "inputButtonIdForBanckgroundJumbotronFirst",
        inputidImage: "inputFileIdForImageJumbotronFirst",
        buttonidImage: "inputButtonIdForImageJumbotronFirst",

    },
    {
        inputidBackground: "inputFileIdForBanckgroundJumbotronSecond",
        buttonidBackground: "inputButtonIdForBanckgroundJumbotronSecond",
        inputidImage: "inputFileIdForImageJumbotronSecond",
        buttonidImage: "inputButtonIdForImageJumbotronSecond",

    },
    {
        inputidBackground: "inputFileIdForBanckgroundJumbotronThird",
        buttonidBackground: "inputButtonIdForBanckgroundJumbotronThird",
        inputidImage: "inputFileIdForImageJumbotronThird",
        buttonidImage: "inputButtonIdForImageJumbotronThird",

    },
    {
        inputidBackground: "inputFileIdForBanckgroundJumbotronFourth",
        buttonidBackground: "inputButtonIdForBanckgroundJumbonFourth",
        inputidImage: "inputFileIdForImageJumbotronFourth",
        buttonidImage: "inputButtonIdForImageJumbotronFourth",

    },
    {
        inputidBackground: "inputFileIdForBanckgroundJumbotronFifth",
        buttonidBackground: "inputButtonIdForBanckgroundJumbotronFifth",
        inputidImage: "inputFileIdForImageJumbotronFifth",
        buttonidImage: "inputButtonIdForImageJumbotronFifth",

    }
];

const JumbotronForm = (props)=> {
    const [limitLoopJumbotron, setLimitLoopJumbotron]=useState(1);
    return (
        <>
            {fiveSlideJumbotronData.slice(0,limitLoopJumbotron).map((data, index)=>{return(
                <ExtendJumbotronForm 
                    inputidBackground={data.inputidBackground}
                    buttonIdbackground={data.buttonidBackground}
                    inputIdImage={data.inputidImage}
                    buttonIdImage={data.buttonidImage}
                    onClickDeleteArray={()=>{console.log("this is button Delete !!!")}}
                />
            );})}
            <Container id="jumbotronFormBannerContainer">
                <Row>
                    <Col className="divColbackgroundInput">
                        <ButttonAddConten onClick={()=>{setLimitLoopJumbotron(limitLoopJumbotron+1)}}>
                            Tambah Jumbotron +
                        </ButttonAddConten>
                    </Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col className="colButtonSaveCancelJumbotronBanner" lg={2}>
                        <ButtonSecondary
                            width="81px"
                            name="Cancel"
                            onClick={()=>{}}
                        />
                        <ButtonPrimary
                            width="67px"
                            name="Save"
                            onClick={()=>{}}
                        />
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </>
    );
}

const ButttonAddConten = styled.a`
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    margin-top: 17px;
    cursor: pointer;
    /* identical to box height */

    color: #1A6EB2 !important;
`;

// const ButtonUp

export default JumbotronForm;
