import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Table, Modal, Form, Button} from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import $ from 'jquery'

import ButtonPrimary from '../Button/ButtonPrimary';
import AddAdministratorRecord from '../Modal/AdministratorTable/AddAdministratorRecord';
import EditAdministratorRecord from '../Modal/AdministratorTable/EditAdministratorRecord';
import DeleteAdministratorRecord from '../Modal/AdministratorTable/DeleteAdministratorRecord';
import './administratortable.css';

const AdministratorTable = props => {
    const [modalShow, setModalShow] = useState(false);
    const [editModalShow, setEditModalShow] = useState(false);
    const [dataEditModal, setDataEditModal] = useState([]);
    const [deleteModal, setDeleteModalShow] = useState(false);    
    const [idDeleteModal, setIdDeleteModalShow] = useState('');    
    return (
        <>
            <Container id="administratorTableContainer">
                <Row>
                    <Col>
                        <TableDIv className="divAdministratorTable">
                            <Table>
                                <tbody>
                                    <tr>
                                        <th>ID</th>
                                        <th>Email</th>
                                        <th>Nama</th>
                                        <th>Role</th>
                                        <th>Password</th>
                                        <th>Action</th>
                                    </tr>
                                    {props.store.map((data)=>{
                                        return(
                                            <tr>
                                                <td className="borderRadiusFieldLeft">{data.id}</td>
                                                <td>{data.email}</td>
                                                <td>{data.name}</td>
                                                <td>{data.role}</td>
                                                <td>*******</td>
                                                <td className="borderRadiusField">
                                                    <Link 
                                                        className="editLinkStyle"
                                                        onClick={()=>{setEditModalShow(true); setDataEditModal(data)}}
                                                    >Edit</Link>
                                                    <Link 
                                                        className="editLinkStyle"
                                                        onClick={()=>{setDeleteModalShow(true); setIdDeleteModalShow(data.id)}}
                                                    >Delete</Link>
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
                        <ButtonPrimary
                            width="90px"
                            name="Tambah"
                            onClick={()=>{setModalShow(true)}}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <AddAdministratorRecord
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                    />
                    </Col>
                    <Col>
                        <EditAdministratorRecord
                            show={editModalShow}
                            onHide={() => setEditModalShow(false)}
                            store={dataEditModal}
                    />
                    </Col>
                    <Col>
                        <DeleteAdministratorRecord
                            show={deleteModal}
                            onHide={() => setDeleteModalShow(false)}
                            idData={idDeleteModal}                    />
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

AdministratorTable.propTypes = {
    name : PropTypes.string
}

export default AdministratorTable;