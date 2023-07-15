import { NavLink, useParams } from 'react-router-dom'
import playListNames from './playlistnames'
import styles from './playlist.module.css'

function PlayList() {
  //   const [loading, setLoading] = useState(true)
  const params = useParams()
  const playListName = playListNames.find(
    (playList) => playList.id === Number(params.id)
  ).name

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1>Плейлист</h1>
        <h2 className={styles.playlistname}>{`"${playListName}"`}</h2>
        <NavLink className={styles.link} to="/">
          Перейти на главную страницу
        </NavLink>
      </div>
    </div>
  )
}

export default PlayList
