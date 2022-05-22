import { useNavigate } from "react-router-dom";
import useFormLogin from "./useFormLogin.js";

import logo from "../../img/logo.png";
import styles from "./login-signup.module.css";

const Login = () => {
  const { handleChange, handleSubmit, error } = useFormLogin();
  const navigate = useNavigate();
  return (
    <div className={styles.root}>
      <main className={styles.main}>
        <picture>
          <img src={logo} alt="Quem disse Burguer" className={styles.logo} />
        </picture>
        <form>
          <h2 className={styles.title}>Login</h2>
          <input
            className={styles.inputForm}
            type="email"
            name="email"
            placeholder="E-mail"
            autoComplete="off"
            onChange={handleChange}
          />
          <input
            className={styles.inputForm}
            type="password"
            name="password"
            placeholder="Senha"
            onChange={handleChange}
          />
          <span className={styles.errorsMessage}>{error}</span>
          <button className={styles.loginBtn} onClick={handleSubmit}>
            Entrar
          </button>
          <div className={styles.toRegistration}>
            <p className={styles.registrationTitle}>Não possui cadastro?</p>
            <button
              className={styles.toRegisterButton}
              onClick={() => {
                navigate("/signup");
              }}
            >
              Cadastre-se
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Login;
