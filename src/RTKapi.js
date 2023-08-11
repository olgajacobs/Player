import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const getTokenFromLocalStorage = () =>  JSON.parse(localStorage.getItem('accessToken'));

export const RTKApi = createApi({
    reducerPath: 'RTKApi',
    tagTypes: ['Favorits'],
    baseQuery: fetchBaseQuery({baseUrl: 'https://painassasin.online/catalog/track/'}),
    endpoints: (build) => ({
        getTracks: build.query({
            query: () =>({ 
              url:`favorite/all/`,
              method:'GET',
              headers:{
                Authorization:`Bearer ${getTokenFromLocalStorage()}`
              }
        })
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

export const {useGetTracksQuery} = RTKApi;