import React, { useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

const Forgotpassword = ({ baseURL }) => {
    const [username, setUsername] = useState('');
    const [responseMsg, setResponseMsg] = useState('')

    // Sending the username as payload to the backend and generating the email
    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = { username };
        console.log(payload);
        const url = `${baseURL}forgotpassword`
        console.log(url);
        try {
            const res =  await axios.post(url, payload)
                setResponseMsg(res.data.message)
            } catch (error) {
            console.error('Error sending reset password link:', error);
            console.log(error);
        }
      

    }
    return (
        <div>
            Forgotpassword
            <form onSubmit={handleSubmit}>
                <label name='username'>
                    <input className='w-80' type='email' name='username' placeholder='Enter your registered mail id' value={username} onChange={(e) => setUsername(e.target.value)} />
                    <br />
                    <button type='submit'>Send Reset Password Link</button>
                </label>
                <div>{responseMsg}<Link to={'/login'}>Click here to go to Login page</Link></div>
            </form>
        </div>
    );
};

export default Forgotpassword;