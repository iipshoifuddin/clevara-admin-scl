import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Table} from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import $ from 'jquery'

import Pagination from '../../Pagination/Pagination';
import DeniedOfficerRequest from '../../Modal/RequestOfficerTable/DeniedOfficerRequest';
import AcceptOfficerRequest from '../../Modal/RequestOfficerTable/AcceptOfficerRequest'
import './requesttableschool.css';


const dataFromBackEnd =[
    {data: 1},
    {data: 2},
    {data: 3},
    {data: 4},
    {data: 5},
    {data: 6},
    {data: 7},
    {data: 8},
    {data: 9},
    {data: 10},
    {data: 11},
    {data: 12},
    {data: 13},
]

const RequestTableSchool = props => {
    const [prevButtonPagination,setPrevButtonPagination]=useState(0);
    const [nextButtonPagination,setNextButtonPagination]=useState(3);
    const [deniedModal, setDeniedModalShow] = useState(false);    
    const [idDeniedModal, setIdDeniedModalShow] = useState('');    
    const [acceptModal, setAcceptModalShow] = useState(false);    
    const [idAcceptModal, setIdAcceptModalShow] = useState('');    
    let newPaginationData=[], indexPage=1;
    for(let i =0; i<dataFromBackEnd.length; i++){
        newPaginationData[i]={
            number: indexPage
        }
        indexPage++;
    }
    const handleOnclickPrev =()=>{
        if(prevButtonPagination>0){
            setPrevButtonPagination(prevButtonPagination-1);
            setNextButtonPagination(nextButtonPagination-1);    
        }
    }
    const handleOnclickNext =()=>{
        if(nextButtonPagination<newPaginationData.length){
            setPrevButtonPagination(prevButtonPagination+1);
            setNextButtonPagination(nextButtonPagination+1);    
        }
    }
    return (
        <>
            <Container id="RequestTableSchoolsContainer">
                <Row>
                    <Col>
                        <TableDIv className="divSchoolsRequestTable">
                            <Table>
                                <tbody>
                                    <tr>
                                        <th>Sekolah</th>
                                        <th>NPSN</th>
                                        <th>Operator</th>
                                        <th>Email Sekolah</th>
                                        <th>Telepon</th>
                                        <th>Jabatan</th>
                                        <th>Status</th>
                                    </tr>
                                    {props.store.map((data)=>{
                                        return(
                                            <tr>
                                                <td className="borderRadiusFieldLeft">{data.school}</td>
                                                <td>{data.npsn}</td>
                                                <td>{data.officer}</td>
                                                <td>{data.email}</td>
                                                <td>{data.phone}</td>
                                                <td>{data.status}</td>
                                                <td className="borderRadiusField">
                                                    
                                                    <Link 
                                                        className="editLinkStyle"
                                                        onClick={()=>{setAcceptModalShow(true); setIdAcceptModalShow(data.id)}}
                                                    >...</Link>
                                                    {/* <Link 
                                                        className="editLinkStyle"
                                                        onClick={()=>{setDeniedModalShow(true); setIdDeniedModalShow(data.id)}}
                                                    >Denied</Link> */}
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </Table>
                        </TableDIv>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Pagination 
                            onClickPrev={()=>{handleOnclickPrev()}}
                            onClickNumber={(e)=>{console.log(e.target.value)}}
                            onClickNext={()=>{handleOnclickNext()}}
                            store={newPaginationData}
                            startNumber={prevButtonPagination}
                            endNumber={nextButtonPagination}
                            paginationShow={6}
                            dataPerPage={3}
                            lastData={13}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <DeniedOfficerRequest
                            show={deniedModal}
                            onHide={() => setDeniedModalShow(false)}
                            idData={idDeniedModal}                    />
                    </Col>
                    <Col>
                        <AcceptOfficerRequest
                            show={acceptModal}
                            onHide={() => setAcceptModalShow(false)}
                            idData={idAcceptModal}                    />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

const TableDIv = styled.div`
    min-height: 290px;
    background: #FEFEFE;
    border-radius: 10px;
    margin-left: auto;
    margin-right: auto;
    padding-left:66px;
    padding-right:66px;
    padding-top: 45px;
    padding-bottom: 51px;
    box-shadow: 0px 4px 8px rgba(150, 200, 235, 0.4);
`;

const InputModal = styled.input`
    width: 254.94px;
    height: 38px;

    // background: #FFFFFF;
    border: 1px solid #CCCCCC;
    box-sizing: border-box;
    border-radius: 4px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    padding-left: 14px;
`;

const LabelModal = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;

    /* identical to box height, or 150% */
    display: flex;
    align-items: flex-end;

    color: #373A3C;
    margin-top:24px;
    margin-bottom:8px;
`;

const LabelAutoGenerate = styled.span`
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 24px;

    /* or 240% */
    display: flex;
    align-items: flex-end;

    /* darkblue-eduplus */
    color: #1A6EB2;
    margin-left:10px;
`;

const ErrorLabel = styled.div`
    box-sizing: border-box;
    color: #950217;
    font-family: "Poppins";
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    pointer-events: auto;
    text-align: left;
    margin-top:7px;
`;

const OptionRole = styled.option`
    font-family: "Poppins";
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;

    /* identical to box height, or 171% */

    /* Gray 1 */
    color: #333333;
`;

const TitleModalDelete = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 26px;

    /* identical to box height, or 108% */
    text-align: center;
    color: #373A3C;
    margin-bottom:36px;
`;

RequestTableSchool.propTypes = {
    name : PropTypes.string
}

export default RequestTableSchool;