// import React from "react";
import { useState } from 'react'
import * as S from './LeftBlockMenu'

function LeftBlockMenu({ loading = false }) {
  const [visible, setVisible] = useState(true)
  const toggleVisibility = () => setVisible(!visible)

  return (
    <S.Nav>
      <S.Logo>
        <S.LogoImage src="../img/logo.png" alt="logo" />
      </S.Logo>
      {loading ? (
        <section>
          <S.Burger>
            <S.BurgerLine />
            <S.BurgerLine />
            <S.BurgerLine />
          </S.Burger>
          <S.Menu>
            <S.MenuItems>
              <li className="menu__item">Главное</li>
              <li className="menu__item">Mой плейлист</li>
              <li className="menu__item">Войти</li>
            </S.MenuItems>
          </S.Menu>
        </section>
      ) : (
        <section>
          <S.Burger
            onClick={toggleVisibility}
            role="button"
            tabIndex="0"
            onKeyUp={() => {}}
          >
            <S.BurgerLine />
            <S.BurgerLine />
            <S.BurgerLine />
          </S.Burger>
          {visible && (
            <S.Menu>
              <S.MenuItems>
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
              </S.MenuItems>
            </S.Menu>
          )}
        </section>
      )}
    </S.Nav>
  )
}

export default LeftBlockMenu
