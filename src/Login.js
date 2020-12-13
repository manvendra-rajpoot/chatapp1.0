import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';

function Login() {
    const signIn = () => {

    };
    return (
        <div className='login'>
            <div className='login__container'>
                <img src='https://seeklogo.com/images/W/whatsapp-logo-112413FAA7-seeklogo.com.png'
                    alt='ChatApp1.0'
                />
                <div className='login__text'>
                    <h1>ChatApp 1.0</h1>
                </div>
                <Button type='submit'
                    onClick={signIn}
                >
                    Sign in with Google
                </Button>
            </div>
            
        </div>
    )
}

export default Login;
