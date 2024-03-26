import useSession from 'hooks/useSession'
import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

interface Props {
    children: ReactNode
}

const ProtectedRoute = ({children}: Props) => {
    const { checkSession } = useSession()

    if(checkSession()){
        return <>{children}</> 
    } else {
        alert('로그인이 필요한 서비스입니다.')
        return <Navigate to='/signin'/>
    }  
}

export default ProtectedRoute