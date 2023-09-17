import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const TRACKS_TAG = 'Tracks'
const getTokenFromLocalStorage = () =>
  JSON.parse(localStorage.getItem('accessToken'))

export const RTKApi = createApi({
  reducerPath: 'RTKApi',
  tagTypes: ['Favorits'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://skypro-music-api.skyeng.tech/catalog/',
  }),
  endpoints: (build) => ({
    getFavorites: build.query({
      query: () => ({
        url: `track/favorite/all/`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${getTokenFromLocalStorage()}`,
        },
      }),
      providesTags: () => [TRACKS_TAG],
    }),
    deleteFavorite: build.mutation({
      query: ({ id }) => ({
        url: `track/${id}/favorite/`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${getTokenFromLocalStorage()}`,
        },
      }),
      invalidatesTags: [TRACKS_TAG],
    }),
    addFavorite: build.mutation({
      query: ({ id, body }) => ({
        url: `track/${id}/favorite/`,
        method: 'POST',
        body,
        headers: {
          Authorization: `Bearer ${getTokenFromLocalStorage()}`,
        },
      }),
      invalidatesTags: [TRACKS_TAG],
    }),
    getPlayList: build.query({
      query: () => ({
        url: `track/all/`,
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
