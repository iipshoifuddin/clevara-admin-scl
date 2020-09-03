import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Icon, { FontAwesome, Feather } from 'react-web-vector-icons';
import $ from 'jquery';

import { Container, Row, Col, Button } from 'react-bootstrap';

import ButtonPrimary from '../../../Button/ButtonPrimary';
import ButtonSecondary from '../../../Button/ButtonSecondary';
import InputFilePrimary from '../../../Input/InputFilePrimary';
import './inputfotoform.css';
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

const InputFotoForm = (props)=> {
    const [limitLoopJumbotron, setLimitLoopJumbotron]=useState(1);
    return (
        <>
            <Container id="inputFotoFormContainer">
                <Row>
                    <Col>
                        <DivTitleFormInput>Foto Sekolah 1</DivTitleFormInput>
                    </Col>
                </Row>
                <Row>
                    <Col className="divColbackgroundInput">
                        <InputFilePrimary 
                            idForinputPrimary={[
                                {
                                    inputid: fiveSlideJumbotronData[0].inputidImage,
                                    buttonid: fiveSlideJumbotronData[0].buttonidImage
                                }
                            ]}
                            onChange={props.onChangeImage1}
                            onSelectDisable={props.store[0] === undefined ? false : true}
                            placeholderFoto={props.store[0] !== undefined ? props.store[0].name : "Pilih File"}
                        />
                        {props.store[0] !== undefined ? 
                        <DivForButtonDelete>
                            <ButtonDelete 
                                value={props.store[0] !== undefined ? props.store[0].id : ""}
                                className="buttonDeleteFacilityClass"
                                onClick={props.onClickDeleteButtonFoto}
                            >
                                <Icon  
                                    name="delete" 
                                    color="#1A6EB2"
                                    font="MaterialCommunityIcons"
                                    size={24} 
                                />
                            </ButtonDelete>
                        </DivForButtonDelete> : ""}
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <DivTitleFormInput>Foto Sekolah 2</DivTitleFormInput>
                    </Col>
                </Row>
                <Row>
                    <Col className="divColbackgroundInput">
                        <InputFilePrimary 
                            idForinputPrimary={[
                                {
                                    inputid: fiveSlideJumbotronData[0].inputidImageSecond,
                                    buttonid: fiveSlideJumbotronData[0].buttonidImageSecond
                                }
                            ]}
                            onChange={props.onChangeImage2}
                            onSelectDisable={props.store[1] === undefined ? false : true}
                            placeholderFoto={props.store[1] !== undefined ? props.store[1].name : "Pilih File"}
                        />
                        {props.store[1] !== undefined ? 
                        <DivForButtonDelete>
                            <ButtonDelete 
                                value={props.store[1] !== undefined ? props.store[1].id : ""}
                                className="buttonDeleteFacilityClass"
                                onClick={props.onClickDeleteButtonFoto}
                            >
                                <Icon  
                                    name="delete" 
                                    color="#1A6EB2"
                                    font="MaterialCommunityIcons"
                                    size={24} 
                                />
                            </ButtonDelete>
                        </DivForButtonDelete> 
                        : "" }
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <DivTitleFormInput>Foto Sekolah 3</DivTitleFormInput>
                    </Col>
                </Row>
                <Row>
                    <Col className="divColbackgroundInput">
                        <InputFilePrimary 
                            idForinputPrimary={[
                                {
                                    inputid: fiveSlideJumbotronData[0].inputidImageThird,
                                    buttonid: fiveSlideJumbotronData[0].buttonidImageThird
                                }
                            ]}
                            onChange={props.onChangeImage3}
                            onSelectDisable={props.store[2] === undefined ? false : true}
                            placeholderFoto={props.store[2] !== undefined ? props.store[2].name : "Pilih File"}
                        />
                        {props.store[2] !== undefined ? 
                        <DivForButtonDelete>
                            <ButtonDelete 
                                value={props.store[2] !== undefined ? props.store[2].id : ""}
                                className="buttonDeleteFacilityClass"
                                onClick={props.onClickDeleteButtonFoto}
                            >
                                <Icon  
                                    name="delete" 
                                    color="#1A6EB2"
                                    font="MaterialCommunityIcons"
                                    size={24} 
                                />
                            </ButtonDelete>
                        </DivForButtonDelete> : "" }
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <DivTitleFormInput>Foto Sekolah 4</DivTitleFormInput>
                    </Col>
                </Row>
                <Row>
                    <Col className="divColbackgroundInput">
                        <InputFilePrimary 
                            idForinputPrimary={[
                                {
                                    inputid: fiveSlideJumbotronData[0].inputidImageForth,
                                    buttonid: fiveSlideJumbotronData[0].buttonidImageForth
                                }
                            ]}
                            onChange={props.onChangeImage4}
                            onSelectDisable={props.store[3] === undefined ? false : true}
                            placeholderFoto={props.store[3] !== undefined ? props.store[3].name : "Pilih File"}
                        />
                        {props.store[3] !== undefined ? 
                        <DivForButtonDelete>
                            <ButtonDelete 
                                value={props.store[3] !== undefined ? props.store[3].id : ""}
                                className="buttonDeleteFacilityClass"
                                onClick={props.onClickDeleteButtonFoto}
                            >
                                <Icon  
                                    name="delete" 
                                    color="#1A6EB2"
                                    font="MaterialCommunityIcons"
                                    size={24} 
                                />
                            </ButtonDelete>
                        </DivForButtonDelete> : "" } 
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <DivTitleFormInput>Foto Sekolah 5</DivTitleFormInput>
                    </Col>
                </Row>
                <Row>
                    <Col className="divColbackgroundInput">
                        <InputFilePrimary 
                            idForinputPrimary={[
                                {
                                    inputid: fiveSlideJumbotronData[0].inputidImageFifth,
                                    buttonid: fiveSlideJumbotronData[0].buttonidImageFifth
                                }
                            ]}
                            onChange={props.onChangeImage5}
                            onSelectDisable={props.store[4] === undefined ? false : true}
                            placeholderFoto={props.store[4] !== undefined ? props.store[4].name : "Pilih File"}
                        />
                        {props.store[4] !== undefined ? 
                        <DivForButtonDelete>
                            <ButtonDelete 
                                value={props.store[4] !== undefined ? props.store[4].id : ""}
                                className="buttonDeleteFacilityClass"
                                onClick={props.onClickDeleteButtonFoto}
                            >
                                <Icon  
                                    name="delete" 
                                    color="#1A6EB2"
                                    font="MaterialCommunityIcons"
                                    size={24} 
                                />
                            </ButtonDelete>
                        </DivForButtonDelete> : ""}
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
                            onClick={()=>{}}
                        />
                        <ButtonPrimary
                            width="67px"
                            name="Save"
                            onClick={props.onClickSaveButton}
                        />
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </>
    );
}

const ButtonDelete = styled.button`
    background: none;
    color: none;
    outline: none;
    border: none;
`;
const DivForButtonDelete= styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: -40px;
    margin-top: -5px;
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

export default InputFotoForm;
