// import Cookies from 'js-cookie'

export async function getPlayList() {
  //   const token = Cookies.get('token')

  const response = await fetch(
    'https://painassasin.online/catalog/track/all/'
    //   {
    //     headers: {
    //       //   Authorization: `Bearer ${token}`,
    //       Authorization:
    //         'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkwMTMxOTI0LCJpYXQiOjE2OTAxMzE2MjQsImp0aSI6IjQ2YjliNTFmZjE3ODRhY2E4MGU0OTNjYTVjNDg0YjA3IiwidXNlcl9pZCI6NzkxfQ.ktHEfxZrUFecStKU-U7NXecSP4YcWracHw98jopfLrY',
    //     },
    //   }
  )
  if (response.ok) {
    const data = await response.json()
    return data
  }
  if (response.status === 401) {
    throw new Error('Ошибка авторизации')
  } else throw new Error('Прочие ошибки сервера')
}
export default getPlayList
