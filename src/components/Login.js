import React, { useState } from 'react';
import API from '../api'; // Import the Axios instance

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await API.post('/auth/login', { username, password });
      console.log('Login successful:', response.data);
    } catch (error) {
      console.error('Login error:', error.response.data);
    }
  };

  return (
    <div className='p-4 max-w-sm mx-auto'>
      <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
        <input
          type='text'
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className='input input-bordered'
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='input input-bordered'
        />
        <button type='submit' className='btn btn-primary'>Login</button>
      </form>
    </div>
  );
}

export default Login;