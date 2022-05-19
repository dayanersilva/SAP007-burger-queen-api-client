import React from 'react';
import useFormSignup from './useFormSignup';

const SignUp = () => {
  const { handleChange, handleSubmit, error} = useFormSignup();
  return (
    <main className='signup'>
      <section className='page-signup'>
        <h1 className='title'>Cadastre-se</h1>
        <label className='sub-title'>Seu nome</label>
        <input className='input-name' type='text' placeholder='Nome' name='name' autoComplete='off' onChange={handleChange}/>
        <label className='sub-title'>Cargo</label>
        <select className='select-role' autoComplete='off' name='role' onChange={handleChange}>
          <option value=''>Selecione um cargo</option>
          <option value='attendent'>Atendente</option>
          <option value='chef'>Chef de Cozinha</option>
        </select>
        <label className='sub-title'>Email</label>
        <input className='input-email' type='email' placeholder='username@example.com' name='email' autoComplete='off' onChange={handleChange}/>
        <label className='sub-title'>Senha</label>
        <input className='input-pass' type='password' placeholder='Senha' name='password' onChange={handleChange}/>
        <span className='errors-message'>{error}</span>
        <button className='btn-signup-page' type='submit' onClick={handleSubmit}>Cadastrar</button>  
      </section>
    </main>
  );
};

export default SignUp;