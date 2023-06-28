// import React from "react";
import { useState } from 'react';
import './css/style.css';
import logo from "./logo.png"


function Menu(){
    const[visible,setVisible]=useState(true)
    const toggleVisibility = () => setVisible(!visible);
    // const handleKeyPress = () => {};
    return(
        <nav className="main__nav nav">
            <div className="nav__logo logo">
                <img className="logo__image" src={logo} alt="logo"/>
            </div>
            <div  className="nav__burger burger"  onClick={toggleVisibility} role='button' tabIndex="0" onKeyUp={() => {}} >
                <span className="burger__line"/>
                <span className="burger__line"/>
                <span className="burger__line"/>
            </div>
            {visible&&(<div className="nav__menu menu">
                <ul className="menu__list">
                    <li className="menu__item"><a href="http://" className="menu__link">Главное</a></li>
                    <li className="menu__item"><a href="http://" className="menu__link">Мой плейлист</a></li>
                    <li className="menu__item"><a href="http://" className="menu__link">Войти</a></li>
                </ul>
            </div>)}
        </nav>
 
    
    )}
    export default Menu