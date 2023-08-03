import React from 'react'

export const UserInContext = React.createContext({
  user: {},
  setUser: () => {},
})

export const IsLoading = React.createContext({
  isLoading: true,
  setIsLoading: () => {},
})
