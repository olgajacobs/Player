import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styles from './RightBlockItem.module.css'
import { isLoadingSelector } from '../../../store/selectors/pleer'

function RightBlockItem({ id = '0', altName = '' }) {
  const isLoading = useSelector(isLoadingSelector)
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
