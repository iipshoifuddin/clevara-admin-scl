import React, { Component, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Icon, { FontAwesome, Feather } from 'react-web-vector-icons';
import $ from 'jquery';

import { Container, Row, Col, Button } from 'react-bootstrap';

import './pagination.css'
import '../Icon/Icon';


const Pagination = props => {
    const openPage = (evt) =>{
        let i, tabcontent, tablinks;
        tablinks = document.getElementsByClassName("paginationButtonNumber");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" activeClassPagination", "");
        }
        evt.currentTarget.className += " activeClassPagination";
    }
    $(document).ready(()=>{
        // console.log($('').val());
        $(".paginationButtonNumber").click((event)=>{
            openPage(event);
            console.log(event.target.value);

        });
        if($('.paginationButtonNumber').val()!== undefined){
            setTimeout(function() {
                $('.paginationButtonNumber')[0].dispatchEvent(new Event('click'))
            },100);
        }
    });
    return(
        <>
            <Container id="paginationContainer">
                <Row>
                    <Col>
                        <DivMessage>Showing  {props.dataPerPage} of {props.lastData} Data</DivMessage>
                    </Col>
                    <Col></Col>
                    <Col>
                        <DivButtonPagination className="classDivPagination">
                            <ButtonPaginationArrow 
                                id="paginationPrevButton"
                                className="paginationButtonArrow"
                                onClick={props.onClickPrev}
                            >
                                <Icon  
                                    name="chevron-left" 
                                    color="#000000"
                                    font="Feather"
                                    size={20} 
                                />
                            </ButtonPaginationArrow>
                            {props.store.slice(props.startNumber, props.endNumber).map((data)=>{
                                return(
                                <ButtonPagination 
                                    className="paginationButtonNumber"
                                    onClick={props.onClickNumber}
                                    value={data.number}
                                >{data.number}</ButtonPagination>
                                );
                            })}
                            <ButtonPaginationArrow 
                                id="paginationNextButton"
                                className="paginationButtonArrow"
                                onClick={props.onClickNext}
                            >
                                <Icon  
                                    name="chevron-right" 
                                    color="#000000"
                                    font="Feather"
                                    size={20} 
                                />
                            </ButtonPaginationArrow>
                        </DivButtonPagination>
                    </Col>
                </Row>
            </Container>
        </>
    )
};

const DivMessage = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;
    color: #000000;
    margin-top: 26px;

    justify-content: flex-start;
    display: flex;
`;
const DivButtonPagination = styled.div`
    display: inline-flex;
    position: absolute;
    right: 0px;
    margin-top: 22px;
`;

const ButtonPaginationArrow = styled.div`
    width: 36px;
    height: 36px;
    left: 1153px;
    background: #FFFFFF;
    border: 2px solid #DBDBDB;
    box-sizing: border-box;
    border-radius: 50%/50%;
    margin-left: 8px;

    align-items: center;
    display: flex;
    justify-content: center;
    cursor: pointer;
`;

const ButtonPagination = styled.option`
    width: 36px;
    height: 36px;
    left: 1153px;
    background: #FFFFFF;
    border: 2px solid #DBDBDB;
    box-sizing: border-box;
    border-radius: 50%/50%;
    margin-left: 8px;

    align-items: center;
    display: flex;
    justify-content: center;
    cursor: pointer;

    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;
    color: #172B4D;
`;

Pagination.prototype = {
    onClick      : PropTypes.func,
}

export default Pagination;