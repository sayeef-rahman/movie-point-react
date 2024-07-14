import React, { useContext } from 'react'

export const useAuth = () => {
    const auth = useContext(AuthContext)
    return auth
}
