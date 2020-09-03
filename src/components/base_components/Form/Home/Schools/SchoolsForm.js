import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Icon, { FontAwesome, Feather } from 'react-web-vector-icons';
import $ from 'jquery';

import { Container, Row, Col, Button } from 'react-bootstrap';

import ButtonPrimary from '../../../Button/ButtonPrimary';
import ButtonSecondary from '../../../Button/ButtonSecondary';
import InputFilePrimary from '../../../Input/InputFilePrimary'; 
import RadioButtonTwoDesktop from '../../../RadioButton/RadioButtonTwoDesktop';
import DropDownListFilterFourDesktop from '../../../DropDownList/DropDownListFilter/DropDownListFilterFourDesktop';
import './schoolsform.css';
import '../../../Icon/Icon';

const fiveSlideJumbotronData=[
    {
        inputidImage: "inputFileIdForImageJumbotronFirst",
        buttonidImage: "inputButtonIdForImageJumbotronFirst",
        inputidImageSecond: "inputFileIdForImageJumbotronSecond",
        buttonidImageSecond: "inputButtonIdForImageJumbotronSecond",
        inputidImageThird: "inputFileIdForImageJumbotronThird",
        buttonidImageThird: "inputButtonIdForImageJumbotronThird",
        inputidImageForth: "inputFileIdForImageJumbotronForth",
        buttonidImageForth: "inputButtonIdForImageJumbotronForth",
        inputidImageFifth: "inputFileIdForImageJumbotronFive",
        buttonidImageFifth: "inputButtonIdForImageJumbotronFive",
        // inputidImageSixth: "inputFileIdForImageJumbotronFirst",
        // buttonidImageSixth: "inputButtonIdForImageJumbotronFirst",
    },
];

