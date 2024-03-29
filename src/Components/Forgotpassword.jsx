import React, { useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

const Forgotpassword = ({baseURL}) => {
    const [username, setUsername] = useState('');
    const [responseMsg, setResponseMsg] = useState('')
    
    // Sending the username as payload to the backend and generating the email
    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {username};
        console.log(payload);
        await axios.post(`${baseURL}forgotpassword/`, payload)
            .then((res) => setResponseMsg(res.data.message))
        .catch((err) => console.log(err));

    }
    return (
        <div>
            Forgotpassword
            <form onSubmit={handleSubmit}>
                <label name='username'>
                    <input className='w-80' type='email' name='username' placeholder='Enter  your registered mail id' value={username} onChange={(e) => setUsername(e.target.value)} />
                    <br />
                    <button type='submit'>Send Reset Password Link</button>
                </label>
                <div>{responseMsg}<Link to='/login'>Click here to go to Login page</Link></div>                
            </form>
        </div>
    );
};

export default Forgotpassword;