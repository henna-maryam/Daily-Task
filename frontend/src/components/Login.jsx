import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/login`, {email, password});
      localStorage.setItem('token',res.data.token); // to store token
      navigate('/user');
    } catch (error) {
      console.log('Something went wrong', error);
    }
  }
  return (
    <div>
      <div className='float-right'>
        <button className='border-2 m-5 p-5 text-slate-500 hover:text-black' onClick={() => navigate('/adminLogin')}>Admin Login</button>
      </div>
      <div className='flex justify-center items-center h-screen'>
        <div className='border-2 rounded-lg shadow-xl p-10 '>
          <div className='mb-5'>
            <h1 className='text-3xl font-bold text-center'>Login</h1>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div className='mb-2'>
                <label className='font-semibold'>Email</label> <br />
                <input type="email" placeholder='Email' className='border-2 rounded-lg' value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div className='mb-5'>
                <label className='font-semibold'>Password</label> <br />
                <input type="password" placeholder='Password' className='border-2 rounded-lg' value={password} onChange={(e) => setPassword(e.target.value)}/>
              </div>
              <div className='text-center border-2 rounded-lg cursor-pointer hover:bg-blue-200'>
                <button type='submit'>Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login