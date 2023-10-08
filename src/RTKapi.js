import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQueryWithReauth = async (args, api, extraOptions) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: 'https://skypro-music-api.skyeng.tech',
    prepareHeaders: (headers) => {
      const token = JSON.parse(localStorage.getItem('accessToken')) ?? null
      console.debug('Использую токен из стора', { token })
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    },
  })

  // Делаем запрос
  const result = await baseQuery(args, api, extraOptions)
  console.debug('Результат первого запроса', { result })

  // Если запрос выполнился не с 401 кодом, то все хорошо, просто отдаем результат запроса наружу
  if (result?.error?.status !== 401) {
    return result
  }

  // Ниже обрабатываем 401 код
  // Функция которая отчищает данные о юзере в сторе и отправляет на страницу логина

  const forceLogout = () => {
    console.debug('Принудительная авторизация!')
    localStorage.removeItem('userPleer')
    window.location.assign('/login')
  }

  // Функция getState возвращает состояние redux стейта целиком, ее нам предоставляет rtk query, она прилетает параметром запроса в функцию
  const refreshToken = JSON.parse(localStorage.getItem('refreshToken')) ?? null
  console.debug('Данные пользователя в сторе', { refreshToken })
  // Если в сторе нет refresh токена, то помочь пользователю мы уже ничем не сможем, разлогиниваем его и отправляем авторизоваться руками
  if (!refreshToken) {
    return forceLogout()
  }

  // Делаем запрос за новым access токеном в API обновления токена
  const refreshResult = await baseQuery(
    {
      url: '/user/token/refresh/',
      method: 'POST',
      body: {
        refresh: refreshToken,
      },
    },
    api,
    extraOptions
  )

  console.debug('Результат запроса на обновление токена', { refreshResult })
  if (!refreshResult.data.access) {
    return forceLogout()
  }

  // Мы наконец получили новый access токен, сохраняем его в стор, чтобы последующие запросы могли его использовать внутри prepareHeaders
  localStorage.setItem('accessToken', JSON.stringify(refreshResult.data.access))
  const retryResult = await baseQuery(args, api, extraOptions)

  // Если повторный запрос выполнился с 401 кодом, то что-то совсем пошло не так, отправляем на принудительную ручную авторизацию
  if (retryResult?.error?.status === 401) {
    return forceLogout()
  }

  console.debug('Повторный запрос завершился успешно')

  return retryResult
}

const TRACKS_TAG = 'Tracks'

export const RTKApi = createApi({
  reducerPath: 'RTKApi',
  tagTypes: ['Favorits'],
  baseQuery: baseQueryWithReauth,
  endpoints: (build) => ({
    getFavorites: build.query({
      query: () => ({
        url: `catalog/track/favorite/all/`,
        method: 'GET',
      }),
      providesTags: () => [TRACKS_TAG],
    }),
    deleteFavorite: build.mutation({
      query: ({ id }) => ({
        url: `catalog/track/${id}/favorite/`,
        method: 'DELETE',
      }),
      invalidatesTags: [TRACKS_TAG],
    }),
    addFavorite: build.mutation({
      query: ({ id, body }) => ({
        url: `catalog/track/${id}/favorite/`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [TRACKS_TAG],
    }),
    getPlayList: build.query({
      query: () => ({
        url: `catalog/track/all/`,
        method: 'GET',
      }),
      providesTags: () => [TRACKS_TAG],
    }),
  }),
})

export const {
  useGetFavoritesQuery,
  useGetPlayListQuery,
  useAddFavoriteMutation,
  useDeleteFavoriteMutation,
} = RTKApi
