import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Table, Modal, Form, Button} from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import $ from 'jquery'
import moment from 'moment';
import Icon, { FontAwesome, Feather } from 'react-web-vector-icons';

import './dropdownlistprofile.css';
import '../../Icon/Icon';

const DropDownListProfile = props => {
    // let date = new Date().toLocaleString(); 
    // const [filter, setFilter]=useState('URUTKAN');
    const [filterArea, setFilterArea]=useState('FILTER');
    const showfunction = () => {
        $("#myDropdownLetter").toggle();
    }
    const hidefunction = () => {
        $("#myDropdownLetter").hide();   
    }
    const showfunctionArea = () => {
        $("#myDropdownArea").toggle();
    }
    const hidefunctionArea = () => {
        $("#myDropdownArea").hide();   
    }
    return (
        <>
            <Container id="dropDownListProfileContainer">
                <Row>
                    <Col><TitleAdministrator>Administrator</TitleAdministrator></Col>
                </Row>
                <Row>
                    <Col>
                        <TitleDate>
                            {moment().format('DD MMMM YYYY')}  [{moment().format('HH:mm:ss')}]
                        </TitleDate>
                    </Col>
                    <Col></Col>
                    <Col>
                        <div className="dropdownDesktop">
                            <MyButton onClick={()=>{showfunction()}} className="dropbtn" id="dropbtn">
                            <TitleAccount>Hi, Super Admin</TitleAccount>
                                <Icon  
                                    name="swap-vert" 
                                    color="#1A6EB2"
                                    font="MaterialIcons"
                                    size={22} 
                                />
                            </MyButton>
                            <div id="myDropdownLetter" class="dropdown-content">
                                <li onClick={(e)=>{hidefunction()}}>
                                    <option value="az" onClick={props.onClick}>Abjad A-Z</option>
                                </li>
                                <li onClick={(e)=>{hidefunction()}}>
                                    <option value="za" onClick={props.onClick}>Abjad Z-A</option>
                                </li>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

const MyButton = styled.button`
`;

const TitleAdministrator = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #151522;
    text-align: left;
`;

const TitleDate = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;
    color: #151522;
    text-align: left;
`;

const TitleAccount = styled.span`
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;

    /* identical to box height */
    text-align: right;

    /* neutral half black */
    color: #151522;
`;

DropDownListProfile.propTypes = {
    name : PropTypes.string
}

export default DropDownListProfile;