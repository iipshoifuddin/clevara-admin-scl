import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Icon, { FontAwesome, Feather } from 'react-web-vector-icons';
import $ from 'jquery';

import { Container, Row, Col, Button } from 'react-bootstrap';

import './inputfileprimary.css'

const InputFilePrimary =(props)=> {
    $(document).ready(()=>{
        $(`#${props.idForinputPrimary[0].buttonid}`).change((evnt)=>{
            document.getElementById(`${props.idForinputPrimary[0].inputid}`).value = evnt.target.value.replace(/C:\\fakepath\\/i, '');
        });
    });
    return (
        <>
            {/* <Container id="jumbotronFormBannerContainer">
                <Row>
                    <Col> */}
                    <div style={{display: "inline-flex"}}>
                        <InputFile id={props.idForinputPrimary[0].inputid} placeholder="Pilih File..." disabled 
                        />
                        <DivButton className="fileUploadPrimary">
                            Select File
                            <input 
                                id={props.idForinputPrimary[0].buttonid} 
                                type="file" 
                                class="upload" 
                                onChange={props.onChange}
                            />
                        </DivButton>
                    </div>
                    {/* </Col>
                </Row>
            </Container> */}
        </>
    );
}

const DivButton = styled.div`
    width: 106px;
    height: 38px;

    /* darkblue-eduplus */

    background: #1A6EB2;
    border: 1px solid #CCCCCC;
    box-sizing: border-box;
    border-radius: 0px 4px 4px 0px;

    display: flex;
    align-items: center;
    text-align: center;

    /* white */

    color: #FFFFFF;

    /* Inside Auto Layout */

    flex: none;
    order: 0;
    align-self: center;
    margin: 10px 0px;
    margin-top: 0px;
    padding-left: 16px;
    padding-right: 16px;
    margin-left: -2px;
`;


const InputFile = styled.input`
    width: 258px;
    height: 38px;

    background: #FFFFFF;
    border: 1px solid #CCCCCC;
    box-sizing: border-box;
    border-radius: 4px;
    padding-left:14px;

    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    /* identical to box height, or 171% */


    /* Gray 1 */

    color: #333333;
`;

export default InputFilePrimary;
