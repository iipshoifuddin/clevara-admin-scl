import React, { Component } from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

import SchoolsListTable from '../components/base_components/Table/ShooolsListTable/SchoolsListTable';
import SchoolsListTableFavorite from '../components/base_components/Table/ShooolsListTable/SchoolsListTableFavorite';
import DropDownListProfile from '../components/base_components/DropDownList/DropDownListProfile/DropDownListProfile';
import PrimaryBadges from '../components/base_components/Badges/PrimaryBadges';
import LineComponets from '../components/base_components/Line/LineComponets';
import JumbotronForm from '../components/base_components/Form/Banner/Jumbotron/JumbotronForm';
import Promo1Form from '../components/base_components/Form/Banner/Promo1/Promo1Form';
import Promo2Form from '../components/base_components/Form/Banner/Promo2/Promo2Form';
import ProvinceForm from '../components/base_components/Form/Banner/Province/ProvinceForm';
import RegencyForm from '../components/base_components/Form/Banner/Regency/RegencyForm';
import InputFotoForm from '../components/base_components/Form/Foto/InputFoto/InputFotoForm';

import { 
    settingFetchData, 
    changePasswordDataFetchData,
} from './redux/actions/setting';

import { 
    requestTokenFetchData,
} from './redux/actions/auth/requesttoken';

import{
    fotoFetchData
}from './redux/actions/foto';


const storeData = [
    {
        school       : "SMPN 12 Bogor",
        npsn         : "0100232",
        officer      : "Daffa", 
        position     : "tata usaha",
        email        : "daffa@gmail.com",
        phone        : "0819899000"
    },
    {
        school       : "SMK 1 Jakarta",
        npsn         : "9800232",
        officer      : "Nopal",
        position     : "tata usaha",
        email        : "nopal@gmail.com",
        phone        : "08971123889"
    },
    {
        school       : "SD Sumbangsih",
        npsn         : "9990232",
        officer      : "Asep K",
        position     : "tata usaha",
        email        : "asep@gmail.com",
        phone        : "0852345876"
    },
];

const dummySchoolsTable = [
    {
        school       : "SMPN 12 Bogor",
        npsn         : "0100232",
        officer      : "Daffa", 
        email        : "daffa@gmail.com",
        phone        : "0819899000",
        status       : "Update Data",

    },
    {
        school       : "SMK 1 Jakarta",
        npsn         : "9800232",
        officer      : "Nopal",
        position     : "tata usaha",
        email        : "nopal@gmail.com",
        phone        : "08971123889",
        status       : "update Data",
    },
    {
        school       : "SD Sumbangsih",
        npsn         : "9990232",
        officer      : "Asep K",
        position     : "tata usaha",
        email        : "asep@gmail.com",
        phone        : "0852345876",
        status       : "Create New",
    },
];

//URL from BackEnd
const getUrlBackend = "http://localhost:8000/"


class Foto extends Component {
    constructor(props){
        super(props);
 
        this.state = {
            updateBreakToken:[],
            stateSourceImage1:null,
            stateSourceImage2:null,
            stateSourceImage3:null,
            stateSourceImage4:null,
            stateSourceImage5:null,
        }
    }
    componentDidMount = () =>{
        this.IsAccesTokenSet();
        this.RequestToken();
    }
    componentDidUpdate=async()=>{
        // if(this.props.requestToken !== this.state.updateBreakToken){
        //     this.getSettingData();
        //     await this.setState({updateBreakToken: this.props.requestToken});
        // }
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
    onClickButtonHandle=async()=>{
        if(this.state.stateSourceImage1 !==null){
            let valueToken="";
            //Create an object of formData 
            const formData = new FormData(); 
            
            // Update the formData object 
            formData.append( 
                "images[]", 
                this.state.stateSourceImage1, 
                this.state.stateSourceImage1.name 
            ); 
            
            if(this.state.stateSourceImage2 !== null){
                formData.append( 
                    "images[]", 
                    this.state.stateSourceImage2, 
                    this.state.stateSourceImage2.name 
                ); 
            }
            if(this.state.stateSourceImage3 !== null){
                formData.append( 
                    "images[]", 
                    this.state.stateSourceImage3, 
                    this.state.stateSourceImage3.name 
                ); 
            }
            if(this.state.stateSourceImage4 !== null){
                formData.append( 
                    "images[]", 
                    this.state.stateSourceImage4, 
                    this.state.stateSourceImage4.name 
                ); 
            }
            if(this.state.stateSourceImage5 !== null){
                formData.append( 
                    "images[]", 
                    this.state.stateSourceImage5, 
                    this.state.stateSourceImage5.name 
                ); 
            }
            //Details of the uploaded file 
            console.log(this.state.stateSourceImage1);
            try {
                const getValueToken = await AsyncStorage.getItem('@access_token');
                if(getValueToken !== null) {
                    valueToken+=getValueToken;
                }
            } 
            catch(e) {
                // error reading value
            }
            await this.props.fetchDataFoto(`${getUrlBackend}api/operator/school/image-upload`, `Bearer ${valueToken}`, formData);   
        }
    }
    render() {
        // if (this.props.hasError) {
        //     return <p id="defaultOpenBadges">Sorry! There was an error loading the items</p>;
        // }
        // if (this.props.isLoading) {
        //     return <p id="defaultOpenBadges">Loading…</p>;
        // }
        if (this.props.uploadLoading) {
            return <p id="defaultOpenBadges">Loading…</p>;
        }
        console.log(this.props.regency);

        return (
            <div>
                <section>
                    <div style={{marginTop: "114px"}}></div>
                    <DropDownListProfile 
                        titlePage="Foto"
                        onChangeSearch={(e)=>{console.log(e.target.value)}}
                    />
                </section>
                <section className="tablesForRequestClass" id="bagdesForBannerJumbotronId">
                    <div style={{marginTop: "25px"}}></div>
                        <InputFotoForm
                            store={storeData}
                            // onChangeImage1={(e)=>{this.setState({stateSourceImage1: e.target.files[0]})}}
                            onChangeImage1={(e)=>{this.setState({stateSourceImage1: e.target.files[0]})}}
                            onChangeImage2={(e)=>{this.setState({stateSourceImage2: e.target.files[0]})}}
                            onChangeImage3={(e)=>{this.setState({stateSourceImage3: e.target.files[0]})}}
                            onChangeImage4={(e)=>{this.setState({stateSourceImage4: e.target.files[0]})}}
                            onChangeImage5={(e)=>{this.setState({stateSourceImage5: e.target.files[0]})}}
                            onClickSaveButton={()=>{this.onClickButtonHandle()}}
                        />
                    <div style={{marginBottom: "351px"}}></div>
                </section>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        setting: state.setting,
        requestToken: state.requestToken,
        hasError: state.settingHaveError,
        isLoading: state.settingAreLoading,
        uploadLoading: state.fotoAreLoading,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url, data) => dispatch(settingFetchData(url, data)),
        fetchDataFoto: (url, token, data) => dispatch(fotoFetchData(url, token, data)),
        fetchDataRefreshToken: (url, data) => dispatch(requestTokenFetchData(url, data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Foto);
