import React from 'react';
import {Link} from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext'
import { useLogout } from '../hooks/useLogout';

const buttonClasses = 'px-4 py-2 rounded-md bg-white  font-semibold';

const Navbar = () => {

    const {user} = useAuthContext();
    const { logout } = useLogout(); // Call the useLogout hook to get the handleLogout function

    const handleLogoutClick = () => {
        logout(); // Call the handleLogout function
    }
    return (
        <nav className='w-full flex justify-between items-center bg-teal-600 py-4 px-8'>
            <Link to='/' className="logo text-2xl text-white font-bold">
                <img src='/logo.png' alt='logo' className='w-8 h-8 inline-block mr-2' />
                Medilynk
            </Link>
            <div className="buttons flex gap-4">
                {!user && <button className={buttonClasses}>Login</button>}
                {user && <button onClick={handleLogoutClick} className={buttonClasses}>Logout</button>}
            </div>
        </nav>
    );
};

export default Navbar;