const SchoolsForm = (props)=> {
    const [maxEskul, setMaxEskul]=useState(props.stroreEskulValueLength);
    const [maxFacility, setMaxFacility]=useState(props.stroreFacilityValueLength);
    const [maxMajor, setMaxMajor]=useState(props.stroreMajorValueLength);

    
    const [limitLoopJumbotron, setLimitLoopJumbotron]=useState(1);
    const [isShowPassword, setIsShowPassword]= useState(false);
    const [isShowPasswordNew, setIsShowPasswordNew]= useState(false);
    const [isShowPasswordNewSecond, setIsShowPasswordNewSecond]= useState(false);
    const handleEyeButton = ()=>{
        setIsShowPassword(true);
        setInterval(()=>{setIsShowPassword(false)},3000);
    }
    return (
        <>
            <Container id="schoolsFormContainer">
                <Row>
                    <Col>
                        <TitleEveryDiv>Data Sekolah</TitleEveryDiv>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <DivInputSchools {...props}>
                            <DivTitle>Nama Sekolah</DivTitle>
                            <div className="inputClass">
                                <InputEmail 
                                    id="schoolsNameFormContactComponent"
                                    type="text" 
                                    name="schoolsname"
                                    placeholder="Masukan Nama Sekolah Anda"
                                    onChange={props.onChangeSchoolsName}
                                    // onKeyUp={()=>{IsSchoolsNameValid()}}
                                    disabled={props.schoolsDisable}
                                    value={props.valueSchoolsName}
                                />
                            </div>
                        </DivInputSchools>
                    </Col>
                    <Col>
                        <DropDownListFilterFourDesktop 
                            title="Jenjang Pendidikan"
                            store={[
                                {
                                    id:"sd",
                                    name:"SD dan MI"
                                },
                                {
                                    id:"smp",
                                    name:"SMP dan MTS"
                                },
                                {
                                    id:"sma",
                                    name:"SMA, SMK dan Aliyah"
                                }
                                
                            ]}
                            buttonClass="educationStageButtonClass"
                            className="educationStageClassName"
                            placeholder="Pilih Jenjang Pendidikan"
                            onClick={props.onClickEduStage}
                        />
                    </Col>
                    <Col>
                        <DivInputSchools {...props}>
                            <DivTitle>Kurikulum</DivTitle>
                            <div className="inputClass">
                                <InputEmail 
                                    id="schoolsIdFormContactComponent"
                                    type="text" 
                                    name="schoolsid"
                                    placeholder="Masukan Kurikulum"
                                    onChange={props.onChangeCurriculumSchools}
                                    // onKeyUp={()=>{IsSchoolsIdValid()}}
                                    disabled={props.schoolsDisable}
                                    value={props.curriculumSchoolsValue}
                                />
                            </div>
                        </DivInputSchools>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <DivInputSchools {...props}>
                            <DivTitle>NPSN</DivTitle>
                            <div className="inputClass">
                                <InputEmail 
                                    id="schoolsNameFormContactComponent"
                                    type="text" 
                                    name="schoolsname"
                                    placeholder="Masukan NPSN"
                                    onChange={props.onChangeNpsn}
                                    // onKeyUp={()=>{IsSchoolsNameValid()}}
                                    disabled={props.schoolsDisable}
                                    value={props.npsnValue}
                                />
                            </div>
                        </DivInputSchools>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col>
                        <div style={{marginTop: "28px"}}></div>
                        <TitleEveryDiv>Status Sekolah</TitleEveryDiv>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <RadioButtonTwoDesktop 
                            onClick={props.onClickRadioButton}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col className="divColbackgroundInput">
                        <LineConten />
                    </Col>
                    <div style={{marginBottom: "55px"}}></div>
                </Row>
                <Row>
                    <Col>
                        <DivInputSchools {...props}>
                            <DivTitle>Alamat</DivTitle>
                            <div className="inputClass">
                                <InputEmail 
                                    id="schoolsIdFormContactComponent"
                                    type="text" 
                                    name="schoolsid"
                                    placeholder="Masukan Alamat"
                                    onChange={props.onChangeSchoolsAddress}
                                    // onKeyUp={()=>{IsSchoolsIdValid()}}
                                    disabled={props.schoolsDisable}
                                    value={props.schoolsAddressValue}
                                />
                            </div>
                        </DivInputSchools>
                    </Col>
                    <Col>
                        <DropDownListFilterFourDesktop 
                            title="Provinsi"
                            store={props.storeProvince}
                            buttonClass="provinceAddressButtonClass"
                            className="provinceAddressClassName"
                            placeholder="Pilih Provinsi"
                            onClick={props.onClickProvince}
                            disabledButton={props.disabledButtonProvince}
                        />
                    </Col>
                    <Col>
                        <DropDownListFilterFourDesktop 
                            title="Kota/Kabupaten"
                            store={props.storeRegency}
                            buttonClass="regencyAddressButtonClass"
                            className="regencyAddressClassName"
                            placeholder="Pilih Kota/Kabupaten"
                            onClick={props.onClickRegency}
                            disabledButton={props.disabledButtonRegency}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <DropDownListFilterFourDesktop 
                            title="Kecamatan"
                            store={props.storeDistrict}
                            buttonClass="districtAddressButtonClass"
                            className="districtAddressClassName"
                            placeholder="Pilih Kecamatan"
                            onClick={props.onClickDistrict}
                            disabledButton={props.disabledButtonDistrict}
                        />
                    </Col>
                    <Col>
                        <DropDownListFilterFourDesktop 
                            title="Kelurahan"
                            store={props.storeVillage}
                            buttonClass="villageAddressButtonClass"
                            className="villageAddressClassName"
                            placeholder="Pilih Desa/kelurahan"
                            onClick={props.onClickVillage}
                            disabledButton={props.disabledButtonVillage}
                        />
                    </Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col className="divColbackgroundInput">
                        <LineConten />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div style={{marginTop: "28px"}}></div>
                        <TitleEveryDiv>Kontak Sekolah</TitleEveryDiv>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <DivInputSchools {...props}>
                            <DivTitle>No. Telepon</DivTitle>
                            <div className="inputClass">
                                <InputEmail 
                                    id="schoolsNameFormContactComponent"
                                    type="text" 
                                    name="schoolsname"
                                    placeholder="Masukan Nomor Telepon"
                                    onChange={props.onChangePhoneNumber}
                                    // onKeyUp={()=>{IsSchoolsNameValid()}}
                                    // disabled={props.schoolsDisable}
                                    value={props.phoneNumberValue}
                                />
                            </div>
                        </DivInputSchools>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col>
                        <DivInputSchools {...props}>
                            <DivTitle>Email</DivTitle>
                            <div className="inputClass">
                                <InputEmail 
                                    id="schoolsNameFormContactComponent"
                                    type="text" 
                                    name="schoolsname"
                                    placeholder="Masukan Email"
                                    onChange={props.onChangeEmail}
                                    // onKeyUp={()=>{IsSchoolsNameValid()}}
                                    // disabled={props.schoolsDisable}
                                    value={props.emailFormValue}
                                />
                            </div>
                        </DivInputSchools>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col>
                        <DivInputSchools {...props}>
                            <DivTitle>Website</DivTitle>
                            <div className="inputClass">
                                <InputEmail 
                                    id="schoolsNameFormContactComponent"
                                    type="text" 
                                    name="schoolsname"
                                    placeholder="Masukan Alamat Website"
                                    onChange={props.onChangeWebsite}
                                    // onKeyUp={()=>{IsSchoolsNameValid()}}
                                    disabled={props.schoolsDisable}
                                    value={props.valueInputWebiste}
                                />
                            </div>
                        </DivInputSchools>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col className="divColbackgroundInput">
                        <LineConten />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div style={{marginTop: "28px"}}></div>
                        <TitleEveryDiv>Informasi Sekolah</TitleEveryDiv>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <DivInputSchools {...props}>
                            <DivTitle>Kepala Sekolah</DivTitle>
                            <div className="inputClass">
                                <InputEmail 
                                    id="schoolsNameFormContactComponent"
                                    type="text" 
                                    name="schoolsname"
                                    placeholder="Nama Kepala Sekolah"
                                    onChange={props.onChangeHeadMasterOfSchools}
                                    // onKeyUp={()=>{IsSchoolsNameValid()}}
                                    // disabled={props.schoolsDisable}
                                    value={props.headMasterOfSchoolsValue}
                                />
                            </div>
                        </DivInputSchools>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col>
                        <DivInputSchools {...props}>
                            <DivTitle>Jumlah Siswa</DivTitle>
                            <div className="inputClass">
                                <InputEmail 
                                    id="schoolsNameFormContactComponent"
                                    type="text" 
                                    name="schoolsname"
                                    placeholder="Masukan Jumlah Siswa"
                                    onChange={props.onChangeTotalOfStudent}
                                    // onKeyUp={()=>{IsSchoolsNameValid()}}
                                    disabled={props.schoolsDisable}
                                    value={props.totalOfStudentValue}
                                />
                            </div>
                        </DivInputSchools>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col>
                        <DivInputSchools {...props}>
                            <DivTitle>Akreditasi</DivTitle>
                            <div className="inputClass">
                                <InputEmail 
                                    id="schoolsNameFormContactComponent"
                                    type="text" 
                                    name="schoolsname"
                                    placeholder="Masukan Akreditasi Sekolah"
                                    onChange={props.onChangeAccreditation}
                                    // onKeyUp={()=>{IsSchoolsNameValid()}}
                                    disabled={props.schoolsDisable}
                                    value={props.accreditationValue}
                                />
                            </div>
                        </DivInputSchools>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col>
                        <DivInputSchools {...props}>
                            <DivTitle>Jam Sekolah Masuk</DivTitle>
                            <div className="inputClass">
                                <InputEmail 
                                    id="schoolsNameFormContactComponent"
                                    type="text" 
                                    name="schoolsname"
                                    placeholder="Masukan Jam Sekolah Masuk"
                                    onChange={props.onChangeSchoolsBeginTime}
                                    // onKeyUp={()=>{IsSchoolsNameValid()}}
                                    disabled={props.schoolsDisable}
                                    value={props.schoolsBeginTimeValue}
                                />
                            </div>
                        </DivInputSchools>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col>
                        <DivInputSchools {...props}>
                            <DivTitle>Jam Pulang Sekolah</DivTitle>
                            <div className="inputClass">
                                <InputEmail 
                                    id="schoolsNameFormContactComponent"
                                    type="text" 
                                    name="schoolsname"
                                    placeholder="Masukan Jam Sekolah Masuk"
                                    onChange={props.onChangeFinishSchoolsTime}
                                    // onKeyUp={()=>{IsSchoolsNameValid()}}
                                    disabled={props.schoolsDisable}
                                    value={props.finishSchoolsTimeValue}
                                />
                            </div>
                        </DivInputSchools>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col className="divColbackgroundInput">
                        <LineConten />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div style={{marginTop: "28px"}}></div>
                        <TitleEveryDiv>Biaya Sekolah</TitleEveryDiv>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <DivInputSchools {...props}>
                            <DivTitle>Uang Pangkal</DivTitle>
                            <div className="inputClass">
                                <InputEmail 
                                    id="schoolsNameFormContactComponent"
                                    type="text" 
                                    name="schoolsname"
                                    placeholder="Masukan Uanng Pangkal"
                                    onChange={props.onChangeEtfCost}
                                    // onKeyUp={()=>{IsSchoolsNameValid()}}
                                    disabled={props.schoolsDisable}
                                    value={props.etfCostValue}
                                />
                            </div>
                        </DivInputSchools>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col>
                        <DivInputSchools {...props}>
                            <DivTitle>Spp Bulanan</DivTitle>
                            <div className="inputClass">
                                <InputEmail 
                                    id="schoolsNameFormContactComponent"
                                    type="text" 
                                    name="schoolsname"
                                    placeholder="Masukan SPP Bulanan"
                                    onChange={props.onChangeSppCost}
                                    // onKeyUp={()=>{IsSchoolsNameValid()}}
                                    disabled={props.schoolsDisable}
                                    value={props.sppCostValue}
                                />
                            </div>
                        </DivInputSchools>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col>
                        <DivInputSchools {...props}>
                            <DivTitle>Uang Kegiatan</DivTitle>
                            <div className="inputClass">
                                <InputEmail 
                                    id="schoolsNameFormContactComponent"
                                    type="text" 
                                    name="schoolsname"
                                    placeholder="Maukan Uang Kegiatan"
                                    onChange={props.onChangeActivityCost}
                                    // onKeyUp={()=>{IsSchoolsNameValid()}}
                                    disabled={props.schoolsDisable}
                                    value={props.activityCostValue}
                                />
                            </div>
                        </DivInputSchools>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col>
                        <DivInputSchools {...props}>
                            <DivTitle>Uang Buku</DivTitle>
                            <div className="inputClass">
                                <InputEmail 
                                    id="schoolsNameFormContactComponent"
                                    type="text" 
                                    name="schoolsname"
                                    placeholder="Masukan Uang Buku"
                                    onChange={props.onChangeBooKCost}
                                    // onKeyUp={()=>{IsSchoolsNameValid()}}
                                    disabled={props.schoolsDisable}
                                    value={props.bookCostValue}
                                />
                            </div>
                        </DivInputSchools>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col>
                        <DivInputSchools {...props}>
                            <DivTitle>Potongan/Diskon</DivTitle>
                            <div className="inputClass">
                                <InputEmail 
                                    id="schoolsNameFormContactComponent"
                                    type="text" 
                                    name="schoolsname"
                                    placeholder="Masukan Potongan atau Diskon"
                                    onChange={props.onChangeInputDiscount}
                                    // onKeyUp={()=>{IsSchoolsNameValid()}}
                                    disabled={props.schoolsDisable}
                                    value={props.inputDiscountValue}
                                />
                            </div>
                        </DivInputSchools>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col className="divColbackgroundInput">
                        <LineConten />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div style={{marginTop: "28px"}}></div>
                        <TitleEveryDiv>Pendaftaran</TitleEveryDiv>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <DivInputSchools {...props}>
                            <DivTitle>Jadwal Pendaftaran</DivTitle>
                            <div className="inputClass">
                                <InputEmail 
                                    id="schoolsNameFormContactComponent"
                                    type="text" 
                                    name="schoolsname"
                                    placeholder="Masukan Jadwal Pendaftaran"
                                    onChange={props.onChangeRegistration}
                                    // onKeyUp={()=>{IsSchoolsNameValid()}}
                                    disabled={props.schoolsDisable}
                                    value={props.registrationValue}
                                />
                            </div>
                        </DivInputSchools>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col>
                        <DivInputSchools {...props}>
                            <DivTitle>Jadwal Pengumuman</DivTitle>
                            <div className="inputClass">
                                <InputEmail 
                                    id="schoolsNameFormContactComponent"
                                    type="text" 
                                    name="schoolsname"
                                    placeholder="Masukan Jadwal Pengumuman"
                                    onChange={props.onChangeAnnoucement}
                                    // onKeyUp={()=>{IsSchoolsNameValid()}}
                                    disabled={props.schoolsDisable}
                                    value={props.annoucementValue}
                                />
                            </div>
                        </DivInputSchools>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col>
                        <DivInputSchools {...props}>
                            <DivTitle>Daftar Ulang</DivTitle>
                            <div className="inputClass">
                                <InputEmail 
                                    id="schoolsNameFormContactComponent"
                                    type="text" 
                                    name="schoolsname"
                                    placeholder="Daftar Ulang"
                                    onChange={props.onChangeReregistration}
                                    // onKeyUp={()=>{IsSchoolsNameValid()}}
                                    disabled={props.schoolsDisable}
                                    value={props.reregistrationValue}
                                />
                            </div>
                        </DivInputSchools>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col className="divColbackgroundInput">
                        <LineConten />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div style={{marginTop: "28px"}}></div>
                        <TitleEveryDiv>Fasilitas</TitleEveryDiv>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {
                        props.storeFacility.slice(0, maxFacility).map((data, index)=>{
                            return(<DivInputSchools {...props}>
                                <DivTitle>{`Fasilitas ${data.numb}`}</DivTitle>
                                <div className="inputClass">
                                    <InputEmail 
                                        id={data.name}
                                        type="text" 
                                        name={data.name}
                                        placeholder={data.value !== null ? data.value : `Masukan Fasilitas ${data.numb}`}
                                        onChange={props.onChangeFacilities}
                                        // onKeyUp={()=>{IsSchoolsNameValid()}}
                                        disabled={data.value !== null ? true : false}
                                    />
                                </div>
                                {data.value !== null ?
                                <DivForButtonDelete>
                                    <ButtonDelete value={data.id}
                                        className="buttonDeleteFacilityClass"
                                        onClick={props.onClickDeleteButtonFacilities}
                                    >
                                        <Icon  
                                            name="delete" 
                                            color="#1A6EB2"
                                            font="MaterialCommunityIcons"
                                            size={22} 
                                        />
                                    </ButtonDelete>
                                </DivForButtonDelete> : ""}
                            </DivInputSchools>)
                            ;
                        })}
                        <DivAddItemContent
                           onClick={()=>{setMaxFacility(maxFacility+1)}}             
                        >
                            Tambah Fasilitas +
                        </DivAddItemContent>
                    </Col>
                </Row>            
                <Row>
                    <Col className="divColbackgroundInput">
                        <LineConten />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div style={{marginTop: "28px"}}></div>
                        <TitleEveryDiv>Ekstrakulikuler</TitleEveryDiv>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {
                        props.storeEskul.slice(0, maxEskul).map((data, index)=>{
                            return(<DivInputSchools {...props}>
                                <DivTitle>{`Ekstrakuliuler ${data.numb}`}</DivTitle>
                                <div className="inputClass">
                                    <InputEmail 
                                        id="eskulNameFormContactComponent"
                                        type="text" 
                                        name={data.name}
                                        placeholder={data.value !== null ? data.value : `Masukan Ekstrakulikuller ${data.numb}`}
                                        onChange={props.onChangeEskul}
                                        // onKeyUp={()=>{IsSchoolsNameValid()}}
                                        disabled={data.value !== null ? true : false}
                                    />
                                </div>
                                {data.value !== null ?
                                <DivForButtonDelete>
                                        <ButtonDelete value={data.id}
                                            className="buttonDeleteFacilityClass"
                                            onClick={props.onClickDeleteButtonEskul}
                                        >
                                            <Icon  
                                                name="delete" 
                                                color="#1A6EB2"
                                                font="MaterialCommunityIcons"
                                                size={22} 
                                            />
                                        </ButtonDelete>
                                </DivForButtonDelete> : ""}
                            </DivInputSchools>)
                            ;
                        })}
                        <DivAddItemContent
                           onClick={()=>{setMaxEskul(maxEskul+1)}}             
                        >
                            Tambah Ekstrakulikuller +
                        </DivAddItemContent>
                    </Col>
                </Row>
                <Row>
                    <Col className="divColbackgroundInput">
                        <LineConten />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div style={{marginTop: "28px"}}></div>
                        <TitleEveryDiv>Jurusan</TitleEveryDiv>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {
                        props.storeMajor.slice(0, maxMajor).map((data, index)=>{
                            return(<DivInputSchools {...props}>
                                <DivTitle>{`Jurusan ${data.numb}`}</DivTitle>
                                <div className="inputClass">
                                    <InputEmail 
                                        id="eskulNameFormContactComponent"
                                        type="text" 
                                        name={data.name}
                                        placeholder={data.value !== null ? data.value : `Masukan Jurusan ${data.numb}`}
                                        onChange={props.onChangeMajor}
                                        // onKeyUp={()=>{IsSchoolsNameValid()}}
                                        disabled={data.value !== null ? true : false}
                                    />
                                </div>
                                {data.value !== null ?
                                <DivForButtonDelete>
                                        <ButtonDelete value={data.id}
                                            className="buttonDeleteFacilityClass"
                                            onClick={props.onClickDeleteButtonMajor}
                                        >
                                            <Icon  
                                                name="delete" 
                                                color="#1A6EB2"
                                                font="MaterialCommunityIcons"
                                                size={22} 
                                            />
                                        </ButtonDelete>
                                </DivForButtonDelete> : ""}
                            </DivInputSchools>)
                            ;
                        })}
                        <DivAddItemContent
                           onClick={()=>{setMaxMajor(maxMajor+1)}}             
                        >
                            Tambah Jurusan +
                        </DivAddItemContent>
                    </Col>
                </Row>
                <Row>
                    <Col className="divColbackgroundInput">
                        <LineConten />
                    </Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col className="colButtonSaveCancelJumbotronBanner" lg={2}>
                        <ButtonSecondary
                            width="81px"
                            name="Cancel"
                            onClick={()=>{}}
                        />
                        <ButtonPrimary
                            width="67px"
                            name="Save"
                            onClick={props.onButtonClickSave}
                        />
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </>
    );
}

