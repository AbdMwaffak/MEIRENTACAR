import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import './logoutModel.css'
import { postLogin } from '../../RTK/loginSlice';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';

const cookies = new Cookies();
let token = ''

if (cookies.get('token') !== undefined || null) {
    token = cookies.get('token')

} else console.log("you are not logged in")
//////////////

function LogoutModel() {

    const admin = useSelector((state) => state.adminState)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [hiddenB, setHiddenB] = useState(true)
    const [validated, setValidated] = useState(false);

    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault();
        cookies.remove('token')
        console.log(token)
        window.location.pathname = '/'



    };

    return (
        <>
            <Button
                variant="danger"
                onClick={handleShow}
                style={{ display: token != '' ? "flex" : "none" }}
            >
                LogOut
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Log out as Admin</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className='boxLogout'>
                        Are you sure you want to log out as an admin?

                        <div className='formFooter'>
                            <button type="submit" className='formButton' onClick={handleSubmit} > Logout   </button>
                        </div>
                    </div>





                </Modal.Body>
            </Modal>
        </>
    );
}

export default LogoutModel;