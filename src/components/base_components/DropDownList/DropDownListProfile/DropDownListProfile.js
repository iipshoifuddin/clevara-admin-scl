import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Table, Modal, Form, Button} from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import $ from 'jquery'
import moment from 'moment';
import Icon, { FontAwesome, Feather } from 'react-web-vector-icons';

import 'moment/locale/id';
import './dropdownlistprofile.css';
import '../../Icon/Icon';





const DropDownListProfile = props => {
    // let date = new Date().toLocaleString(); 
    // const [filter, setFilter]=useState('URUTKAN');
    let datetime = null, date = null;
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
    const update = () => {
        date = moment(new Date());
        datetime.html(date.locale("id").format('dddd, Do MMMM YYYY, HH:mm:ss'));
    };

    $(document).ready(function(){
        datetime = $('#datetimeDropDownListDateTime')
        update();
        setInterval(update, 1000);
    });
    return (
        <>
            <Container id="dropDownListProfileContainer">
                <Row>
                    <Col><TitleAdministrator>{props.titlePage}</TitleAdministrator>                        
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <TitleDate id="datetimeDropDownListDateTime"></TitleDate>
                    </Col>
                    <Col>
                        {/* <Icon  
                            name="search" 
                            color="#000000"
                            font="Feather"
                            size={24} 
                        /> */}
                    </Col>
                    <Col className="DropDownListProfileMenu" lg={6}>
                        <DivSearch className="searchButtonDropDownList">
                            <InputSearch 
                                type="text" 
                                placeholder="Cari Nama Operator !!" 
                                onChange={props.onChangeSearch}
                            />
                            <Icon  
                                name="search" 
                                color="#151522"
                                font="Feather"
                                size={24} 
                            />
                        </DivSearch>
                        <div className="dropdown">
                         <MyButton onClick={()=>{showfunction()}} className="dropbtn" id="dropbtn">
                            <TitleAccount>Hi, Super Admin</TitleAccount>
                                <Icon  
                                    name="chevron-down" 
                                    color="#151522"
                                    font="Feather"
                                    size={20} 
                                />
                            </MyButton>
                            <div id="myDropdownLetter" class="dropdown-content">
                                <li onClick={(e)=>{hidefunction()}}>
                                    <option value="az" onClick={props.onClick}>Nando</option>
                                </li>
                                <li onClick={(e)=>{hidefunction()}}>
                                    <option value="za" onClick={props.onClick}>My profile</option>
                                </li>
                                <li onClick={(e)=>{hidefunction()}}>
                                    <option value="za" onClick={props.onClick}>Logout</option>
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

const DivSearch = styled.div`
    margin-right : 30px;
`;

const InputSearch = styled.input`
    height: 24px;
    font-size: 18px;
    display: inline-block;
    font-weight: 500;
    border: none;
    outline: none;
    color: #151522;
    padding: 3px;
    padding-right: 30px;
    width: 0px;
    position: absolute;
    top: 0;
    right: 0;
    background: none;
    z-index: 3;
    transition: width .4s cubic-bezier(0.000, 0.795, 0.000, 1.000);
    cursor: pointer;
    margin-right : 215px;
    line-height: 18px;
`;

DropDownListProfile.propTypes = {
    name : PropTypes.string
}

export default DropDownListProfile;