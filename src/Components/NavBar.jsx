import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='flex h-12 items-center bg-green-500 shadow-xl'>
            <h3 className='text-xl ms-4 font-bold'>PROFILE</h3>
            <div className='ms-auto text-white font-semibold'>
                <Link className='me-4' to={'/'} >Home</Link>
                <Link className='me-4' to={'/signup'} >Signup</Link>
                <Link className='me-4 text-xl text-[#1E1E24]' to={'/login'} >Login</Link>

            </div>
        </div>
    );
};

export default NavBar;