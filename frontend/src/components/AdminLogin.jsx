import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/admin/login`, {username, password});
          localStorage.setItem('adminToken',res.data.token); // to store token
          navigate('/admin');
        } catch (error) {
          console.log('Something went wrong', error);
        }
    }

  return (
    <div>
      <div className='flex justify-center items-center h-screen'>
        <div className='border-2 rounded-lg shadow-xl p-10 '>
          <div className='mb-5'>
            <h1 className='text-3xl font-bold text-center'>Login</h1>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div className='mb-2'>
                <label className='font-semibold'>Username</label> <br />
                <input type="text" placeholder='Username' className='border-2 rounded-lg' value={username} onChange={(e) => setUsername(e.target.value)}/>
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

export default AdminLogin
