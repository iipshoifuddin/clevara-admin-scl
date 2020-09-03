import React, { Component } from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

import DropDownListProfile from '../components/base_components/DropDownList/DropDownListProfile/DropDownListProfile';
import SchoolsForm from '../components/base_components/Form/Home/Schools/SchoolsForm';

import{

    provinceFetchProvData,
    regencyFetchCityData,
    districtFetchDistrictData,

}from './redux/actions/completeaddress';

import { 
    schoolsFetchData, 
    facilitiesDeletehData,
} from './redux/actions/schools';

import{
    extracurricularFetchData,
    extracurricularDeletehData
}from './redux/actions/extracurricular'

import{
    majorFetchData,
    majorDeletehData
}from './redux/actions/major'


import { 
    requestTokenFetchData,
} from './redux/actions/auth/requesttoken';

import{
    schoolsUpdateFetchData
} from './redux/actions/schoolsupdate';

//URL from BackEnd
// const getUrlBackend = "http://localhost:8000/";
const getUrlBackend = "https://backend.edukasiplus.com/";

const dataFacilities=[
    {
        numb:1,   
        name:"facilities1",
        value:null,
    },
    {
        numb:2,
        name:"facilities2",
        value:null

    },
    {
        numb:3,
        name:"facilities3",
        value:null,
    },
    {
        numb:4,
        name:"facilities4",
        value:null,
    },
    {
        numb:5,
        name:"facilities5",
        value:null,
    },
    {
        numb:6,   
        name:"facilities6",
        value:null,
    },
    {
        numb:7,
        name:"facilities7",
        value:null

    },
    {
        numb:8,
        name:"facilities8",
        value:null,
    },
    {
        numb:9,
        name:"facilities9",
        value:null,
    },
    {
        numb:10,
        name:"facilities10",
        value:null,
    }
];

const dataEskul=[
    {
        numb:1,   
        name:"eskul1",
        value:null,
    },
    {
        numb:2,
        name:"eskul2",
        value:null

    },
    {
        numb:3,
        name:"eskul3",
        value:null,
    },
    {
        numb:4,
        name:"eskul4",
        value:null,
    },
    {
        numb:5,
        name:"eskul5",
        value:null,
    },
    {
        numb:6,   
        name:"eskul6",
        value:null,
    },
    {
        numb:7,
        name:"eskul7",
        value:null

    },
    {
        numb:8,
        name:"eskul8",
        value:null,
    },
    {
        numb:9,
        name:"eskul9",
        value:null,
    },
    {
        numb:10,
        name:"eskul10",
        value:null,
    }
];

const dataMajor=[
    {
        numb:1,   
        name:"major1",
        value:null,
    },
    {
        numb:2,
        name:"major2",
        value:null

    },
    {
        numb:3,
        name:"major3",
        value:null,
    },
    {
        numb:4,
        name:"major4",
        value:null,
    },
    {
        numb:5,
        name:"major5",
        value:null,
    },
    {
        numb:6,   
        name:"major6",
        value:null,
    },
    {
        numb:7,
        name:"major7",
        value:null

    },
    {
        numb:8,
        name:"major8",
        value:null,
    },
    {
        numb:9,
        name:"major9",
        value:null,
    },
    {
        numb:10,
        name:"major10",
        value:null,
    }
];



