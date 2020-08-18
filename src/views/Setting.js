import React, { Component } from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

// import RequestToken from './Auth/RequestToken';
import DropDownListProfile from '../components/base_components/DropDownList/DropDownListProfile/DropDownListProfile';
import InputSettingForm from '../components/base_components/Form/Setting/InputSetting/InputSettingForm';
import Logout from './Auth/Logout';

import { 
    settingFetchData, 
    changePasswordDataFetchData,
} from './redux/actions/setting';

import { 
    requestTokenFetchData,
} from './redux/actions/auth/requesttoken';

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
// const getUrlBackend = "http://localhost:8000/";
const getUrlBackend = "https://backend.edukasiplus.com/";


class Setting extends Component {
    constructor(props){
        super(props);
 
        this.state = {
            updateBreakToken:[],
            oldPassword:"",
            newPassword:"",
        }
    }
    componentDidMount =async () =>{
        await this.IsAccesTokenSet();
        await this.RequestToken();

        //Empty State Load
        // this.setState({updateBreakToken: []});
    }
    componentDidUpdate=async()=>{
        if(this.props.requestToken !== this.state.updateBreakToken){
            this.getSettingData();
            await this.setState({updateBreakToken: this.props.requestToken});
        }
    }
    RequestToken=async()=>{
        // console.log("req token function");
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
    getSettingData=async()=>{
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
    changePasswordHandle=async()=>{
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
            // headers: {
            //     'Authorization': 'Bearer ' + valueToken,
            // },
            old_password:this.state.oldPassword,
            password:this.state.newPassword,
            c_password:this.state.newPassword,
        }
        
        
        await this.props.fetchDataChangePassword(`${getUrlBackend}api/operator/change_password`, `Bearer ${valueToken}`, dataPost );
    }
    onClickButtonLogout=()=>{
        window.location.href="/logout";
    }
    render() {
        // console.log(this.props.setting);
        let newArrayOpratorProfile=[];
        if(this.props.setting.length > 0){
            newArrayOpratorProfile=this.props.setting;
        }
        // console.log(this.state.oldPassword +" + "+this.state.newPassword);
        return (
            <>
            <div>
                <section>
                    <div style={{marginTop: "114px"}}></div>
                    <DropDownListProfile 
                        titlePage="Setting"
                        onChangeSearch={(e)=>{console.log(e.target.value)}}
                        onClickLogout={()=>{this.onClickButtonLogout()}}
                    />
                </section>
                <section className="tablesForRequestClass" id="bagdesForBannerJumbotronId">
                    <div style={{marginTop: "40px"}}></div>
                        <InputSettingForm
                            store={storeData}
                            nameDisabled={true}
                            positionDisable={true}
                            emailDisable={true}
                            phoneDisable={true}
                            valueName={this.props.setting.length > 0 ? newArrayOpratorProfile[0].name : "-"}
                            valuePosition={this.props.setting.length > 0 ? newArrayOpratorProfile[0].position : "-"}
                            emailValue={this.props.setting.length > 0 ? newArrayOpratorProfile[0].email : "-"}
                            phoneValue={this.props.setting.length > 0 ? newArrayOpratorProfile[0].phone_number : "-"}
                            onChangeDefaultPassword={(e)=>{this.setState({oldPassword: e.target.value})}}
                            onChangeRepeatPassword={(e)=>{this.setState({newPassword: e.target.value})}}
                            onClickButtonSaveSetting={()=>{this.changePasswordHandle()}}

                        />
                    <div style={{marginBottom: "351px"}}></div>
                </section>
            </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        setting: state.setting,
        requestToken: state.requestToken,
        hasError: state.settingHaveError,
        isLoading: state.settingAreLoading,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url, data) => dispatch(settingFetchData(url, data)),
        fetchDataChangePassword: (url, token, data) => dispatch(changePasswordDataFetchData(url, token, data)),
        fetchDataRefreshToken: (url, data) => dispatch(requestTokenFetchData(url, data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Setting);
