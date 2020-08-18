import React, { Component } from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

import LoginForm from '../../components/base_components/Auth/LoginForm';
import SweetAlert from '../../components/base_components/SweetAlert/SweetAlert';
import { 
    disableLoginError, 
    loginFetchData,
} from '../redux/actions/auth/login';

import{
    checkLoginFetchData,
}from '../redux/actions/auth/checklogin';

//URL from BackEnd
// const getUrlBackend = "http://localhost:8000/"
// const getUrlBackend = "http://139.180.184.84/"
// const getUrlBackend = "http://edukasiplus.com/"
const getUrlBackend = "https://backend.edukasiplus.com/";

class Login extends Component {
    constructor(props){
        super(props);
 
        this.state = {
            loginUpdate: [],
            checkLoginUpadte: [],
            username: "",
            password: "",
        }
    }
    componentDidMount = () =>{
        this.IsAccesTokenSet();
    }
    IsAccesTokenSet=async()=>{
        let permission=true;
        try {
            const value = await AsyncStorage.getItem('@access_token')
            if(value !== null) {
                window.location.href="/home";
                // permission=false;
            }
        } catch(e) {
            // error reading value
        }
        // return permission;
    }
    isLoginSuccess=async()=>{
        await this.props.fetchCheckLogin(`${getUrlBackend}api/operator/school`);   
    }
    componentDidUpdate=async()=>{
        if(this.props.login.length !== 0){
            // console.log(this.props.login.access_token);
            const storeData = async (value) => {
                try {
                  await AsyncStorage.setItem('@access_token', value);
                //   window.location.href="/home";
                    // await this.isLoginSuccess();
                } catch (e) {
                  // saving error
                }
            }
            storeData(this.props.login.access_token);
        }
        if(this.props.login !== this.state.loginUpdate){
            if(this.props.login !== 0){
                await this.isLoginSuccess();
                this.setState({loginUpdate: this.props.login});    
            }
        }
        if (this.props.hasError){    
            SweetAlert("Login Gagal !","Email atau Password Tidak Cocok.", "error" );
            this.props.fetchError(false);   
        }
        if (this.props.checkLogin !== this.state.checkLoginUpadte){    
            if(this.props.checkLogin.length !== 0){
                window.location.href="/home";
            }
            this.setState({checkLoginUpadte: this.props.checkLogin});
        }

        console.log(this.props.hasError);
    }
    loginProccessFunction=async()=>{
        const dataPost ={
            "email"    : this.state.username,
            "password" : this.state.password
        }
        const data = await this.props.fetchData(`${getUrlBackend}api/attempt/login`, dataPost);
        // const data = await this.props.fetchData(`${getUrlBackend}api/operator/school/image-upload`, dataPost);
    }
    handleButtonLogin=()=>{
        // console.log("cek button login");
        this.loginProccessFunction();
    }
    render() {
        // if (this.props.hasError) {
        //     SweetAlert("Login Gagal !","Email atau Password Tidak Cocok.", "error" );
        //     // return <p id="defaultOpenBadges">Sorry! There was an error loading the items</p>;
        // }
        // if (this.props.isLoading) {
        //     return <p id="defaultOpenBadges">Loading…</p>;
        // }
        console.log(this.props.login);

        return (
            <div>
                <LoginForm 
                    onChangeEmail={(e)=>{this.setState({username: e.target.value})}}
                    onChangePassword={(e)=>{this.setState({password: e.target.value})}}
                    onClickButton={()=>{this.handleButtonLogin()}}
                    onLoadingLogin={this.props.isLoading}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.login,
        checkLogin: state.checkLogin,
        hasError: state.loginHaveError,
        isLoading: state.loginAreLoading,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url, data) => dispatch(loginFetchData(url, data)),
        fetchError:()=>dispatch(disableLoginError()),
        fetchCheckLogin:(url)=>dispatch(checkLoginFetchData(url)),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);


