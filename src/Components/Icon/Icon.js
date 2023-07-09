// import React from "react";
import styles from './Icon.module.css'

function Icon({ classDiv = '', classSvg = '', alt = '', iconName = '' }) {
  return (
    <div className={`${styles[classDiv]}`}>
      <svg className={`${styles[classSvg]}`} alt={alt}>
        <use xlinkHref={`../img/icon/sprite.svg#icon-${iconName}`} />
      </svg>
    </div>
  )
}
export default Icon
