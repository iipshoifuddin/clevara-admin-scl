import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Icon, { FontAwesome, Feather } from 'react-web-vector-icons';
import $ from 'jquery';

import { Container, Row, Col, Button } from 'react-bootstrap';

import InputFilePrimary from '../../../Input/InputFilePrimary';
import './jumbotronform.css'

const ExtendJumbotronForm = (props)=> {
    
    return (
        <>
            <Container id="jumbotronFormBannerContainer">
                <Row>
                    <Col>
                        <DivTitleFormInput>Background Jumbotron 1</DivTitleFormInput>
                    </Col>
                    <Col className="buttonDeleteForJumbotronContent">
                        <ButtonDeleteContent onClick={props.onClickDeleteArray}>Hapus Jumbotron</ButtonDeleteContent>
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
                        <DivTitleFormInput>Image Jumbotron 1</DivTitleFormInput>
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
                    <Col>
                        <DivTitleFormInput>Heading Jumbotron 1</DivTitleFormInput>
                    </Col>
                </Row>
                <Row>
                    <Col className="divColbackgroundInput">
                        <InputTextJumbotron 
                            type="text"
                            placeholder="Lorem Ipsum dolor sit amet"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <DivTitleFormInput>Text Jumbotron 1</DivTitleFormInput>
                    </Col>
                </Row>
                <Row>
                    <Col className="divColbackgroundInput">
                        <InputTextJumbotron
                            type="text"
                            placeholder="Lorem Ipsum dolor sit amet"                            
                        />
                    </Col>
                </Row>
                <Row>
                    <Col className="divColbackgroundInput">
                        <LineConten />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

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

// const ButtonUpoa

export default ExtendJumbotronForm;
