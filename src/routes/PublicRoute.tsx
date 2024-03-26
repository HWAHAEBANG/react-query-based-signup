import useSession from 'hooks/useSession'
import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

interface Props {
    children: ReactNode
}

const PublicRoute = ({children}: Props) => {
    const { checkSession } = useSession()

  return checkSession() ? <Navigate to='/'/> : <>{children}</> 
}

export default PublicRoute