import React, { Component } from 'react';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import $ from 'jquery';

import { 
    logoutFetchData,
} from '../redux/actions/auth/logout';

//URL from BackEnd
// const getUrlBackend = "http://localhost:8000/"
const getUrlBackend = "https://backend.edukasiplus.com/";

class Logout extends Component {
    componentDidMount=()=>{
        this.loginProccessFunction();
    }
    loginProccessFunction=async()=>{
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
        const data = await this.props.fetchData(`${getUrlBackend}api/operator/logout`, `Bearer ${valueToken}`);
    }
    
    render() {
        console.log(this.props.logout);
        // $("#slidebarComponentsDashboardContainer").css({"display" : "none"});
        return (
            <>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        logout: state.logout,
        hasError: state.logoutHaveError,
        isLoading: state.logoutAreLoading,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url, data) => dispatch(logoutFetchData(url, data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
