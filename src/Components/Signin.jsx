import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'

const Signin = ({ baseURL }) => {
    const [isPasswordHidden, setPasswordHidden] = useState(true)
    // const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [location, setLocation] = useState('')
    const [responseMsg, setResponseMsg] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const payloads = { username, name, password, location }
        // console.log(username, name, password, location)
        try {
           
            const res = await axios.post(`${baseURL}signup/`, payloads)
    
            setResponseMsg(res.data.message);
           
    }
    catch (error) {

        if (error.response && error.response.data && error.response.data.message) {
            setResponseMsg(error.response.data.message);
        }
        else setResponseMsg('An error occurred')
    }

    //         .catch((error) => 

    //         console.log(error),
    //             toast.danger(error.response.data.message)

    //         )

}


return (
    <div className='container flex flex-row'>
        {/* <div className=''> */}
        <form onSubmit={handleSubmit} className='form flex flex-col h-full w-2/5 p-6 ms-auto mt-28 bg-green-500  rounded-xl'>
            <h2 className='text-center text-2xl font-bold '>Signup</h2>

            <label name='username' className='text-xl font-semibold mt-4'>
                Username <br />
                <input name='username' placeholder='Enter your email' value={username} onChange={(e) => setUsername(e.target.value)} className='h-10 font-normal  w-full pr-12 pl-3 py-2 border-2 border-solid border-blue-100 shadow-xl rounded-md' required />

            </label>
            <label name='name' className='text-xl font-semibold mt-4'>
                Name <br />
                <input name='name' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} className='h-10 font-normal  w-full pr-12 pl-3 py-2 border-2 border-solid border-blue-100 shadow-xl rounded-md' required />

            </label>

            <label name='password' className='text-xl font-semibold mt-4'>
                Password<br />
                <div className="relative mt-2">
                    <button className="text-gray-400 absolute  inset-y-0 ms-auto active:text-gray-600"
                        onClick={() => setPasswordHidden(!isPasswordHidden)}
                    >

                    </button>
                    <input
                        type={isPasswordHidden ? "password" : "text"}
                        name='password'
                        placeholder="Enter your password"
                        value={password} onChange={(e) => setPassword(e.target.value)} className="w-full pr-8 pl-3 py-2 text-gray-500  font-normal outline-none border focus:border-indigo-600 shadow-xl rounded-lg"
                        required />
                </div>
            </label>
            <label name='location' className='text-xl font-semibold mt-4'>
                Location<br />
                <input name='location' placeholder='Location' value={location} onChange={(e) => setLocation(e.target.value)} className='h-10 font-normal pr-12 pl-2 py-2 border-2 border-solid border-blue-100 w-full shadow-xl rounded-md' required />

            </label>
            <p className='mt-3 ms-auto text-white font-semibold'>Already have an account? <Link to="/login" className='text-[#1E1E24] text-lg'>Login here</Link> </p>
            <button type='submit' className='mt-4 font-bold text-xl rounded-lg ms-auto me-auto bg-white shadow-xl w-36 p-2'>Sign up</button>

        </form>
        {/* </div> */}
        <div className='h-full w-2/5 mt-32'>
            <img src='https://media.discordapp.net/attachments/1018124413176135700/1220011153237737582/Saly-11.png?ex=660d62ed&is=65faeded&hm=15b5a9d4dbcd134851362cb29b186627ace13e6c0225392d9892e3811abacca4&=&format=webp&quality=lossless&width=442&height=420' className='signin' />


        </div>
        <div>
            {responseMsg && (
                <div className='toast bg-blue-500 text-white py-2 px-4 rounded-md fixed top-16 right-5'>
                    {responseMsg}
                </div>
            )}
        </div>
        
    </div>
);
};


export default Signin;