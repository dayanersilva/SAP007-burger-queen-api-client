import React from 'react';
import useFormSignup from './useFormSignup';

const SignUp = () => {
  const { handleChange, handleSubmit } = useFormSignup();
  return (
    <div className='main'>
      <section className='signup-page'>
        <h1 className='form-title'>Cadastre-se</h1>
        <label className='form-labels'>Seu nome</label>
        <input className='form-input' type='text' placeholder='Nome' name='name' autoComplete='off' onChange={handleChange}/>
        <label className='form-labels'>Cargo</label>
        <select className='form-select' autoComplete='off' name='role' onChange={handleChange}>
          <option value=''>Selecione um cargo</option>
          <option value='attendent'>Atendente</option>
          <option value='chef'>Chef de Cozinha</option>
        </select>
        <label className='form-labels'>Email</label>
        <input className='form-input' type='email' placeholder='username@example.com' name='email' autoComplete='off' onChange={handleChange}/>
        <label className='form-labels'>Senha</label>
        <input className='form-input' type='password' placeholder='Senha' name='password' onChange={handleChange}/>
        <button className='form-button draw' type='submit' onClick={handleSubmit}>Cadastrar</button>  
      </section>
    </div>
  );
};

export default SignUp;