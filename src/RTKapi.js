import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const getTokenFromLocalStorage = () =>  JSON.parse(localStorage.getItem('accessToken'));

export const RTKApi = createApi({
    reducerPath: 'RTKApi',
    tagTypes: ['Favorits'],
    baseQuery: fetchBaseQuery({baseUrl: 'https://painassasin.online/catalog/'}),
    endpoints: (build) => ({
        getFavorites: build.query({
            query: () =>({ 
              url:`track/favorite/all/`,
              method:'GET',
              headers:{
                Authorization:`Bearer ${getTokenFromLocalStorage()}`
              }
        })
        }),
        getPlayList: build.query({
            query: () =>({ 
          url:`track/all/`,
              method:'GET',
                          }
        )
        }),
        // addTrackProduct: build.mutation({
        //     query: (body) => ({
        //         url: 'goods',
        //         method: 'POST',
        //         body,
        //     }),
        // //     invalidatesTags: [{type: 'Products', id: 'LIST'}]
        // }),
        // deleteTrck: build.mutation({
        //     query: (id) => ({
        //         url: `goods/${id}`,
        //         method: 'DELETE',
        //     }),
        //     // invalidatesTags: [{type: 'Products', id: 'LIST'}]
        // })
    })
})

export const {useGetFavoritesQuery,useGetPlayListQuery} = RTKApi;