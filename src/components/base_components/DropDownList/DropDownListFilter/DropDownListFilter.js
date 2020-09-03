import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Table, Modal, Form, Button} from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import $ from 'jquery'
import moment from 'moment';
import Icon, { FontAwesome, Feather } from 'react-web-vector-icons';

import 'moment/locale/id';
import './dropdownlistfilter.css';
import '../../Icon/Icon';

const DropDownListFilter = props => {
    const [sortBy, setSortBy]=useState('Urutkan');
    const [showNumber, setShowNumber] = useState('5');
    const showfunction = () => {
        $("#myDropdownShortFilter").toggle();
    }
    const hidefunction = () => {
        $("#myDropdownShortFilter").hide();   
    }
    const showfunctionShowNumber = () => {
        $("#myDropdownShowNumberFilter").toggle();
    }
    const hidefunctionShowNumber = () => {
        $("#myDropdownShowNumberFilter").hide();   
    }
    $(document).ready(()=>{
        $('#myDropdownShortFilter > option').click((event)=>{
            hidefunction();
            event.target.value === "az" ? setSortBy('Abjad A-Z') : setSortBy('Abjad Z-A')
        });
        $('#myDropdownShowNumberFilter > option').click((event)=>{
            hidefunctionShowNumber();
            setShowNumber(event.target.value);
        });
    });
    return (
        <>
            <Container id="dropDownListFilterContainer">
                <Row>
                    <Col><TitleAdministrator>Show Data</TitleAdministrator>                        
                    </Col>
                </Row>
                <Row>
                    <Col lg={3}><DivSumOfOperator>Total Operator : {props.officerTotal}</DivSumOfOperator></Col>
                    <Col lg={7}></Col>
                    <Col className="DropDownListProfileMenu" lg={2}>
                        <div className="dropdown">
                            <MyButton onClick={()=>{showfunction()}}>
                                <TitleAccount>{sortBy}
                                    <span style={{paddingRight: "10px"}}></span>
                                    <Icon  
                                        name="filter" 
                                        color="#151522"
                                        font="AntDesign"
                                        size={20} 
                                    />
                                </TitleAccount>
                            </MyButton>
                            <div id="myDropdownShortFilter" class="dropdown-content">
                                <option value="az" onClick={props.onClick}>Abjad A-Z</option>
                                <option value="za" onClick={props.onClick}>Abjad Z-A</option>
                            </div>
                        </div>
                        <div className="dropdown">
                            <MySecondButton onClick={()=>{showfunctionShowNumber()}}>
                                <TitleAccount>{showNumber}
                                    <span style={{paddingRight: "35px"}}></span>
                                    <Icon  
                                        name="select-arrows" 
                                        color="#151522"
                                        font="Entypo"
                                        size={20} 
                                    />
                                </TitleAccount>
                            </MySecondButton>
                            <div id="myDropdownShowNumberFilter" class="dropdown-content">
                                <option value="5" onClick={props.onClick}>5</option>
                                <option value="10" onClick={props.onClick}>10</option>
                                <option value="15" onClick={props.onClick}>15</option>
                                <option value="25" onClick={props.onClick}>25</option>
                                <option value="50" onClick={props.onClick}>50</option>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

const DivSumOfOperator = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    /* identical to box height */

    display: flex;
    align-items: center;

    /* neutral half black */

    color: #151522;
`;

const MyButton = styled.button`
    width: 140px;
    height: 40px;
    background: #FFFFFF;
    /* grey lighter */

    border: 1px solid #DBDBDB;
    border-radius: 4px;
    margin-right:16px;

    justify-content: center;
    align-items: center;
    display: flex;
`;

const MySecondButton = styled.button`
    width: 100px;
    height: 40px;
    background: #FFFFFF;
    /* grey lighter */

    border: 1px solid #DBDBDB;
    border-radius: 4px;

    justify-content: center;
    align-items: center;
    display: flex;
`;

const TitleAdministrator = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    margin-right:11px;
    margin-bottom:8px;

    /* identical to box height, or 150% */
    display: flex;
    justify-content: flex-end;

    color: #373A3C;
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
    font-size: 16px;
    line-height: 24px;

    /* identical to box height, or 150% */
    display: flex;
    align-items: center;
    text-align: center;

    /* Gray 1 */
    color: #333333;
`;

const TitleAccountNumber = styled.span`
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;

    /* identical to box height, or 150% */
    display: flex;
    align-items: center;
    text-align: center;

    /* Gray 1 */
    color: #333333;
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

DropDownListFilter.propTypes = {
    name : PropTypes.string
}

export default DropDownListFilter;