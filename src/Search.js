// import React from "react";
import './css/style.css';
// import icon from "../public/img/icon/sprite.svg#icon-search"
import Icon from './Icon'

function Search(){
    return(
        <div className="centerblock__search search">
            <Icon classDiv="" classSvg="search__svg" iconName="search" alt="" />
            <input className="search__text" type="search" placeholder="Поиск" name="search"/>
        </div>
    )

    }
    export default Search

//     <svg className="search__svg">
//     {/* <use xlinkHref={icon}/> */}
//     <use xlinkHref="../img/icon/sprite.svg#icon-search"/>
// </svg>