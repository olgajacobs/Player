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
              <S.MenuItem>Главное</S.MenuItem>
              <S.MenuItem>Mой плейлист</S.MenuItem>
              <S.MenuItem>Войти</S.MenuItem>
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
                <S.MenuItem>
                  <S.MenuLink href="http://"> Главное</S.MenuLink>
                </S.MenuItem>
                <S.MenuItem>
                  <S.MenuLink href="http://">Мой плейлист</S.MenuLink>
                </S.MenuItem>
                <S.MenuItem>
                  <S.MenuLink href="http://">Войти</S.MenuLink>
                </S.MenuItem>
              </S.MenuItems>
            </S.Menu>
          )}
        </section>
      )}
    </S.Nav>
  )
}

export default LeftBlockMenu
