import React from 'react';
import BackButton from '../components/global/BackButton';
import Box from '../components/global/Box';

const Error404 = () => {
    return (
        <Box>
            <h1 className='text-center fw-bold'>404</h1>
            <p className='text-center'>Page not found</p>
            <BackButton />
        </Box>
    );
};

export default Error404;