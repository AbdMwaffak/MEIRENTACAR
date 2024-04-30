import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import './loginModel.css'
import { postLogin } from '../../RTK/loginSlice';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
let token = ''

if (cookies.get('token') !== undefined || null) {
    token = cookies.get('token')

} else console.log("you are not logged in")
//////////////

function LoginModel() {

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
        const form = e.currentTarget;
        e.preventDefault();
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        else {
            setValidated(true);

            const value = {
                email,
                password,

            }
            dispatch(postLogin(value))
        }
    };
    return (
        <>
            <Button
                variant="saccess"
                //  variant="worring"
                onClick={handleShow}
                style={{ display: admin.adminState == true && token == '' ? "flex" : "none" }}
            >
                Login
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Log in as Admin</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* className={props.type == "name" ? "tt" : "ff"} */}
                    <Form noValidate validated={validated} onSubmit={handleSubmit} className='boxRegister' >


                        <div className='formBody'>
                            {/* ................... */}
                            <Form.Group className="mb-3" controlId="form1">
                                <Form.Label >
                                    email
                                </Form.Label>
                                <Form.Control type="email" placeholder="email" required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <Form.Control.Feedback type="invalid" >
                                    Please enter your email!                                </Form.Control.Feedback>
                            </Form.Group>
                            {/* ................... */}
                            <Form.Group className="mb-3" controlId="form2">
                                <Form.Label>
                                    password
                                </Form.Label>
                                <div className='passsWorlContent '>
                                    <Form.Control type={hiddenB ? 'password' : 'text'} placeholder="password" required

                                        value={password}
                                        onChange={(e) => (setPassword(e.target.value))}
                                    />
                                    <button type='button' className='hiddenBassWorld'
                                        onClick={() => setHiddenB(!hiddenB)}>
                                        <span className={hiddenB ? 'unhdiddenIcon' : 'hdiddenIcon'} >
                                            <svg stroke="currentColor" fill="#202126" stroke-width="0" viewBox="0 0 576 512" height="25px" width="25px" xmlns="http://www.w3.org/2000/svg"><path d="M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z">
                                            </path></svg>
                                        </span>
                                        <span className={hiddenB ? 'hdiddenIcon' : 'unhdiddenIcon'}>

                                            <svg stroke="currentColor" fill="#202126" stroke-width="0" viewBox="0 0 640 512" height="25px" width="25px" xmlns="http://www.w3.org/2000/svg"><path d="M634 471L36 3.51A16 16 0 0 0 13.51 6l-10 12.49A16 16 0 0 0 6 41l598 467.49a16 16 0 0 0 22.49-2.49l10-12.49A16 16 0 0 0 634 471zM296.79 146.47l134.79 105.38C429.36 191.91 380.48 144 320 144a112.26 112.26 0 0 0-23.21 2.47zm46.42 219.07L208.42 260.16C210.65 320.09 259.53 368 320 368a113 113 0 0 0 23.21-2.46zM320 112c98.65 0 189.09 55 237.93 144a285.53 285.53 0 0 1-44 60.2l37.74 29.5a333.7 333.7 0 0 0 52.9-75.11 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64c-36.7 0-71.71 7-104.63 18.81l46.41 36.29c18.94-4.3 38.34-7.1 58.22-7.1zm0 288c-98.65 0-189.08-55-237.93-144a285.47 285.47 0 0 1 44.05-60.19l-37.74-29.5a333.6 333.6 0 0 0-52.89 75.1 32.35 32.35 0 0 0 0 29.19C89.72 376.41 197.08 448 320 448c36.7 0 71.71-7.05 104.63-18.81l-46.41-36.28C359.28 397.2 339.89 400 320 400z">
                                            </path></svg>
                                        </span>
                                    </button>
                                </div>
                                <Form.Control.Feedback type="invalid" >
                                    الرجاء إدخال كلمة مرور بطول 8 أحرف على الأقل
                                </Form.Control.Feedback>
                            </Form.Group>
                            {/* ................... */}
                        </div>
                        <hr />
                        <div className='formFooter'>
                            <button type="submit" className='formButton' > Login   </button>
                        </div>
                    </Form>




                </Modal.Body>
            </Modal>
        </>
    );
}

export default LoginModel;