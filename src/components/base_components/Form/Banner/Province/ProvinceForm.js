import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Icon, { FontAwesome, Feather } from 'react-web-vector-icons';
import $ from 'jquery';

import { Container, Row, Col, Button } from 'react-bootstrap';

// import ExtendJumbotronForm from './ExtendJumbotronForm';
import ButtonPrimary from '../../../Button/ButtonPrimary';
import ButtonSecondary from '../../../Button/ButtonSecondary';
import InputFilePrimary from '../../../Input/InputFilePrimary';
import './provinceform.css';

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

const ProvinceForm = (props)=> {
    const [limitLoopJumbotron, setLimitLoopJumbotron]=useState(1);
    return (
        <>
            <Container id="ProvinceFormBannerContainer">
                <Row>
                    <Col>
                        <DivTitleFormInput>Cari Provinsi</DivTitleFormInput>
                    </Col>
                </Row>
                <Row>
                    <Col className="divColbackgroundInput">
                        <SelectProvinceList>
                            <option>DKI Jakarta</option>
                            <option>Jawa Barat</option>
                            <option>Banten</option>
                        </SelectProvinceList>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <DivTitleFormInput>Foto Background</DivTitleFormInput>
                    </Col>
                </Row>
                <Row>
                    <Col className="divColbackgroundInput">
                        <InputFilePrimary 
                            idForinputPrimary={[
                                {
                                    inputid: props.inputidBackground,
                                    buttonid: props.buttonIdbackground
                                }
                            ]}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <DivTitleFormInput>Foto Card</DivTitleFormInput>
                    </Col>
                </Row>
                <Row>
                    <Col className="divColbackgroundInput">
                        <InputFilePrimary 
                            idForinputPrimary={[
                                {
                                    inputid: props.inputIdImage,
                                    buttonid: props.buttonIdImage,
                                }
                            ]}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col className="divColbackgroundInput">
                        <LineConten />
                    </Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col className="colButtonSaveCancelProvinceBanner" lg={2}>
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

const SelectProvinceList = styled.select`
    width: 254.94px;
    height: 38px;
    left: 283px;
    top: 224px;

    background: #FFFFFF;
    border: 1px solid #CCCCCC;
    box-sizing: border-box;
    border-radius: 4px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    padding-left: 14px;
    /* identical to box height, or 171% */


    /* Gray 1 */

    color: #333333;
`;

const ButtonDeleteContent= styled.a`
    width: 166px;
    height: 27px;

    cursor: pointer;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    /* identical to box height */


    /* darkblue-eduplus */

    color: #1A6EB2 !important;
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

// const ButtonUp

export default ProvinceForm;
