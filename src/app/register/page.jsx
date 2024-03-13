"use client"
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { registerUser } from "../redux/features/user/userActions"

const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(registerUser({ email, password }));
    router.push('/home');
  };

  return (
    <form onSubmit={handleSubmit}>
        <label> Email:
      <input type="email" placeholder="Correo electrónico" className='text-black' value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label> Constraseña:
      <input type="password" placeholder="Contraseña" className='text-black' value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit">Registrarse</button>
    </form>
  );
};

export default RegistrationForm;