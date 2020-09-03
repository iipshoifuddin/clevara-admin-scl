import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Table, Modal, Form, Button} from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import $ from 'jquery'

import ButtonPrimary from '../../Button/ButtonPrimary';
import './addschoolstablefavorite.css'


const AddScoolsTableFavorite=(props)=> {
    const [passwordInput, setPasswordInput] = useState('');
    
    const onButtonClickHandle = () =>{
        console.log("Button Activated !!");
    }
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        id="modalAddSchoolsTableFavoriteId"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
              Cari Sekolah
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Container>
                <Row>
                    <Col><LabelModal>Provinsi</LabelModal></Col>
                    <Col><LabelModal>Kota/Kabupaten</LabelModal></Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group style={{marginBottom:"0px"}}>
                            <Form.Control as="select" name="role">
                                <OptionRole>DKI Jakarta</OptionRole>
                            </Form.Control>
                        </Form.Group>

                    </Col>
                    <Col>
                        <Form.Group style={{marginBottom:"0px"}}>
                            <Form.Control as="select" name="role">
                                <OptionRole>Jakarta Selatan</OptionRole>
                            </Form.Control>
                        </Form.Group>

                    </Col>
                </Row>
                <Row>
                    <Col><LabelModal>Kecamata</LabelModal></Col>
                    <Col><LabelModal>Kelurahan</LabelModal></Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group style={{marginBottom:"0px"}}>
                            <Form.Control as="select" name="role">
                                <OptionRole>Cilandak</OptionRole>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group style={{marginBottom:"0px"}}>
                            <Form.Control as="select" name="role">
                                <OptionRole>Pondok Labuh</OptionRole>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col><LabelModal>Jenjang Pendidikan</LabelModal></Col>
                    <Col><LabelModal>Status</LabelModal></Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group style={{marginBottom:"0px"}}>
                            <Form.Control as="select" name="role">
                                <OptionRole>SD</OptionRole>
                                <OptionRole>SMP</OptionRole>
                                <OptionRole>SMA</OptionRole>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group style={{marginBottom:"0px"}}>
                            <Form.Control as="select" name="role">
                                <OptionRole>Negeri</OptionRole>
                                <OptionRole>Swasta</OptionRole>\
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col><LabelModal>Akreditasi</LabelModal></Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group style={{marginBottom:"0px"}}>
                            <Form.Control as="select" name="role">
                                <OptionRole>A</OptionRole>
                                <OptionRole>B</OptionRole>
                                <OptionRole>C</OptionRole>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                    </Col>
                </Row>
                <Row>
                    <Col><div style={{marginBottom:"40px"}}></div></Col>
                    <Col><div style={{marginBottom:"40px"}}></div></Col>
                </Row>
            </Container>
        </Modal.Body>
        <Modal.Footer>
          <Link 
            className="buttonBackModalAddAdministeatorRecord"
            onClick={props.onHide}
          >Kembali</Link>
          <ButtonPrimary
            id="buttonAddModalAddAdministeatorRecord"
            width="90px" 
            variant="primary" 
            name="Cari"
            onClick={()=>{onButtonClickHandle()}}
          />
        </Modal.Footer>
      </Modal>
    );
}

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

const OptionRole = styled.option`
    font-family: "Poppins" !important;
    font-style: normal !important;
    font-weight: normal !important;
    font-size: 14px;
    line-height: 24px;

    /* identical to box height, or 171% */

    /* Gray 1 */
    color: #333333;
    &:hover{
        background:#1A6EB2;
    }
`;

AddScoolsTableFavorite.propTypes = {
    name : PropTypes.string
}


export default AddScoolsTableFavorite