class Home extends Component {
    constructor(props){
        super(props);
 
        this.state = {
            updateBreakToken:[],
            updateSchoolsData:[],

            updateArrayFasility:null,
            updateArrayEskul:null,
            updateArrayMajor:null,
            varForStopReqDeleteFacilities:null,
            varForStopReqDeleteEskul:null,
            varForStopReqDeleteMajor:null,


            province_id: 0,
            city_id: 0,
            district_id:0,
            cityDisable: true,
            districtDisable: true,
            villageDisable: true,

            //Data Sekolah
            schoolsNameValue: "",
            curriculumSchoolsValue: "",
            eduStage:"",
            npsnValue: "",

            //Status Sekolah
            status:"",

            //Complete Address
            schoolsAddressValue: "",

            //Schools Contact
            phoneNumberValue:"",
            emailFormValue:"",
            valueInputWebiste:"",

            //Information Schools
            headMasterOfSchoolsValue: "",
            totalOfStudentValue: "",
            accreditationValue:"",
            schoolsBeginTimeValue:"",
            finishSchoolsTimeValue:"",

            //Schools Cost
            etfCostValue:"",
            sppCostValue:"",
            activityCostValue:"",
            bookCostValue: "",
            inputDiscountValue: "",

            //registraation
            registrationValue: "",
            annoucementValue: "",
            reregistrationValue: "",

            facilities1: "",
            facilities2: "",
            facilities3: "",
            facilities4: "",
            facilities5: "",
            facilities6: "",
            facilities7: "",
            facilities8: "",
            facilities9: "",
            facilities10: "",

            eskul1: "",
            eskul2: "",
            eskul3: "",
            eskul4: "",
            eskul5: "",
            eskul6: "",
            eskul7: "",
            eskul8: "",
            eskul9: "",
            eskul10: "",

            major1: "",
            major2: "",
            major3: "",
            major4: "",
            major5: "",
            major6: "",
            major7: "",
            major8: "",
            major9: "",
            major10: "",
        }
    }
    componentDidMount=async()=>{
        await this.IsAccesTokenSet();
        await this.RequestToken();
        // this.getProvinceData();
    }
    componentDidUpdate=async()=>{
        if(this.props.requestToken !== this.state.updateBreakToken){
            await this.getSchoolsData();
            await this.getExtracurricularData();
            await this.getMajorData();
            await this.setState({updateBreakToken:this.props.requestToken});
        }
        if(this.props.schools !== this.state.updateSchoolsData){
            if(this.props.schools.length !==0){
                this.setState({
                    schoolsNameValue: this.props.schools[0].name,
                    curriculumSchoolsValue: this.props.schools[0].curriculum,
                    npsnValue: this.props.schools[0].npsn,
                    schoolsAddressValue: this.props.schools[0].address,
                    
                    phoneNumberValue: this.props.schools[0].phone_number,
                    emailFormValue: this.props.schools[0].email,
                    valueInputWebiste: this.props.schools[0].email,

                    headMasterOfSchoolsValue: this.props.schools[0].headmaster,
                    totalOfStudentValue: this.props.schools[0].total_student,
                    accreditationValue: this.props.schools[0].accreditation,
                    schoolsBeginTimeValue: this.props.schools[0].schools_hour,
                    finishSchoolsTimeValue: this.props.schools[0].schools_hour,
                    
                    etfCostValue: this.props.schoolsCost[0].etf_cost,
                    sppCostValue: this.props.schoolsCost[0].spp_cost,
                    activityCostValue: this.props.schoolsCost[0].activities_cost,
                    bookCostValue: this.props.schoolsCost[0].book_cost,
                    inputDiscountValue: this.props.schoolsCost[0].discount,

                    registrationValue: this.props.registrationSchools[0].registration,
                    annoucementValue: this.props.registrationSchools[0].annoucement,
                    reregistrationValue: this.props.registrationSchools[0].re_registration,

                });
            }
            console.log(this.props.schools.name);
            this.setState({updateSchoolsData: this.props.schools});
        }
    }
    IsAccesTokenSet=async()=>{
        try {
            const value = await AsyncStorage.getItem('@access_token')
            if(value === null){
                window.location.href="/";
            }
        } catch(e){
            // error reading value
        }
    }
    RequestToken=async()=>{
        let valueToken="";
        // try {
        //     const getValueToken = await AsyncStorage.getItem('@access_token');
        //     if(getValueToken !== null) {
        //         valueToken+=getValueToken;
        //     }
        // } 
        // catch(e) {
        //     // error reading value
        // }
        // console.log(valueToken);
        await this.props.fetchDataRefreshToken(`${getUrlBackend}api/operator/refresh`, `Bearer ${valueToken}`);   
    }
    getSchoolsData=async()=>{
        let valueToken="";
        // try {
        //     const getValueToken = await AsyncStorage.getItem('@access_token')
        //     if(getValueToken !== null) {
        //         valueToken+=getValueToken;
        //     }
        // } 
        // catch(e) {
        //     // error reading value
        // }
        const dataPost ={
            headers: {
                'Authorization': 'Bearer ' + valueToken,
            }
        }
        
        await this.props.fetchData(`${getUrlBackend}api/operator/school`, dataPost);
    }
    getExtracurricularData=async()=>{
        let valueToken="";
        const dataPost ={
            headers: {
                'Authorization': 'Bearer ' + valueToken,
            }
        }
        
        await this.props.fetchDataEkstracurricular(`${getUrlBackend}api/operator/school`, dataPost);
    }
    getMajorData=async()=>{
        await this.props.fetchDataMajor(`${getUrlBackend}api/operator/school`);
    }
    getProvinceData=async(page)=>{ 
        const data = await this.props.fetchDataProvince(`${getUrlBackend}api/search/init`);
    }
    getCityData=async(cityId)=>{

        const data = await this.props.fetchDataCity(`${getUrlBackend}api/search/get-regency/${cityId}`);
        
    }
    getDistrictData=async(districtId)=>{
        const data = await this.props.fetchDataDistrict(`${getUrlBackend}api/search/get-district/${districtId}`);
    }
    onHandleFacilities=(event)=>{
        this.setState({ [event.target.name]: event.target.value });
    }
    onHandleEskul=(event)=>{
        this.setState({ [event.target.name]: event.target.value });
    }
    onHandleMajor=(event)=>{
        this.setState({ [event.target.name]: event.target.value });
    }
    onSubmitUpdateSchools=async()=>{
        let valueToken="";
        try {
            const getValueToken = await AsyncStorage.getItem('@access_token');
            if(getValueToken !== null) {
                valueToken+=getValueToken;
            }
        } 
        catch(e) {
            // error reading value
        }
        let formData = new FormData();
        let facilitiesArray=[], indexForFaciitiesArray=0;
        let ekstrakulilullerArray=[], indexForeskulArray=0;
        if(this.state.facilities1 !== ""){
            formData.append("facilities[]", this.state.facilities1);
        }
        if(this.state.facilities2 !== ""){
            formData.append("facilities[]", this.state.facilities2);
        }
        if(this.state.facilities3 !== ""){
            formData.append("facilities[]", this.state.facilities3);
        }
        if(this.state.facilities4 !== ""){
            formData.append("facilities[]", this.state.facilities4);
        }
        if(this.state.facilities5 !== ""){
            formData.append("facilities[]", this.state.facilities5);
        }
        if(this.state.facilities6 !== ""){
            formData.append("facilities[]", this.state.facilities6);
        }
        if(this.state.facilities7 !== ""){
            formData.append("facilities[]", this.state.facilities7);
        }
        if(this.state.facilities8 !== ""){
            formData.append("facilities[]", this.state.facilities8);
        }
        if(this.state.facilities9 !== ""){
            formData.append("facilities[]", this.state.facilities9);
        }
        if(this.state.facilities10 !== ""){
            formData.append("facilities[]", this.state.facilities10);
        }
        if(this.state.eskul1 !== ""){
            formData.append("extracurricular[]", this.state.eskul1);
        }
        if(this.state.eskul2 !== ""){
            formData.append("extracurricular[]", this.state.eskul2);
        }
        if(this.state.eskul3 !== ""){
            formData.append("extracurricular[]", this.state.eskul3);
        }
        if(this.state.eskul4 !== ""){
            formData.append("extracurricular[]", this.state.eskul4);
        }
        if(this.state.eskul5 !== ""){
            formData.append("extracurricular[]", this.state.eskul5);
        }
        if(this.state.eskul6 !== ""){
            formData.append("extracurricular[]", this.state.eskul6);
        }
        if(this.state.eskul7 !== ""){
            formData.append("extracurricular[]", this.state.eskul7);
        }
        if(this.state.eskul8 !== ""){
            formData.append("extracurricular[]", this.state.eskul8);
        }
        if(this.state.eskul9 !== ""){
            formData.append("extracurricular[]", this.state.eskul9);
        }
        if(this.state.eskul10 !== ""){
            formData.append("extracurricular[]", this.state.eskul10);
        }

        if(this.state.major1 !== ""){
            formData.append("major[]", this.state.major1);
        }
        if(this.state.major2 !== ""){
            formData.append("major[]", this.state.major2);
        }
        if(this.state.major3 !== ""){
            formData.append("major[]", this.state.major3);
        }
        if(this.state.major4 !== ""){
            formData.append("major[]", this.state.major4);
        }
        if(this.state.major5 !== ""){
            formData.append("major[]", this.state.major5);
        }
        if(this.state.major6 !== ""){
            formData.append("major[]", this.state.major6);
        }
        if(this.state.major7 !== ""){
            formData.append("major[]", this.state.major7);
        }
        if(this.state.major8 !== ""){
            formData.append("major[]", this.state.major8);
        }
        if(this.state.major9 !== ""){
            formData.append("major[]", this.state.major9);
        }
        if(this.state.major10 !== ""){
            formData.append("major[]", this.state.major10);
        }

        formData.append("npsn", this.state.npsnValue);
        formData.append("name", this.state.schoolsNameValue); 
        formData.append("address", this.state.schoolsAddressValue);
        formData.append("province_id", this.state.province_id);
        formData.append("regency_id", this.state.city_id);
        formData.append("district_id",this.state.district_id );
        formData.append("village_id", "99999" );
        formData.append("postal_code", "000000" );
        formData.append("phone_number", this.state.phoneNumberValue);
        formData.append("email", this.state.emailFormValue);
        formData.append("website", this.state.valueInputWebiste);
        formData.append("curriculum",this.state.curriculumSchoolsValue);
        formData.append("headmaster", this.state.headMasterOfSchoolsValue);
        formData.append("schools_hour", this.state.finishSchoolsTimeValue);
        formData.append("total_student", this.state.totalOfStudentValue);
        formData.append("accreditation", this.state.accreditationValue);
        formData.append("educational_stage", this.state.eduStage);
        formData.append("status", this.state.status);
        formData.append("etf_cost", this.state.etfCostValue);
        formData.append("spp_cost", this.state.sppCostValue);
        formData.append("activities_cost", this.state.activityCostValue);
        formData.append("book_cost", this.state.bookCostValue);
        formData.append("discount", this.state.inputDiscountValue);
        formData.append("registration", this.state.registrationValue);
        formData.append("annoucement", this.state.annoucementValue);
        formData.append("re_registration", this.state.reregistrationValue);

        // formData.append("major[]", "bayPass");
        await this.props.fetchDataUpdateSchools(`${getUrlBackend}api/operator/school/request`, `Bearer ${valueToken}`, formData);   
    }
    deleteFacilityProccessFunction=async()=>{
        let valueToken="";
        try {
            const getValueToken = await AsyncStorage.getItem('@access_token')
            if(getValueToken !== null) {
                valueToken+=getValueToken;
            }
        } 
        catch(e) {
            // error reading value
        }
        let formData = new FormData();
        formData.append("facility_id", this.state.updateArrayFasility);
        // console.log(formData.entries());
        const data = await this.props.fetchDeleteFacilities(`${getUrlBackend}api/operator/school/remove_facility`, `Bearer ${valueToken}`, formData);
    }
    deleteExtracurricularProccessFunction=async()=>{
        let valueToken="";
        try {
            const getValueToken = await AsyncStorage.getItem('@access_token')
            if(getValueToken !== null) {
                valueToken+=getValueToken;
            }
        } 
        catch(e) {
            // error reading value
        }
        console.log(this.state.updateArrayEskul);
        let formData = new FormData();
        formData.append("extracurricular_id", this.state.updateArrayEskul);
        const data = await this.props.fetchDeleteEkstracurricular(`${getUrlBackend}api/operator/school/remove_extracurricular`, `Bearer ${valueToken}`, formData);
    }
    deleteMajorProccessFunction=async()=>{
        let formData = new FormData();
        formData.append("major_id", this.state.updateArrayMajor);
        const data = await this.props.fetchDeleteMajor(`${getUrlBackend}api/operator/school/remove_major`, formData);
    }
    onHandleDeleteFasility=(param, filterData)=>{
        let data = this.isNotEpmtyData(filterData);
        // console.log(this.state.updateArrayFasility);
        if(this.state.updateArrayFasility === "" || this.state.updateArrayFasility === null || this.state.updateArrayFasility === undefined){
            return data;
        }
        if(this.state.updateArrayFasility !== null){
            if(this.state.updateArrayFasility !== this.state.varForStopReqDeleteFacilities){
                this.setState({varForStopReqDeleteFacilities: this.state.updateArrayFasility});
                    this.deleteFacilityProccessFunction();
            }
        }
        console.log(data);
        delete data[data.findIndex((e) =>{ return e.id === parseInt(param)})];
        return data;
    }
    onHandleDeleteEskul=(param, filterData)=>{
        let data = this.isNotEpmtyData(filterData);
        // console.log(this.state.updateArrayFasility);
        if(this.state.updateArrayEskul === "" || this.state.updateArrayEskul === null || this.state.updateArrayEskul === undefined){
            return data;
        }
        if(this.state.updateArrayEskul !== null){
            if(this.state.updateArrayEskul !== this.state.varForStopReqDeleteEskul){
                this.setState({varForStopReqDeleteEskul: this.state.updateArrayEskul});
                    this.deleteExtracurricularProccessFunction();
            }
        }
        // delete data[0];
        delete data[data.findIndex((e) =>{ return e.id === parseInt(param)})];
        return data;
    }
    onHandleDeleteMajor=(param, filterData)=>{
        let data = this.isNotEpmtyData(filterData);
        console.log(this.state.updateArrayMajor);
        if(this.state.updateArrayMajor === "" || this.state.updateArrayMajor === null || this.state.updateArrayMajor === undefined){
            return data;
        }
        if(this.state.updateArrayMajor !== null){
            if(this.state.updateArrayMajor !== this.state.varForStopReqDeleteMajor){
                this.setState({varForStopReqDeleteMajor: this.state.updateArrayMajor});
                this.deleteMajorProccessFunction();
            }
        }
        // delete data[0];
        delete data[data.findIndex((e) =>{ return e.id === parseInt(param)})];
        return data;
    }
    isNotEpmtyData=(data)=>{
        return data.filter((el)=>{return el != null;});
    }
    onClickButtonLogout=()=>{
        window.location.href="/logout";
    }
    render() {
        let newArrayFacilities=[], newFixArrayFacilities=[], valueForArrayFacilities=null, idForArrayFacilities=null;
        let newArrayEskul=[], newFixArrayEskul=[], valueForArrayEskul=null, idForArrayEskul=null;
        let newArrayMajor=[], newFixArrayMajor=[], valueForArrayMajor=null, idForArrayMajor=null;
        if(this.props.schoolsFacilities.length !==0){
            this.props.schoolsFacilities.map((data, index)=>{
                newArrayFacilities[index]=data;
                // newArrayFacilities[indexFacilities]={
                //     numb:indexFacilities,   
                //     name:`eskul${indexFacilities}`,
                //     value:data.name,
                // }
                // indexFacilities++;
            });
            // console.log(newArrayFacilities[0].name);
            dataFacilities.map((data, index)=>{
                if(index < newArrayFacilities.length){
                    if(newArrayFacilities[index]){
                        valueForArrayFacilities=newArrayFacilities[index].name;
                        idForArrayFacilities=newArrayFacilities[index].id;
                    }
                }
                else{
                    valueForArrayFacilities=null;
                    idForArrayFacilities=null;
                }
                newFixArrayFacilities[index]={
                    numb:data.numb,   
                    name:data.name,
                    value: valueForArrayFacilities,
                    id:idForArrayFacilities,
                }
            });
        }
        if(this.props.extracurricular.length !==0){
            this.props.extracurricular.map((data, index)=>{
                newArrayEskul[index]=data;
            });
            dataEskul.map((data, index)=>{
                if(index < newArrayEskul.length){
                    if(newArrayEskul[index]){
                        valueForArrayEskul=newArrayEskul[index].name;
                        idForArrayEskul=newArrayEskul[index].id;
                    }
                }
                else{
                    valueForArrayEskul=null;
                    idForArrayEskul=null;
                }
                newFixArrayEskul[index]={
                    numb:data.numb,   
                    name:data.name,
                    value: valueForArrayEskul,
                    id:idForArrayEskul,
                }
            });
        }
        if(this.props.major.length !==0){
            this.props.major.map((data, index)=>{
                newArrayMajor[index]=data;
            });
            dataMajor.map((data, index)=>{
                if(index < newArrayMajor.length){
                    if(newArrayMajor[index]){
                        valueForArrayMajor=newArrayMajor[index].name;
                        idForArrayMajor=newArrayMajor[index].id;
                    }
                }
                else{
                    valueForArrayMajor=null;
                    idForArrayMajor=null;
                }
                newFixArrayMajor[index]={
                    numb:data.numb,   
                    name:data.name,
                    value: valueForArrayMajor,
                    id:idForArrayMajor,
                }
            });
        }
        if(this.props.schoolsFacilities.length ===0){
            newFixArrayFacilities=dataFacilities;
        }
        if(this.props.extracurricular.length ===0){
            newFixArrayEskul=dataEskul;
        }
        if(this.props.major.length ===0){
            newFixArrayMajor=dataMajor;
        }

        console.log(newFixArrayMajor);
        return (
            <div>
                <section>
                    <div style={{marginTop: "114px"}}></div>
                    <DropDownListProfile 
                        titlePage="Sekolah"
                        // titlePage={this.state.facilities1+" && "+this.state.facilities2}
                        onChangeSearch={(e)=>{console.log(e.target.value)}}
                        onClickLogout={()=>{this.onClickButtonLogout()}}
                    />
                </section>
                <section className="tablesForRequestClass" id="bagdesForBannerJumbotronId">
                    <div style={{marginTop: "40px"}}></div>
                        <SchoolsForm
                            //Data Sekolah
                            onChangeSchoolsName={(e)=>{this.setState({schoolsNameValue: e.target.value})}}
                            valueSchoolsName={this.state.schoolsNameValue}
                            onChangeCurriculumSchools={(e)=>{this.setState({curriculumSchoolsValue: e.target.value})}}
                            curriculumSchoolsValue={this.state.curriculumSchoolsValue}
                            onClickEduStage={(e)=>{this.setState({eduStage: e.target.value})}}
                            onChangeNpsn={(e)=>{this.setState({npsnValue: e.target.value})}}
                            npsnValue={this.state.npsnValue}

                            //Status Sekolah
                            onClickRadioButton={(e)=>{this.setState({status: e.target.value})}}

                            //Complete Address
                            onChangeSchoolsAddress={(e)=>{this.setState({schoolsAddressValue: e.target.value})}}
                            schoolsAddressValue={this.state.schoolsAddressValue}

                            storeProvince={[        
                                {
                                    "id": 31,
                                    "name": "DKI JAKARTA"
                                },
                                {
                                    "id": 32,
                                    "name": "JAWA BARAT"
                                },
                                {
                                    "id": 36,
                                    "name": "BANTEN"
                                },
                            ]}
                            storeRegency={this.props.regency !==0 ? this.props.regency :[]}
                            storeDistrict={this.props.district !==0 ? this.props.district : []}
                            storeVillage={[]}

                            onClickProvince={(e)=>{
                                this.setState({province_id : e.target.value, cityDisable:false});
                                this.getCityData(e.target.value);
                            }}
                            onClickRegency={(e)=>{
                                this.setState({city_id : e.target.value, districtDisable:false});
                                this.getDistrictData(e.target.value);
                            }}
                            onClickDistrict={(e)=>{
                                this.setState({district_id : e.target.value});
                            }}
                            onClickVillage={(e)=>{console.log(e.target.value)}}

                            disabledButtonProvince={false}
                            disabledButtonRegency={this.state.cityDisable}
                            disabledButtonDistrict={this.state.districtDisable}
                            disabledButtonVillage={this.state.villageDisable}

                            //Schools Contact
                            onChangePhoneNumber={(e)=>{this.setState({phoneNumberValue: e.target.value})}}
                            phoneNumberValue={this.state.phoneNumberValue}
                            onChangeEmail={(e)=>{this.setState({emailFormValue: e.target.value})}}
                            emailFormValue={this.state.emailFormValue}
                            onChangeWebsite={(e)=>{this.setState({valueInputWebiste: e.target.value})}}
                            valueInputWebiste={this.state.valueInputWebiste}
                            
                            //Schools Information
                            onChangeHeadMasterOfSchools={(e)=>{this.setState({headMasterOfSchoolsValue: e.target.value })}}
                            headMasterOfSchoolsValue={this.state.headMasterOfSchoolsValue}
                            onChangeTotalOfStudent={(e)=>{this.setState({totalOfStudentValue: e.target.value})}}
                            totalOfStudentValue={this.state.totalOfStudentValue}
                            onChangeAccreditation={(e)=>{this.setState({accreditationValue: e.target.value})}}
                            accreditationValue={this.state.accreditationValue}
                            onChangeSchoolsBeginTime={(e)=>{this.setState({schoolsBeginTimeValue: e.target.value})}}
                            schoolsBeginTimeValue={this.state.schoolsBeginTimeValue}
                            onChangeFinishSchoolsTime={(e)=>{this.setState({finishSchoolsTimeValue: e.target.value})}}
                            finishSchoolsTimeValue={this.state.finishSchoolsTimeValue}

                            //SchoolsCost
                            onChangeEtfCost={(e)=>{this.setState({etfCostValue: e.target.value})}}
                            etfCostValue={this.state.etfCostValue}
                            onChangeSppCost={(e)=>{this.setState({sppCostValue: e.target.value})}}
                            sppCostValue={this.state.sppCostValue}
                            onChangeActivityCost={(e)=>{this.setState({activityCostValue: e.target.value})}}
                            activityCostValue={this.state.activityCostValue}
                            onChangeBooKCost={(e)=>{this.setState({bookCostValue: e.target.value})}}
                            bookCostValue={this.state.bookCostValue}
                            onChangeInputDiscount={(e)=>{this.setState({bookCostValue: e.target.value})}}
                            inputDiscountValue={this.state.inputDiscountValue}

                            //Schedule Registration
                            onChangeRegistration={(e)=>{this.setState({registrationValue: e.target.value})}}
                            registrationValue={this.state.registrationValue}
                            onChangeAnnoucement={(e)=>{this.setState({annoucementValue: e.target.value})}}
                            annoucementValue={this.state.annoucementValue}
                            onChangeReregistration={(e)=>{this.setState({reregistrationValue: e.target.value})}}
                            reregistrationValue={this.state.reregistrationValue}

                            //Facility
                            stroreFacilityValueLength={this.props.schoolsFacilities.length !== 0 ? this.props.schoolsFacilities.length : 1}
                            storeFacility={this.onHandleDeleteFasility(this.state.updateArrayFasility,newFixArrayFacilities) ?
                                this.onHandleDeleteFasility(this.state.updateArrayFasility, newFixArrayFacilities) : []
                            
                            }
                            onChangeFacilities={(e)=>{this.onHandleFacilities(e)}}
                            onClickDeleteButtonFacilities={(e)=>{this.setState({updateArrayFasility: e.target.value});
                                    this.onHandleDeleteFasility(e.target.value, newArrayFacilities)
                            }}


                            //eskul
                            stroreEskulValueLength={this.props.extracurricular.length !== 0 ? this.props.extracurricular.length : 1}
                            storeEskul={this.onHandleDeleteEskul(this.state.updateArrayEskul, newFixArrayEskul)}
                            onChangeEskul={(e)=>{this.onHandleEskul(e)}}
                            onClickDeleteButtonEskul={(e)=>{this.getExtracurricularData(); this.setState({updateArrayEskul: e.target.value})}}

                            //Major (Belum Diedit)
                            stroreMajorValueLength={this.props.major.length !== 0 ? this.props.major.length : 1}
                            storeMajor={this.onHandleDeleteMajor(this.state.updateArrayMajor, newFixArrayMajor)}
                            onChangeMajor={(e)=>{this.onHandleMajor(e)}}
                            onClickDeleteButtonMajor={(e)=>{this.getMajorData(); this.setState({updateArrayMajor: e.target.value})}}
                            

                            onButtonClickSave={()=>{this.onSubmitUpdateSchools()}}
                        />
                    <div style={{marginBottom: "351px"}}></div>
                </section>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        schools: state.schools,
        schoolsCost: state.schoolsCost,
        registrationSchools: state.registrationSchools,
        province: state.provincelist,
        regency: state.regencylist,
        district: state.districtlist,
        requestToken: state.requestToken,
        schoolsFacilities: state.schoolsFacilities,
        extracurricular:state.extracurricular,
        extracurricularDelete:state.extracurricularDelete,
        major:state.major,
        hasError: state.schoolsHaveError,
        isLoading: state.schoolsAreLoading,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

        fetchDeleteMajor: (url, data) => dispatch(majorDeletehData(url, data)),
        fetchDataMajor: (url, data) => dispatch(majorFetchData(url)),
        fetchDeleteEkstracurricular: (url, token, data) => dispatch(extracurricularDeletehData(url, token, data)),
        fetchDataEkstracurricular: (url, data) => dispatch(extracurricularFetchData(url, data)),
        fetchDeleteFacilities: (url, token, data) => dispatch(facilitiesDeletehData(url, token, data)),
        fetchDataUpdateSchools:(url, token, data) => dispatch(schoolsUpdateFetchData(url, token, data)),
        fetchData: (url, data) => dispatch(schoolsFetchData(url, data)),
        fetchDataProvince: (url) => dispatch(provinceFetchProvData(url)),
        fetchDataCity: (url) => dispatch(regencyFetchCityData(url)),
        fetchDataDistrict: (url) => dispatch(districtFetchDistrictData(url)),
        fetchDataRefreshToken: (url, data) => dispatch(requestTokenFetchData(url, data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
