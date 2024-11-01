import React, { useContext, useState } from 'react';
import './Login.css';
// import { loginCall } from '../loginCall';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [invalidCredential, setInvalidCredential] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { dispatch } = useContext(AuthContext);

    function emailHandler(e) {
        setEmail(e.target.value);
    }
    function passwordHandler(e) {
        setPassword(e.target.value);
    }

    async function submitHandler(e) {
        e.preventDefault();
        const userDetails = {
            email: email,
            password: password,
        };

        dispatch({ type: 'LOGIN_START' });

        fetch('http://localhost:2000/api/auth/login', {
            method: 'POST',
            body: JSON.stringify(userDetails),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                dispatch({ type: 'LOGIN_SUCCESS', payload: data });
                navigate('/');
            })
            .catch((err) => {
                dispatch({ type: 'LOGIN_FAILURE', payload: err });
                console.log(err);
                setInvalidCredential(true);
            });
    }

    return (
        <div id="login_container_div">
            <form action="" onSubmit={submitHandler}>
                <div id="login_form_div">
                    <div className="login_input_divs" id="login_text_div">
                        Login
                    </div>
                    <div className="login_input_divs">
                        <input type="text" placeholder="Email" onChange={emailHandler} />
                    </div>
                    <div className="login_input_divs">
                        <input type="text" placeholder="Password" onChange={passwordHandler} />
                    </div>
                    {invalidCredential && <div>Invalid Credentials!</div>}
                    <div className="login_input_divs" id="forgot_remember_div">
                        <div id="radio_div">
                            <input type="radio" value="remember" />
                            Remember Me
                        </div>
                        <div>Forgot Password?</div>
                    </div>
                    <div className="login_input_divs">
                        <input id="login_submit_btn" type="submit" value="Login" />
                    </div>
                    <div className="login_input_divs" id="signup_account_link_div">
                        <div>Don't have account?</div>
                        <div id="signup_link_div">SignUp</div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;
