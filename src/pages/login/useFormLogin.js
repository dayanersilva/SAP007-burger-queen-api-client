import { useState } from 'react';
import { loginUser } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { TokenAndRole } from '../../Local/localStorageAndURL';


//formulario de login
const useFormLogin = () => {
  const [error, setError] = useState('')
  const [elements, setElements] = useState({
    email: '',
    password: '',
  });

  //pegando os valores dos inputs e fazendo um copia
  const handleChange = (e) => {
    return setElements(() => {
      const copyElements = { ...elements };
      copyElements[e.target.name] = e.target.value;
      return copyElements;
    });
  };

  //hoook que faz redirecionar pelas paginas
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser('/auth', elements)
      .then((res) => {
        switch (res.status) {
          case 200:
            return res.json();
          case 400:
            setError('E-mail e/ou senha inválidos!')
            break;
          default:
        }
      })
      .then((data) => {
        if (data.role === 'attendent') {
          TokenAndRole(data.token, data.role);
          navigate('/menu');
        } else if (data.role === 'chef') {
          TokenAndRole(data.token, data.role);
          navigate('/kitchen');
        }
      })
      .catch((error) => { });
  };

  return { handleChange, handleSubmit, error };
};

export default useFormLogin;