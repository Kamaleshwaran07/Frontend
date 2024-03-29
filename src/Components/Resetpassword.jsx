import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Resetpassword = ({ baseURL }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userId, setUserId] = useState('');
    const [token, setToken] = useState('');
    const [responseMsg, setResponseMsg] = useState('');


    const getUserId = async (e) => {
        e.preventDefault()
        const payload = { username }
        // console.log(payload);
// Sending the username as payload to get the data about user
        try {
            const res = await axios.post(`${baseURL}getUserInfo/`, payload);
            const {user} = res.data; // Extract userId and token from response
            setUserId(user._id); // Set userId in state
            setToken(user.token); // Set token in state
        }
        catch (error) {

            console.log(error);
        }

    };
// Handle Resetting the password
    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = { password };
        // console.log(payload);
        // Constructing the url from userId and token got from the backend 
        const url = `${baseURL}resetpassword/${userId}/${token}`
        await axios.post(url, payload)
            .then((res) => setResponseMsg(res.data.message))
            .catch((err) => console.log(err));

    }
    return (
        <div>
            Reset Password
            <form onSubmit={handleSubmit} >
                <label name='username'>
                    <input className='w-80' type='email' name='username' placeholder='Enter  your registered mail id' value={username} onChange={(e) => setUsername(e.target.value)} />
                    <br />
                    <button type='button' onClick={getUserId} >Check the username</button>
                </label>
                <br />
                <label name='password'>
                    <input className='w-80' type='password' name='password' placeholder='Enter your new password'
                        value={password} onChange={(e) => setPassword(e.target.value)} />
                    <br />
                    <button type='submit' >Reset Password</button>
                </label>
                <div>{responseMsg}<a href='/login'>Click here to go to Login page</a></div>
            </form>
        </div>

    );
};

export default Resetpassword;