export default function timeFormat(timeInSeconds) {
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