import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Icon, { FontAwesome, Feather } from 'react-web-vector-icons';
import $ from 'jquery';

import { Container, Row, Col, Button } from 'react-bootstrap';

import ButtonPrimary from '../../../Button/ButtonPrimary';
import ButtonSecondary from '../../../Button/ButtonSecondary';
import ExtendPromo1Form from './ExtendPromo1Form';
import './promo1form.css';

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

const Promo1Form = (props)=> {
    const [limitLoopJumbotron, setLimitLoopJumbotron]=useState(1);
    return (
        <>
            {fiveSlideJumbotronData.slice(0,limitLoopJumbotron).map((data, index)=>{return(
                <ExtendPromo1Form 
                    inputidBackground={data.inputidBackground}
                    buttonIdbackground={data.buttonidBackground}
                    inputIdImage={data.inputidImage}
                    buttonIdImage={data.buttonidImage}
                    onClickDeleteArray={()=>{console.log("this is button Delete !!!")}}
                />
            );})}
            <Container id="promo1FormContainer">
                <Row>
                    <Col className="divColbackgroundInput">
                        <ButttonAddConten onClick={()=>{setLimitLoopJumbotron(limitLoopJumbotron+1)}}>
                            Tambah Promo +
                        </ButttonAddConten>
                    </Col>
                </Row>
                <Row>
                    <Col><NotePromo>*maksimal 9 Card</NotePromo></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col className="colButtonSaveCancelPromo1Banner" lg={2}>
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

const NotePromo = styled.div`
    width: 111px;
    height: 18px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    color: #333333;
`;

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

export default Promo1Form;
