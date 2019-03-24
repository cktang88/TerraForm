import React, { useState } from 'react';
import './LoginForm.css'
import { GoogleLogin } from 'react-google-login';


  
function LoginForm(props) {
    
    const responseGoogle = (response) => {
        console.log(response); // not run on redirect anyways
    }
  
  
    return (
        <div>
            <h2>Login Page</h2>
            <div>
                <GoogleLogin
            clientId="53786112002-eccfjrn42sblpsc77bfedfe58tgij6k7.apps.googleusercontent.com"
            buttonText="Login"
            uxMode="redirect"
            redirectUri="http://localhost:1234"
            responseType="permission"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
                />
            </div>
        </div>
    )
}
export default LoginForm;