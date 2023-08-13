import { FAVORITES } from './const'

export function timeFormat(timeInSeconds) {
  const min = Math.floor(timeInSeconds / 60)
  let minStr = ''
  if (min === 0) minStr = '00'
  else if (min < 10) minStr = `0${min.toString()}`
  else minStr = min.toString()

  const sec = timeInSeconds - min * 60
  let secStr = ''
  if (sec === 0) secStr = '00'
  else if (sec < 10) secStr = `0${sec.toString()}`
  else secStr = sec.toString()
  return `${minStr}:${secStr}`
}
export const shuffle = (array) => {
  const newArray = [...array]
  // Тасование Фишера — Йетса
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

export const addLike = (array, currentPage) => {
  if (currentPage === FAVORITES) {
    const newArray = array.map((track) => ({
      ...track,
      isLiked: true,
    }))

    return newArray
  }

  const userId = JSON.parse(localStorage.getItem('userPleer')).id
  const newArray = array.map((track) => ({
    ...track,
    isLiked: track.stared_user?.find((u) => u.id === userId),
  }))
  return newArray
}
