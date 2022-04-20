import React from 'react';
import { logout } from '../../api/fetchFunctions';

const LogoutButton = () => {
    return (
        <button className='logout__button' onClick={()=> logout()}>
            <i className='text-danger fa-solid fa-arrow-right-from-bracket'></i>
        </button>
    );
};

export default LogoutButton;