import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import Login from '../pages/login/login';
import SignUp from '../pages/register/signup';

describe('Login', () => {

  it('Deverá ser uma função', () => {
    expect(typeof Login).toBe('function');
  });
  
  it('deve renderizar um botão com o texto indicado', () => {
    const text = 'Entrar'
    render(<button>{text}</button>);
    const btn = screen.getByText(text);

    expect(btn).toBeInTheDocument();
  });

  it('deve disparar uma função de click recebida via prop', () => {
    const text = 'Entar'
    const onClick = jest.fn();
    render(<button onClick={onClick}>{text}</button>);

    expect(onClick).toHaveBeenCalledTimes(0);
    user.click(screen.getByText(text));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});

describe('SignUp', () => {
  
  it('Deverá ser uma função', () => {
    expect(typeof SignUp).toBe('function');
  });

  it('deve renderizar um botão com o texto indicado', () => {
    const text = 'Cadastrar'
    render(<button>{text}</button>);
    const btn = screen.getByText(text)
    expect(btn).toBeInTheDocument()
  });


  it('deve disparar uma função de click recebida via prop', () => {
    const text = 'Cadastrar'
    const onClick = jest.fn();
    render(<button onClick={onClick}>{text}</button>);

    expect(onClick).toHaveBeenCalledTimes(0);
    user.click(screen.getByText(text))
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
