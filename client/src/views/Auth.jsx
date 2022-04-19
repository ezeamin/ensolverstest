import React from 'react';
import Box from '../components/global/Box';
import AuthForm from '../components/auth/AuthForm';
import Title from '../components/global/Title';

const Auth = (props) => {
    return (
        <Box>
            <Title title={props.type === "login" ? "Log In" : "Sign up"} />
            <AuthForm type={props.type}/>
        </Box>
    );
};

export default Auth;