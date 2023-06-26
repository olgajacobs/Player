// import React from "react";
import './css/style.css';
// import icon from "../public/img/icon/sprite.svg#icon-search"

function Search(){
    return(
       <div className="centerblock__search search">
        <svg className="search__svg">
            {/* <use xlinkHref={icon}/> */}
            <use xlinkHref="../img/icon/sprite.svg#icon-search"/>
        </svg>
        <input className="search__text" type="search" placeholder="Поиск" name="search"/>
     </div>
    )

    }
    export default Search