import { SessionContext } from 'contexts/SessionProvider'
import { useContext } from 'react'
import { useCookies } from 'react-cookie'
import { SigninForm } from 'types/signinType'
import { SignupForm } from 'types/signupType'
import { UserInfoForm } from 'types/userInfoType'
import currentTimeGenerator from 'utils/currentTimeGenerator'

const useSession = () => {
    const [ cookies, setCookie, removeCookie ] = useCookies(['sessionId'])
    const { setSession } = useContext(SessionContext)

    // 세션 생성
    const createSession = (id: string) => {
        setCookie('sessionId', id)
        setSession(true)
    }

    // 세션 확인
    const checkSession = () => {
        const storedInfo = cookies
        if(storedInfo['sessionId']) return storedInfo['sessionId']  
    }

    // 세션 제거
    const removeSession = () => {
        removeCookie('sessionId')
        setSession(false)
    }

    return { createSession, checkSession, removeSession }
}

export default useSession;