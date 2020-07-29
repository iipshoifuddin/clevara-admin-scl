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
} from './redux/actions/schools';

import { 
    requestTokenFetchData,
} from './redux/actions/auth/requesttoken';

import{
    schoolsUpdateFetchData
} from './redux/actions/schoolsupdate';

//URL from BackEnd
const getUrlBackend = "http://localhost:8000/"

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


class Home extends Component {
    constructor(props){
        super(props);
 
        this.state = {
            updateBreakToken:[],
            updateSchoolsData:[],

            province_id: 0,
            city_id: 0,
            district_id:0,
            cityDisable: true,
            districtDisable: true,
            villageDisable: true,

            //Data Sekolah
            schoolsNameValue: "",
            curriculumSchoolsValue: "",
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
        }
    }
    componentDidMount=()=>{
        this.IsAccesTokenSet();
        this.RequestToken();
        // this.getProvinceData();
    }
    componentDidUpdate=async()=>{
        if(this.props.requestToken !== this.state.updateBreakToken){
            await this.getSchoolsData();
            this.setState({updateBreakToken:this.props.requestToken});
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
        console.log("req token function");
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
        await this.props.fetchDataRefreshToken(`${getUrlBackend}api/operator/refresh`, `Bearer ${valueToken}`);   
    }
    getSchoolsData=async()=>{
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
        const dataPost ={
            headers: {
                'Authorization': 'Bearer ' + valueToken,
            }
        }
        
        await this.props.fetchData(`${getUrlBackend}api/operator/school`, dataPost);
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
        const formData = new FormData(); 
        if(this.state.facilities1 !== ""){
            formData.append( 
                "facilities[]", 
                this.state.facilities1, 
                // this.state.facilities1.name 
            ); 
        }
        if(this.state.facilities2 !== ""){
            formData.append( 
                "facilities[]", 
                this.state.facilities2, 
                // this.state.facilities2.name 
            ); 
        }
        if(this.state.facilities3 !== ""){
            formData.append( 
                "facilities[]", 
                this.state.facilities3, 
                // this.state.facilities3.name 
            ); 
        }
        if(this.state.facilities4 !== ""){
            formData.append( 
                "facilities[]", 
                this.state.facilities4, 
                // this.state.facilities4.name 
            ); 
        }
        if(this.state.facilities5 !== ""){
            formData.append( 
                "facilities[]", 
                this.state.facilities5, 
                // this.state.facilities5.name 
            ); 
        }
        if(this.state.facilities6 !== ""){
            formData.append( 
                "facilities[]", 
                this.state.facilities6, 
                // this.state.facilities6.name 
            ); 
        }
        if(this.state.facilities7 !== ""){
            formData.append( 
                "facilities[]", 
                this.state.facilities7, 
                // this.state.facilities7.name 
            ); 
        }
        if(this.state.facilities8 !== ""){
            formData.append( 
                "facilities[]", 
                this.state.facilities8, 
                // this.state.facilities8.name 
            ); 
        }
        if(this.state.facilities9 !== ""){
            formData.append( 
                "facilities[]", 
                this.state.facilities9, 
                // this.state.facilities9.name 
            ); 
        }
        if(this.state.facilities10 !== ""){
            formData.append( 
                "facilities[]", 
                this.state.facilities10, 
                // this.state.facilities10.name 
            ); 
        }
        if(this.state.eskul1 !== ""){
            formData.append( 
                "extracurricular[]", 
                this.state.eskul1, 
            ); 
        }
        if(this.state.eskul2 !== ""){
            formData.append( 
                "extracurricular[]", 
                this.state.eskul2, 
                // this.state.facilities10.name 
            ); 
        }
        if(this.state.eskul3 !== ""){
            formData.append( 
                "extracurricular[]", 
                this.state.eskul3, 
                // this.state.facilities10.name 
            ); 
        }
        if(this.state.eskul4 !== ""){
            formData.append( 
                "extracurricular[]", 
                this.state.eskul4, 
                // this.state.facilities10.name 
            ); 
        }
        if(this.state.eskul5 !== ""){
            formData.append( 
                "extracurricular[]", 
                this.state.eskul5, 
                // this.state.facilities10.name 
            ); 
        }
        if(this.state.eskul6 !== ""){
            formData.append( 
                "extracurricular[]", 
                this.state.eskul6, 
                // this.state.facilities10.name 
            ); 
        }
        if(this.state.eskul7 !== ""){
            formData.append( 
                "extracurricular[]", 
                this.state.eskul7, 
                // this.state.facilities10.name 
            ); 
        }
        if(this.state.eskul8 !== ""){
            formData.append( 
                "extracurricular[]", 
                this.state.eskul8, 
                // this.state.facilities10.name 
            ); 
        }
        if(this.state.eskul9 !== ""){
            formData.append( 
                "extracurricular[]", 
                this.state.eskul9, 
                // this.state.facilities10.name 
            ); 
        }
        if(this.state.eskul10 !== ""){
            formData.append( 
                "extracurricular[]", 
                this.state.eskul10, 
                // this.state.facilities10.name 
            ); 
        }
        formData.append( 
            "major[]", 
            "IPA", 
            // this.state.facilities10.name 
        ); 
        
        // let facilities1= "";
        // if(this.state.facilities1 !== ""){
        //     facilities1=this.state.facilities1;
        // }
        // let facilities2= "";
        // if(this.state.facilities2 !== ""){
        //     facilities2=this.state.facilities2;
        // }
        // let facilities3= "";
        // if(this.state.facilities3 !== ""){
        //     facilities3=this.state.facilities3;
        // }
        // let facilities4= "";
        // if(this.state.facilities4 !== ""){
        //     facilities4=this.state.facilities4;
        // }
        // let facilities5= "";
        // let facilities6= "";
        // let facilities7= "";
        // let facilities8= "";
        // let facilities9= "";
        // let facilities10= "";

        // let eskul1= "";
        // let eskul2= "";
        // let eskul3= "";
        // let eskul4= "";
        // let eskul5= "";
        // let eskul6= "";
        // let eskul7= "";
        // let eskul8= "";
        // let eskul9= "";
        // let eskul10= "";
        const sendData ={
            "npsn": this.state.npsnValue,            
            "name": this.state.schoolsNameValue,
            "address": this.state.schoolsAddressValue,
            "province_id":this.state.province_id,
            "regency_id": this.state.city_id,
            "district_id": this.state.district_id,
            "village_id": this.state.village_id,
            // postal_code:14045
            "phone_number": this.state.phoneNumberValue,
            "email": this.state.emailFormValue,
            "website": this.state.valueInputWebiste,
            "curriculum": this.state.curriculumSchoolsValue,
            "headmaster": this.state.headMasterOfSchoolsValue,
            "schools_hour": this.state.finishSchoolsTimeValue,
            "total_student": this.state.totalOfStudentValue,
            "accreditation": this.state.accreditationValue,
            // educational_stage: this.
            "status": this.state.status,
            "etf_cost": this.state.etfCostValue,
            "spp_cost": this.state.sppCostValue,
            "activities_cost": this.state.activityCostValue,
            "book_cost": this.state.bookCostValue,
            "discount": this.state.inputDiscountValue,
            "registration": this.state.registrationValue,
            "annoucement": this.state.annoucementValue,
            "re_registration": this.state.reregistrationValue,
            "facilities[]":null,
            
        }
        await this.props.fetchDataUpdateSchools(`${getUrlBackend}api/operator/school/request`, `Bearer ${valueToken}`, sendData, formData);   
    }
    render() {
        let newArrayFacilities=[], newFixArrayFacilities=[], valueForArrayFacilities=null;
        let newArrayEskul=[], newFixArrayEskul=[], valueForArrayEskul=null;
        let lengthArrayForFacilities = this.props.schoolsFacilities.length;
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
                    }
                }
                else{
                    valueForArrayFacilities=null;
                }
                newFixArrayFacilities[index]={
                    numb:data.numb,   
                    name:data.name,
                    value: valueForArrayFacilities,
                }
            });
        }
        if(this.props.schoolsExtracurricular.length !==0){
            this.props.schoolsExtracurricular.map((data, index)=>{
                newArrayEskul[index]=data;
            });
            dataEskul.map((data, index)=>{
                if(index < newArrayEskul.length){
                    if(newArrayFacilities[index]){
                        valueForArrayEskul=newArrayEskul[index].name;
                    }
                }
                else{
                    valueForArrayEskul=null;
                }
                newFixArrayEskul[index]={
                    numb:data.numb,   
                    name:data.name,
                    value: valueForArrayEskul,
                }
            });
        }
        if(this.props.schoolsFacilities.length ===0){
            newFixArrayFacilities=dataFacilities;
        }
        if(this.props.schoolsExtracurricular.length ===0){
            newFixArrayEskul=dataEskul;
        }
        return (
            <div>
                <section>
                    <div style={{marginTop: "114px"}}></div>
                    <DropDownListProfile 
                        titlePage="Sekolah"
                        // titlePage={this.state.facilities1+" && "+this.state.facilities2}
                        onChangeSearch={(e)=>{console.log(e.target.value)}}
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
                            stroreFacilityValueLength={this.props.schoolsFacilities.length !== 0 ? lengthArrayForFacilities : 1}
                            storeFacility={newFixArrayFacilities}
                            onChangeFacilities={(e)=>{this.onHandleFacilities(e)}}


                            //eskul
                            stroreEskulValueLength={this.props.schoolsExtracurricular.length !== 0 ? this.props.schoolsExtracurricular.length : 1}
                            storeEskul={newFixArrayEskul}
                            onChangeEskul={(e)=>{this.onHandleEskul(e)}}

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
        schoolsExtracurricular: state.schoolsExtracurricular,
        hasError: state.schoolsHaveError,
        isLoading: state.schoolsAreLoading,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDataUpdateSchools:(url, token, data, data2) => dispatch(schoolsUpdateFetchData(url, token, data, data2)),
        fetchData: (url, data) => dispatch(schoolsFetchData(url, data)),
        fetchDataProvince: (url) => dispatch(provinceFetchProvData(url)),
        fetchDataCity: (url) => dispatch(regencyFetchCityData(url)),
        fetchDataDistrict: (url) => dispatch(districtFetchDistrictData(url)),
        fetchDataRefreshToken: (url, data) => dispatch(requestTokenFetchData(url, data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
