// import React from "react";
// import './style.css';


function Icon({classDiv="",classSvg="",alt="",iconName=""}){
    return(
        <div className={classDiv}>
            <svg className={classSvg} alt={alt}>
              
               <use xlinkHref={`../img/icon/sprite.svg#icon-${iconName}`}/>
            </svg>
    </div>
        
    )

    }
    export default Icon