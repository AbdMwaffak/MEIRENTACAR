import { Link } from 'react-router-dom';
import './nav.css';
import Logo from '../imge/logo.png'
import LoginModel from '../extensions/login/LoginModel';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import LogoutModel from '../extensions/logout/LogoutModel';

const cookies = new Cookies();
let token = ''

if (cookies.get('token') !== undefined || null) {
    token = cookies.get('token')

} else console.log("you are not logged in")
//////////////

// style={{ display: guest ? "flex" : "none" }}
const MyNav = () => {

    const admin = useSelector((state) => state.adminState)

    return (
        <div className='navBar'>
            <div className='left'>
                <Link to=""  >
                    <div className='logo'><img className='carLogo' src={Logo} /></div>
                </Link>
            </div>

            <div className='mid'  >
                <Link to="" className='link' >  Home </Link>
                <Link to="contactus" className='link' >  ContactUs </Link>
                <Link to="admin" className='link' style={{ display: token ? "flex" : "none" }} >  admin </Link>

            </div>
            <div className='right'>
                <LoginModel />
                <LogoutModel />

            </div>

        </div >
    )

}
export default MyNav

// 9gauCqtaYO9k9boh