import { useParams, useNavigate } from 'react-router-dom'
import playListNames from './playlistnames'
import styles from './playlist.module.css'

function PlayList() {
  //   const [loading, setLoading] = useState(true)
  const params = useParams()
  const navigate = useNavigate()
  const playListName = playListNames.find(
    (playList) => playList.id === Number(params.id)
  ).name
  const buttonClick = () => {
    navigate('/', { replace: true })
  }
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1>Плейлист</h1>
        <h2 className={styles.playlistname}>{`"${playListName}"`}</h2>
        <button
          type="button"
          className={styles.button}
          onClick={() => buttonClick()}
        >
          Вернуться на главную страницу
        </button>
      </div>
    </div>
  )
}

export default PlayList
