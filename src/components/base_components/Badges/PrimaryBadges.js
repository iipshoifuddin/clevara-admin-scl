import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Table, Modal, Form, Button} from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import $ from 'jquery'
import moment from 'moment';
import Icon, { FontAwesome, Feather } from 'react-web-vector-icons';

// import SortGroupDropDownFilterWithTab from '../../Modal/DropDownFilterWithTab/SortGroupDropDownFilterWithTab';
import 'moment/locale/id';
import './primarybadges.css';
import '../Icon/Icon';

const PrimaryBadges = props => {
    const [modalShow, setModalShow] = useState(false)
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
    const badgesFunction=(evnt, tableName)=>{
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tablesForRequestClass");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinkDropDownListWithTabForSchools");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" activeClassDropDownListFilterTab", "");
        }
        document.getElementById(tableName).style.display = "block";
        evnt.currentTarget.className += " activeClassDropDownListFilterTab";        
    }
    $(document).ready(()=>{
        $('#myDropdownShowNumberFilter > option').click((event)=>{
            hidefunctionShowNumber();
            setShowNumber(event.target.value);
        });
        if($('.tablinkDropDownListWithTabForSchools').val()!== undefined){
            setTimeout(function() {
                $('#defaultBadgesDDLFWTFS').click();
            },10);
        }
    });
    return (
        <>
            <Container id="primaryBadgesContainer">
                <Row>
                    <Col>
                        {props.storeBadges.map((data)=>{
                            return(
                            props.storeBadges[0].name === data.name ?
                            <ButtonTab 
                                id="defaultBadgesDDLFWTFS" 
                                className="tablinkDropDownListWithTabForSchools" 
                                onClick={(e)=>{badgesFunction(e, data.idBadges)}}>{data.name}
                            </ButtonTab> :
                            <ButtonTab 
                                className="tablinkDropDownListWithTabForSchools" 
                                onClick={(e)=>{badgesFunction(e, data.idBadges)}}>{data.name}
                            </ButtonTab>);
                        })}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {/* <SortGroupDropDownFilterWithTab
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            sortByStatus={false}
                        /> */}

                    </Col>
                </Row>
            </Container>
        </>
    );
}

const ButtonTab = styled.button`
    background-color: #ffffff;
    color: #BDBDBD;
    float: left;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 14px 16px;
    font-size: 17px;
    min-width: 166px;
    border-radius: 4px 4px 0px 0px;
`;

const DivSumOfOperator = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    /* identical to box height */

    // display: flex;
    // align-items: center;
    // justify-content: end;

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

PrimaryBadges.propTypes = {
    name : PropTypes.string
}

export default PrimaryBadges;