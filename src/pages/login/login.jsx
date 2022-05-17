import React from 'react';
import { useNavigate } from 'react-router-dom';
import useFormLogin  from './useFormLogin.js';

const Login = () => {
  const { handleChange, handleSubmit, error } = useFormLogin();
  const navigate = useNavigate();
  return (
    <div className='main'>
      <form className='login-page'>
        <h2 className='title'>Login</h2>
        <label className='sub-title'>Email</label>
        <input className='input-email' type='email' name='email' autoComplete='off' onChange={handleChange}/>
        <label className='sub-title'>Senha</label>
        <input className='unput-pass' type='password' name='password' onChange={handleChange} />
        <span className='errors-message'>{error}</span>
        <button className='button-login' onClick={handleSubmit}>Logar</button>
        <p className='new-user'>Não possui cadastro?</p>
        <button className='button-signup' onClick={() => { navigate('/signup') }}>Cadastre-se</button>
      </form>
    </div>
  );  
};

export default Login;
