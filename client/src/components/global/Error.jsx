import React from 'react';

const Error = () => {
    return (
        <div className='text-center py-2'>
            <h2 className='fw-bold'>Error</h2>
            <p>There has been an error retrieving the data</p>
            <p className='mb-0'>Please retry later by reloading the page</p>
        </div>
    );
};

export default Error;