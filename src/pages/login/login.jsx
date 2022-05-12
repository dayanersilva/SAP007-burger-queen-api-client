import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const history = useNavigate();

  return (
    <div className='main'>
      <form className='login-page'>
        <h2 className='title'>Login</h2>
        <label className='sub-title'>Email</label>
        <input className='input-email' type='email' name='email' autoComplete='off'/>
        <label className='sub-title'>Senha</label>
        <input className='unput-pass' type='password' name='password' />
        <button className='button-login' type='submit'>Logar</button>
        <p className='new-user'>Não possui cadastro?</p>
        <button className='button-signup' onClick={() => { history('/signup') }}>Cadastre-se</button>
      </form>
    </div>
  );  
};

export default Login;
