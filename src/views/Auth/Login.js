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

//URL from BackEnd
const getUrlBackend = "http://localhost:8000/"

class Login extends Component {
    constructor(props){
        super(props);
 
        this.state = {
            username: "",
            password: "",
        }
    }
    componentDidMount = () =>{
        this.IsAccesTokenSet();
    }
    IsAccesTokenSet=async()=>{
        try {
            const value = await AsyncStorage.getItem('@access_token')
            if(value !== null) {
                window.location.href="/home";
            }
            // else if(value === null){
            //     window.location.href="/login";
            // }
            console.log(value)
        } catch(e) {
            // error reading value
        }
    }
    componentDidUpdate=()=>{
        if(this.props.login.length !== 0){
            // console.log(this.props.login.access_token);
            const storeData = async (value) => {
                try {
                  await AsyncStorage.setItem('@access_token', value);
                  window.location.href="/home";
                } catch (e) {
                  // saving error
                }
            }
            storeData(this.props.login.access_token);
        }
        if (this.props.hasError){    
            SweetAlert("Login Gagal !","Email atau Password Tidak Cocok.", "error" );
            this.props.fetchError(false);   
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
        hasError: state.loginHaveError,
        isLoading: state.loginAreLoading,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url, data) => dispatch(loginFetchData(url, data)),
        fetchError:()=>dispatch(disableLoginError()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
