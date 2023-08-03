import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { IsLoading } from '../../../contexts/context'
import styles from './RightBlockItem.module.css'

function RightBlockItem({ id = '0', altName = '' }) {
  const isLoading = useContext(IsLoading)
  if (isLoading) return <div className={styles.playlist} />
  return (
    <div className={styles.playlist}>
      <NavLink className={styles.playlist__link} to={`/playlist/${id}`}>
        <img
          className={styles.playlist__img}
          src={`img/playlist0${id}.png`}
          alt={altName}
        />
      </NavLink>
    </div>
  )
}

export default RightBlockItem
