import { useContext } from 'react'
import RightBlockItem from './RightBlockItem/RigthBlockItem'

import styles from './RightBlock.module.css'
import { IsLoading, UserInContext } from '../../contexts/context'
import Icon from '../Icon/Icon'

function RightBlock() {
  const userInContext = useContext(UserInContext)
  const isLoading = useContext(IsLoading)

  const personal =
    !isLoading && userInContext?.user ? userInContext?.user?.username : ''
  const logout = () => {
    localStorage.setItem('userPleer', undefined)
    userInContext.setUser(undefined)
  }
  return (
    <div className={styles.main}>
      <div className={styles.user}>
        <p className={styles.user__name}>{personal}</p>
        <div
          className={styles.user__avatar}
          title="Выход"
          onClick={logout}
          role="button"
          tabIndex="0"
          onKeyUp={() => {}}
        >
          <Icon
            classDiv="exit__image"
            classSvg="exit__svg"
            iconName="exit"
            alt="exit"
          />
        </div>
      </div>
      <div className={styles.playlist__block}>
        <RightBlockItem id="1" altName="day's playlist" />
        <RightBlockItem id="2" altName="100 hits" />
        <RightBlockItem id="3" altName="indy - charge" />
      </div>
    </div>
  )
}
export default RightBlock
