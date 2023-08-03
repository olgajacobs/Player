import React, { useContext } from 'react'

export const UserInContext = React.createContext({
  user: {},
  setUser: () => {},
})

export const readUserFromContext = () => {
  const user = useContext(UserInContext)
  return user
}
export const changeUserInContext = (newUser) => {
  const user = useContext(UserInContext)
  console.log(user)
  user.setUser(newUser)
}
