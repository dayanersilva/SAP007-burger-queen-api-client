import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
            <li>
              <button>MENU</button>
            </li>
            <li>
              <button>COZINHA</button>
            </li>
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
