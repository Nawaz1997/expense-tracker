import React, { useState } from 'react';
import "./SignUp.css";

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [password, setPassword] = useState('');

    const usernameHandler = (event) => {
        setUsername(event.target.value);
    };

    const emailHandler = (event) => {
        setEmail(event.target.value);
    };

    const genderHandler = (event) => {
        setGender(event.target.value);
    };

    const passwordHandler = (event) => {
        setPassword(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const user = {
            username: username,
            password: password,
            gender: gender,
            email: email
        };

        fetch('http://localhost:2000/api/auth/signup', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {console.log("SUCCESS", data)})
        .catch((err) => {console.log(err)});

        setEmail('');
        setGender('');
        setPassword('');
        setUsername('');
    };

    return (
        <div id="signup_container_div">
            <form action="" onSubmit={submitHandler}>
                <div id="signup_form_div">
                    <div id="heading_div">Sign Up</div>
                    <div className="input_div">
                        <input type="text" placeholder="Username" onChange={usernameHandler} />
                    </div>
                    <div className="input_div">
                        <input type="text" placeholder="Email" onChange={emailHandler} />
                    </div>
                    <div className="input_div">
                        <input type="text" placeholder="Gender" onChange={genderHandler} />
                    </div>
                    <div className="input_div">
                        <input type="text" placeholder="Password" onChange={passwordHandler} />
                    </div>
                    <div className="input_div" id="sign_up_submit_btn">
                        <input type="submit" value="Register" />
                    </div>
                    <div id='already_signup_div'><p>Already Signup?</p></div>
                </div>
            </form>
        </div>
    );
};

export default SignUp;
