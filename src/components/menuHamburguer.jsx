import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getRole } from '../Local/localStorageAndURL';
import styles from "./components.module.css";

const MenuHamburguer = () => {
  const navigate = useNavigate();
  const [active, setMode] = useState(false);
  const ToggleMode = () => {
    setMode(!active);
  };
  return (
    <>
      <section
        className={active ? "icon iconActive" : "icon"}
        onClick={ToggleMode}
      >
        <div className="hamburguer hamburguerIcon"></div>
      </section>
      <section className={active ? "menu menuOpen" : "menu menuClose"}>
        <div className={styles.hamburguerMenuList}>
          <ul className={styles.hamburguerMenuListItems}>
            {getRole() === 'attendent' ? (
              <li>
                <button onClick={() => { navigate('/menu') }}>MENU</button>
              </li>
            ) : (
              <li>
                <button onClick={() => { navigate('/kitchen') }}>COZINHA</button>
              </li>
            )}
            <li>
              <button
                onClick={() => {
                  navigate("/order");
                }}>PEDIDOS PRONTOS
              </button>
            </li>
            <li className={styles.logoutButton}>
              <button
                onClick={() => {
                  localStorage.removeItem("token");
                  localStorage.removeItem("role");
                  navigate("/");
                }}
              >
                SAIR
              </button>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default MenuHamburguer;
