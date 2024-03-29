import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';
import { useNavigate } from 'react-router-dom';


const Signin = ({ baseURL }) => {
    const [isPasswordHidden, setPasswordHidden] = useState(true)
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [location, setLocation] = useState('')
    const [responseMsg, setResponseMsg] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const payloads = { username, name, password, location }
        console.log(username, name, password, location)
        await axios.post(`${baseURL}signup/`, payloads)
            .then((res) => setResponseMsg(res.data.message)
            )
            
            .catch((error) => console.log(error))
          
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
                            <button className="text-gray-400 absolute right-3 inset-y-0 my-auto active:text-gray-600"
                                onClick={() => setPasswordHidden(!isPasswordHidden)}
                            >
                                {
                                    isPasswordHidden ? (
                                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                        </svg>

                                    )
                                }
                            </button>
                            <input
                                type={isPasswordHidden ? "password" : "text"}
                                name='password'
                                placeholder="Enter your password"
                                value={password} onChange={(e) => setPassword(e.target.value)} className="w-full pr-12 pl-3 py-2 text-gray-500  font-normal outline-none border focus:border-indigo-600 shadow-xl rounded-lg"
                                required />
                        </div>
                    </label>
                    <label name='location' className='text-xl font-semibold mt-4'>
                        Location<br />
                        <input name='location' placeholder='Location' value={location} onChange={(e) => setLocation(e.target.value)} className='h-10 font-normal pr-12 pl-2 py-2 border-2 border-solid border-blue-100 w-full shadow-xl rounded-md' required />

                    </label>
                    <p className='mt-3 ms-auto text-white font-semibold'>Already have an account? <a href='/login' className='text-[#1E1E24] text-lg'>Login here</a> </p>
                    <button type='submit' className='mt-4 font-bold text-xl rounded-lg ms-auto me-auto bg-white shadow-xl w-36 p-2'>Sign up</button>

                </form>
            {/* </div> */}
            <div className='h-full w-2/5 mt-32'>
                <img src='https://media.discordapp.net/attachments/1018124413176135700/1220011153237737582/Saly-11.png?ex=660d62ed&is=65faeded&hm=15b5a9d4dbcd134851362cb29b186627ace13e6c0225392d9892e3811abacca4&=&format=webp&quality=lossless&width=442&height=420' className='signin' />


            </div>
            <div>{responseMsg}</div>
        </div>
    );
};

export default Signin;