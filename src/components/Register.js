import React, { useState } from 'react';
import API from '../api';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await API.post('/auth/register', { username, password });
      console.log('Registration successful:', response.data);
    } catch (error) {
      console.error('Registration error:', error.response.data);
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
        <button type='submit' className='btn btn-primary'>Register</button>
      </form>
    </div>
  );
}

export default Register;