import React, { Component, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Icon, { FontAwesome, Feather } from 'react-web-vector-icons';
import $ from 'jquery';
import { Link } from "react-router-dom";

import logo from '../../../asset/logo/smallLogo.svg';
import '../Icon/Icon';
import './slidebarcomponents.css'


const SidebarCompnents = (props) =>{
    const [slider, setSlider]=useState('open');
    const openNav=()=> {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("contentDashboardEduplus").style.marginLeft = "250px";
        document.getElementById("buttonHumbergerSlidebarId").style.paddingRight = "22px";
        let tabPadding = document.getElementsByClassName("tablinksbadges");
        for(let i=0; i < tabPadding.length; i++){
            tabPadding[i].style.paddingLeft ="50px";
        }
        setSlider("open");
    }
    const closeNav = () => {
        document.getElementById("mySidebar").style.width = "50px";
        document.getElementById("contentDashboardEduplus").style.marginLeft= "50px";
        document.getElementById("buttonHumbergerSlidebarId").style.paddingRight = "0px";
        let tabPadding = document.getElementsByClassName("tablinksbadges");
        for(let i=0; i < tabPadding.length; i++){
            tabPadding[i].style.paddingLeft ="13px";
        }
        setSlider("close");
    }
    const buttonToggle = () =>{
        slider === "open" ? closeNav() : openNav();
    }
    const openPage = (evt, barName) =>{
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("rightSmallBar");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.background = "#96C8EB";
        }
        tablinks = document.getElementsByClassName("tablinksbadges");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" activeClassBadges", "");
        }
        document.getElementById(barName).style.background = "#ffffff";
        evt.currentTarget.className += " activeClassBadges";

    }
    $(document).ready(function(){
        document.getElementById("defaultOpenBadges").click();  
    })
    return (
        <>
            <Container id="slidebarComponentsDashboardContainer">
                <Row>
                    <Col>
                    <div id="mySidebar" className="sidebar">
                        {/* <a className="closebtn" onClick={()=>{closeNav()}}>×</a> */}
                        <div className="buttonHumbergerSlidebar" id="buttonHumbergerSlidebarId">
                            {/* <button className="openbtn" onClick={()=>{buttonToggle()}}>☰</button> */}
                            <Link className="openbtn" onClick={()=>{buttonToggle()}}>
                                <Icon  
                                name="bars" 
                                color="#ffffff" 
                                font="FontAwesome" 
                                size={28} 
                                
                            /></Link>
                        </div>
                        <div className="logoSlidebar">
                           {slider === "open" ?  <img src={logo} width="135px" height="40px" /> : ""}
                        </div>
                        <div className="listMenuSlideBar" id="listMenuSlideBarId">
                            {props.store.map((data)=>{
                                return(
                                    // <>
                                    props.store[0].name === data.name ?
                                    <Link to={data.link}
                                    id="defaultOpenBadges" 
                                    className="tablinksbadges"
                                    onClick={(e)=>{openPage(e,data.singleBarId)}} >
                                        <Icon  
                                            name={data.icon} 
                                            color="#ffffff" 
                                            font={data.fontIcon} 
                                            size={24} 
                                            
                                        /><span>{data.name}</span>
                                        <div id={data.singleBarId} className="rightSmallBar"></div>
                                    </Link> :
                                    <Link to={data.link}
                                    className="tablinksbadges"
                                    onClick={(e)=>{openPage(e,data.singleBarId)}}>
                                        <Icon  
                                            name={data.icon} 
                                            color="#ffffff" 
                                            font={data.fontIcon} 
                                            size={24} 
                                        />
                                        <span>{data.name}</span>
                                        <div id={data.singleBarId} className="rightSmallBar"></div>
                                    </Link>
                                    // </>
                                );
                            })}
                            
                        </div>
                    </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default SidebarCompnents;