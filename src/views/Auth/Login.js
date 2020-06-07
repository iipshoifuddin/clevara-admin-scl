import React, { Component } from 'react';

import LoginForm from '../../components/base_components/Auth/LoginForm';

class Login extends Component {
    render() {
        return (
            <div>
                <LoginForm 
                    onChangeEmail={(e)=>{console.log(e.target.value)}}
                    onChangePassword={(e)=>{console.log(e.target.value)}}
                    onClickButton={()=>{console.log("Button Activated !")}}
                />
            </div>
        );
    }
}

export default Login;