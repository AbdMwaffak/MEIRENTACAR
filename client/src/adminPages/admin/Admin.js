import React from 'react';
import './admin.css'
import { Link, Outlet } from 'react-router-dom';

const Admin = () => {
    return (
        <div className='admin'>
            <nav className='adminNav'>
                <Link to="AddCars" className='adminLink' > Add Car </Link>
                <Link to="DeletedCars" className='adminLink' > Deleted Cars </Link>
                <Link to="AllCars" className='adminLink' > All Cars  </Link>
                <Link to="UpdateSettings" className='adminLink' > Settings  </Link>

            </nav>

            <Outlet />

        </div>
    );
}

export default Admin;
