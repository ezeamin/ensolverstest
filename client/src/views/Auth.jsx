import React from 'react';
import Box from '../components/Box';
import AuthForm from '../components/AuthForm';
import Title from '../components/Title';

const Auth = (props) => {
    return (
        <Box>
            <Title title={props.type === "login" ? "Log In" : "Sign up"} />
            <AuthForm type={props.type}/>
        </Box>
    );
};

export default Auth;