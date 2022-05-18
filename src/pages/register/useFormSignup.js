import { useState } from 'react';
import { createUser, loginUser } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { TokenAndRole } from '../../Local/localStorageAndURL.js';

const useFormSignup = () => {
  const [error, setError] = useState('')
  const [elements, setElement] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
  });

  const handleChange = (e) => {
    return setElement(() => {
      const copyElements = { ...elements };
      copyElements[e.target.name] = e.target.value;
      return copyElements;
    });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser('/users', elements)
      .then((res) => {
        switch (res.status) {
          case 200:
            return res.json();
          case 400:
            setError('Falta algo a ser preenchido!')
            break;
          case 403:
            setError('E-mail já cadastrado!')
            break;
          default:
            console.log('Algo deu errado. Tente novamente mais tarde.')
        }
      })
      .then(data => {
        if (data.role === 'attendent') {
          TokenAndRole(data.token, data.role);
          loginUser('/auth', data);
          navigate('/menu');
        } else if (data.role === 'chef') {
          TokenAndRole(data.token, data.role);
          loginUser('/auth', data);
          navigate('/kitchen');
        }
      })
      .catch((error) => {});
  };

  return { handleChange, handleSubmit, error };

};
export default useFormSignup;