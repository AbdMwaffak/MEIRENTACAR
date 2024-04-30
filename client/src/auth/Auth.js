import { Navigate, Outlet } from 'react-router-dom';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
let token = ''

if (cookies.get('token') !== undefined || null) {
  token = cookies.get('token')
}
export default function Auth(){
    return token ? <Outlet/> : <Navigate to='pageNotFound'/>
}