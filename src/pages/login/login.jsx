import React from 'react';
import { useNavigate } from 'react-router-dom';
import useFormLogin  from './useFormLogin.js';

const Login = () => {
  const { handleChange, handleSubmit, error } = useFormLogin();
  const navigate = useNavigate();
  return (
    <main className='login'>
      <form className='page-login'>
        <h2 className='title'>Login</h2>
        <label className='sub-title'>Email</label>
        <input className='input-email' type='email' name='email' autoComplete='off' onChange={handleChange}/>
        <label className='sub-title'>Senha</label>
        <input className='input-pass' type='password' name='password' onChange={handleChange} />
        <span className='errors-message'>{error}</span>
        <button className='btn-login' onClick={handleSubmit}>Logar</button>
        <p className='sub-title'>Não possui cadastro?</p>
        <button className='btn-signup' onClick={() => { navigate('/signup') }}>Cadastre-se</button>
      </form>
    </main>
  );  
};

export default Login;
