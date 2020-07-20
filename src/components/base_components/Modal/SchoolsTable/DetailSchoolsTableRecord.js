import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Table, Modal, Form, Button} from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import $ from 'jquery'

import ButtonPrimary from '../../Button/ButtonPrimary';
import './detailschoolstablerecord.css';

const DetailSchoolsTableRecord=(props)=> {
    const [passwordInput, setPasswordInput] = useState('');
    console.log(props.store);
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        id="modalSchoolTableRecordId"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Detail Sekolah
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Container>
                <Row>
                    <Col><LabelModal>Nama Sekolah</LabelModal></Col>
                </Row>
                <Row>
                    <Col>
                        <InputModal 
                            // id="inputNameAddRecordAdministratorTable"
                            type="text" 
                            name="name" 
                            placeholder="Masukan Nama Sekolah" 
                            onKeyUp={()=>{}}
                            disabled={true}
                            value={props.store[0].schoolsName}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col><LabelModal>Alamat Sekolah</LabelModal></Col>
                </Row>
                <Row>
                    <Col>
                        <InputModal 
                            // id="inputNameAddRecordAdministratorTable"
                            type="text" 
                            name="name" 
                            placeholder="Masukan Alamat Sekolah" 
                            onKeyUp={()=>{}}
                            disabled={true}
                            value={props.store[0].schollsAddress}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col><LabelModal>Propsinsi</LabelModal></Col>
                </Row>
                <Row>
                    <Col>
                        <InputModal 
                            // id="inputNameAddRecordAdministratorTable"
                            type="text" 
                            name="name" 
                            placeholder="Propsinsi" 
                            onKeyUp={()=>{}}
                            disabled={true}
                            value={props.store[0].province}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col><LabelModal>Kabupaten / Kota</LabelModal></Col>
                </Row>
                <Row>
                    <Col>
                        <InputModal 
                            // id="inputNameAddRecordAdministratorTable"
                            type="text" 
                            name="name" 
                            placeholder="Kabupaten / Kota" 
                            onKeyUp={()=>{}}
                            disabled={true}
                            value={props.store[0].regency}
                            // value={props.store.school}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col><LabelModal>Kecamatan</LabelModal></Col>
                </Row>
                <Row>
                    <Col>
                        <InputModal 
                            // id="inputNameAddRecordAdministratorTable"
                            type="text" 
                            name="name" 
                            placeholder="Cilandak" 
                            onKeyUp={()=>{}}
                            disabled={true}
                            value={props.store[0].district}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col><LabelModal>Kelurahan</LabelModal></Col>
                </Row>
                <Row>
                    <Col>
                        <InputModal 
                            // id="inputNameAddRecordAdministratorTable"
                            type="text" 
                            name="name" 
                            placeholder="Cilandak" 
                            onKeyUp={()=>{}}
                            disabled={true}
                            value={props.store[0].village}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col><LabelModal>Jenjang Pendidikan</LabelModal></Col>
                </Row>
                <Row>
                    <Col>
                        <InputModal 
                            // id="inputNameAddRecordAdministratorTable"
                            type="text" 
                            name="name" 
                            placeholder="SD" 
                            onKeyUp={()=>{}}
                            disabled={true}
                            value={props.store[0].eduStage}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col><LabelModal>Status</LabelModal></Col>
                </Row>
                <Row>
                    <Col>
                        <InputModal 
                            // id="inputNameAddRecordAdministratorTable"
                            type="text" 
                            name="name" 
                            placeholder="Swasta" 
                            onKeyUp={()=>{}}
                            disabled={true}
                            value={props.store[0].status}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col><LabelModal>Akreditasi</LabelModal></Col>
                </Row>
                <Row>
                    <Col>
                        <InputModal 
                            // id="inputNameAddRecordAdministratorTable"
                            type="text" 
                            name="name" 
                            placeholder="A" 
                            onKeyUp={()=>{}}
                            disabled={true}
                            value={props.store[0].acreditation}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col><LabelModal>NPSN</LabelModal></Col>
                </Row>
                <Row>
                    <Col>
                        <InputModal 
                            // id="inputNameAddRecordAdministratorTable"
                            type="text" 
                            name="name" 
                            placeholder="33423523" 
                            onKeyUp={()=>{}}
                            disabled={true}
                            value={props.store[0].npsn}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col><LabelModal>Operator</LabelModal></Col>
                </Row>
                <Row>
                    <Col>
                        <InputModal 
                            // id="inputNameAddRecordAdministratorTable"
                            type="text" 
                            name="name" 
                            placeholder="Rahmat Karloto" 
                            onKeyUp={()=>{}}
                            disabled={true}
                            value={props.store[0].operator}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col><LabelModal>Email</LabelModal></Col>
                </Row>
                <Row>
                    <Col>
                        <InputModal 
                            // id="inputNameAddRecordAdministratorTable"
                            type="text" 
                            name="name" 
                            placeholder="mail@gmail.com" 
                            onKeyUp={()=>{}}
                            disabled={true}
                            value={props.store[0].email}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col><LabelModal>Telepon</LabelModal></Col>
                </Row>
                <Row>
                    <Col>
                        <InputModal 
                            // id="inputNameAddRecordAdministratorTable"
                            type="text" 
                            name="name" 
                            placeholder="0818890009878" 
                            onKeyUp={()=>{}}
                            disabled={true}
                            value={props.store[0].telepon}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col><div style={{marginBottom:"40px"}}></div></Col>
                    <Col><div style={{marginBottom:"40px"}}></div></Col>
                </Row>
            </Container>
        </Modal.Body>
        <Modal.Footer>
          {/* <Link 
            className="buttonBackModalAddAdministeatorRecord"
            onClick={props.onHide}
          >Kembali</Link> */}
          <ButtonPrimary
            id="buttonAddModalAddAdministeatorRecord"
            width="90px" 
            variant="primary" 
            name="Close"
            onClick={props.onHide}
          />
        </Modal.Footer>
      </Modal>
    );
}

const InputModal = styled.input`
    width: 534px;
    height: 38px;

    background: #FFFFFF;
    border: 1px solid #CCCCCC;
    box-sizing: border-box;
    border-radius: 4px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    padding-left: 14px;
    font-style: normal;
    color: #333333;
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

DetailSchoolsTableRecord.propTypes = {
    name : PropTypes.string
}


export default DetailSchoolsTableRecord