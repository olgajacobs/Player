// import Cookies from 'js-cookie'

export async function getPlayList() {
  //   const token = Cookies.get('token')

  const response = await fetch('https://painassasin.online/catalog/track/all/')
  if (response.ok) {
    const data = await response.json()
    return data
  }
  if (response.status === 401) {
    throw new Error('Ошибка авторизации')
  } else throw new Error('Прочие ошибки сервера')
}
export default getPlayList
