import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Table, Modal, Form, Button} from 'react-bootstrap';
import styled from 'styled-components';
import $ from 'jquery'

import './lincomponents.css';

const LineComponets = props => {
    return (
        <>
            <Container id="lineComponentsContainer">
                <Row>
                    <Col>
                        <DivLine {...props}></DivLine>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

const DivLine = styled.div(
    props => ({
        border       : props.border ? props.border : "0.5px solid #DDDDDD",
        marginTop    : props.marginTop ? props.marginTop : "10px",
        marginBottom : props.marginBottom ? props.marginBottom : "10px",
        height       : "0px",
    })
);

LineComponets.propTypes = {
    name : PropTypes.string
}

export default LineComponets;