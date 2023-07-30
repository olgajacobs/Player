// import React from "react";
import styles from './Icon.module.css'

function Icon({
  classDiv = '',
  classSvg = '',
  alt = '',
  iconName = '',
  action = null,
}) {
  let classDivList = classDiv ? classDiv.split(' ') : ''

  classDivList = classDivList
    ? classDivList.map((classDivName) => `${styles[classDivName]}`).join(' ')
    : ''
  const handleClick = () => {
    if (action) action()
  }
  return (
    <div
      className={classDivList}
      onClick={handleClick}
      role="button"
      tabIndex="0"
      onKeyUp={() => {}}
    >
      <svg className={`${styles[classSvg]}`} alt={alt}>
        <use xlinkHref={`../img/icon/sprite.svg#icon-${iconName}`} />
      </svg>
    </div>
  )
}
export default Icon
