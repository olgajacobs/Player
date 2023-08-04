export async function getPlayList() {
  const response = await fetch('https://painassasin.online/catalog/track/all/')
  if (response.ok) {
    const data = await response.json()
    return data
  }
  if (response.status === 401) {
    throw new Error('Ошибка авторизации')
  } else throw new Error('Прочие ошибки сервера')
}

export async function registrateUser({ email, password, username }) {
  const response = await fetch('https://painassasin.online/user/signup/', {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
      username,
    }),
    headers: {
      'content-type': 'application/json',
    },
  })
  console.log(email, password, username)
  console.log('------------------------')
  if (response.status === 201) {
    const data = await response.json()
    return data
  }
  if (response.status === 501) {
    throw new Error('Сервер сломался')
  } else if (response.status === 400) {
    const responseMessage = await response.json()
    let errorMessage = 'Ошибка регистрации:'
    // if (responseMessage?.username)
    //   errorMessage += `\n ${responseMessage.username}`
    if (responseMessage?.email) errorMessage += `\n ${responseMessage.email}`
    if (responseMessage?.password)
      errorMessage += `\n ${responseMessage.password}`
    throw new Error(errorMessage)
  } else throw new Error('Прочие ошибки сервера')
}

export async function autorizeUser({ email, password }) {
  const response = await fetch('https://painassasin.online/user/login/', {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      'content-type': 'application/json',
    },
  })

  if (response.status === 200) {
    const data = await response.json()
    return data
  }
  if (response.status === 500) {
    throw new Error('Сервер сломался')
  } else if (response.status === 401) {
    const responseMessage = await response.json()
    let errorMessage = 'Ошибка авторизации:'
    if (responseMessage?.detail) errorMessage += `\n ${responseMessage.detail}`
    throw new Error(errorMessage)
  } else throw new Error('Прочие ошибки сервера')
}

//   {
//     headers: {
//       Authorization: `Bearer ${token}`,
//          },
//   }
