// import React from "react";
import styles from './Icon.module.css'

function Icon({ classDiv = '', classSvg = '', alt = '', iconName = '' }) {
  let classDivList = classDiv ? classDiv.split(' ') : ''

  classDivList = classDivList
    ? classDivList.map((classDivName) => `${styles[classDivName]}`).join(' ')
    : ''

  return (
    <div className={classDivList}>
      <svg className={`${styles[classSvg]}`} alt={alt}>
        <use xlinkHref={`../img/icon/sprite.svg#icon-${iconName}`} />
      </svg>
    </div>
  )
}
export default Icon
