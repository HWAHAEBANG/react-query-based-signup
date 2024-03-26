import useSession from 'hooks/useSession'
import { useState, createContext, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserInfoForm } from 'types/userInfoType'

export const SessionContext = createContext({
    session: false, 
    setSession: (value : boolean) => {}, 
    logout: () =>{}
})

interface Props {
    children: ReactNode
}

export const SessionProvider = ({children}: Props) => {
    const { checkSession, removeSession } = useSession();
    const [session, setSession] = useState<boolean>(checkSession())
    const navigate = useNavigate()


    const logout = () => {
        if(window.confirm('정말 로그아웃 하시겠습니까?')){
            removeSession()
            setSession(false)
            navigate('/signin')
        }
    }

    return(
        <SessionContext.Provider value={{session, setSession, logout}}>
            {children}
        </SessionContext.Provider>
    )
}