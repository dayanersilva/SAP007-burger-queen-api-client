import useFormSignup from "./useFormSignup";

import logo from "../../img/logo.png";
import styles from "../login/login-signup.module.css";

const SignUp = () => {
  const { handleChange, handleSubmit, error } = useFormSignup();
  return (
    <div className={styles.root}>
      <main className={styles.main}>
        <picture>
          <img src={logo} alt="Quem disse Burguer" className={styles.logo} />
        </picture>
        <form>
          <h2 className={styles.title}>Cadastre-se</h2>
          <input
            className={styles.inputForm}
            type="text"
            placeholder="Nome Completo"
            name="name"
            autoComplete="off"
            onChange={handleChange}
          />
          <input
            className={styles.inputForm}
            type="email"
            placeholder="username@example.com"
            name="email"
            autoComplete="off"
            onChange={handleChange}
          />
          <input
            className={styles.inputForm}
            type="password"
            placeholder="Senha"
            name="password"
            onChange={handleChange}
          />
          <span className={styles.errorsMessage}>{error}</span>
          <div className={styles.registrationSection}>
            <select
              className={styles.selectRole}
              autoComplete="off"
              name="role"
              defaultValue={"cargo"}
              onChange={handleChange}
            >
              <option className={styles.optionSelectForm} value="cargo">
                Cargo
              </option>
              <option className={styles.optionSelectForm} value="attendent">
                Atendente
              </option>
              <option className={styles.optionSelectForm} value="chef">
                Chef de Cozinha
              </option>
            </select>
            <button
              className={styles.registerBtn}
              type="submit"
              onClick={handleSubmit}
            >
              Cadastrar
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default SignUp;
