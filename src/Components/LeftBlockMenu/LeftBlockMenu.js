// import React from "react";
import { useState } from "react";
import styles from "./LeftBlockMenu.module.css";

function LeftBlockMenu({ loading = false }) {
  const [visible, setVisible] = useState(true);
  const toggleVisibility = () => setVisible(!visible);

  return (
    <nav className={styles.main}>
      <div className={styles.logo}>
        <img className={styles.logo__image} src="../img/logo.png" alt="logo" />
      </div>
      {loading ? (
        <section>
          <div className={styles.burger}>
            <span className={styles.burger__line} />
            <span className={styles.burger__line} />
            <span className={styles.burger__line} />
          </div>
          <div className={styles.menu}>
            <ul className={styles.menu__items}>
              <li className="menu__item">Главное</li>
              <li className="menu__item">Mой плейлист</li>
              <li className="menu__item">Войти</li>
            </ul>
          </div>
        </section>
      ) : (
        <section>
          <div
            className={styles.burger}
            onClick={toggleVisibility}
            role="button"
            tabIndex="0"
            onKeyUp={() => {}}
          >
            <span className={styles.burger__line} />
            <span className={styles.burger__line} />
            <span className={styles.burger__line} />
          </div>
          {visible && (
            <div className={styles.menu}>
              <ul className={styles.menu__items}>
                <li className="menu__item">
                  <a href="http://" className="menu__link">
                    Главное
                  </a>
                </li>
                <li className="menu__item">
                  <a href="http://" className="menu__link">
                    Мой плейлист
                  </a>
                </li>
                <li className="menu__item">
                  <a href="http://" className="menu__link">
                    Войти
                  </a>
                </li>
              </ul>
            </div>
          )}
        </section>
      )}
    </nav>
  );
}

export default LeftBlockMenu;
