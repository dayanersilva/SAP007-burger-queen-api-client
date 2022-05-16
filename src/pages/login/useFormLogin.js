import { useState } from 'react';
import { loginUser } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { TokenAndRole } from '../../Local/localStorageAndURL';

const useFormLogin = () => {
    const [elements, setElements] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState('');


  const handleChange = (e) => {
    return setElements(() => {
        const copyElements = { ...elements };
        copyElements[e.target.name] = e.target.value;
        return copyElements;
    });
};

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser('/auth', elements)
      .then(res => res.json())
      .then((data) => {
        if (data.role === 'attendent') {
          TokenAndRole(data.token, data.role);
          navigate('/menu');
        } else if (data.role === 'chef') {
          TokenAndRole(data.token, data.role);
          navigate('/kitchen');
        } else if (data.code === 400) {
          setErrors(data.message);
        }
      })
  };

  return { handleChange, handleSubmit, errors};
};

export default useFormLogin;