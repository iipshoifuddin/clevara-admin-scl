import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Icon, { FontAwesome, Feather } from 'react-web-vector-icons';
import $ from 'jquery';

import { Container, Row, Col, Button } from 'react-bootstrap';

import './buttonloading.css'

const ButtonLoading = props => {
    return(
        <>
            <Container id="buttonLoadingContainer">
                <Row>
                    <Col>
                        <MyButton {...props} onClick={props.onClick}>{props.name}<div className="loaderForButtonLogin"></div></MyButton>
                    </Col>
                </Row>
            </Container>
        </>
    )
};

const MyButton = styled.button(
    props => ({
        width: props.width ? props.width : "219px",
        height: props.height ? props.height : "40px",
        left: props.left ? props.left : "17px",
        color : props.color ? props.color : "rgba(26, 110, 178, 0.8)",
        background: props.background ? props.background : "#FFFFFF",
        boxShadow: props.boxShadow ? props.boxShadow : "0px 4px 8px rgba(50, 115, 220, 0.25)",
        borderRadius: props.borderRadius ? props.borderRadius : "5px",
        borderWeight : props.borderWeight ? props.borderWeight : "0px",
        borderWidth: props.borderWidth ? props.borderWidth : "0px",
        fontStyle: props.fontStyle ? props.fontStyle : "normal",
        fontWeight: props.fontWeight ? props.fontWeight : "bold",
        fontSize: props.fontSize ? props.fontSize : "14px",
        lineHeight: props.lineHeight ? props.lineHeight : "17px",
    })
);

ButtonLoading.prototype = {
    onClick      : PropTypes.func,
    name         : PropTypes.string,
    width        : PropTypes.string,
    height       : PropTypes.string,
    left         : PropTypes.string,
    color        : PropTypes.string,
    background   : PropTypes.string,
    boxShadow    : PropTypes.string,
    borderRadius : PropTypes.string,
    borderWeight : PropTypes.string,
    borderWidth  : PropTypes.string,
    fontStyle    : PropTypes.string,
    fontWeight   : PropTypes.string,
    fontSize     : PropTypes.string,
    lineHeight   : PropTypes.string,
}

export default ButtonLoading;