const ButtonDelete = styled.button`
    background: none;
    color: none;
    outline: none;
    border: none;
`;
const DivForButtonDelete= styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: -40px;
    margin-top: -27px;
`;

const DivAddItemContent = styled.a`
    height: 17px;
    font-family: Rubik;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    display: flex;
    align-items: center;
    letter-spacing: 0.0025em;
    text-decoration-line: underline;
    cursor : pointer;
    /* darkblue-eduplus */

    color: #1A6EB2 !important;
`;

const TitleEveryDiv = styled.div`
    height: 17px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    display: flex;
    align-items: center;
    color: #242424;
    margin-bottom: 24px;
`;

const DivLinkForEye = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const LinkForEye = styled.a`
    margin-top: -20px;
    margin-right: 14px;
    max-width: 25px;
    cursor:pointer;
`;

const DivInputSchools = styled.div(
    props => ({
        width: "350px",
        height: "64px",
        background: props.schoolsDisable===true ? "#E3E3E3":"#FFFFFF",
        boxShadow: "0px 1px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "4px",
        marginBottom: "16px",
    })    
);

const DivTitle = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;


    /* black */
    color: #0A0A0A;
    margin-left: 20px;
    padding-top: 11px;
    text-align: left;
    letter-spacing: 0.001em;
`;

const InputEmail = styled.input`
    width: 276px;
    min-height: 24px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    margin-left: 20px;
    border : none;

    /* identical to box height */
    display: flex;
    align-items: center;
    letter-spacing: 0.0025em;

    color: #2D2D2D;
`;


const LineConten = styled.div`
    width: 100%;
    height: 0px;
    border-top: 1px solid #E0E0E0;
    margin-top: 32px;
`;

const DivTitleFormInput = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 6px;
    margin-top: 27px;
    /* identical to box height, or 150% */

    display: flex;
    align-items: flex-end;

    color: #373A3C;

`;

const InputTextJumbotron = styled.input`
    width: 254.94px;
    height: 38px;

    background: #FFFFFF;
    border: 1px solid #CCCCCC;
    box-sizing: border-box;
    border-radius: 4px;

    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    color: #333333;
    padding-left: 16px;
    padding-right: 16px;
`;

export default SchoolsForm;
