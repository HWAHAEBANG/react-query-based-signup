import { useCookies } from 'react-cookie'
import { SigninForm } from 'types/signinType'
import { SignupForm } from 'types/signupType'
import { UserInfoForm } from 'types/userInfoType'
import currentTimeGenerator from 'utils/currentTimeGenerator'

const useCookieStorage = (id:string) => {
    const [ cookies, setCookie, removeCookie ] = useCookies([id])

    // 로그인
    const signin = (receivedInfo: SigninForm) => {
        const storedInfo = cookies
        if(!storedInfo[id]){ // 존재하지 않는 아이디
            return Promise.reject(new Response(null, { status: 401, statusText: "There is no ID like that"}))
        } else if (storedInfo[id].pw !== receivedInfo.pw) { // 일치하지 않는 비밀번호
            return Promise.reject(new Response(null, { status: 401, statusText: "Wrong password"}))
        } else { // 로그인 성공
            return Promise.resolve(new Response(JSON.stringify(null), { status: 200, statusText: "signin success" }))
        }
    }

    // 회원 가입
    const signup = (info: SignupForm) => {
        const currentTime = currentTimeGenerator()
        const result = {...info, createdAt: currentTime, modifiedAt: currentTime}
        setCookie(id, result)
        return Promise.resolve(new Response(JSON.stringify(null), { status: 201, statusText: "signup success"}))
    }

    // 회원 정보 조회
    const getUserInfo = () => {
        const storedInfo = cookies
        return Promise.resolve(new Response(JSON.stringify({...storedInfo[id]}), { status: 200, statusText: "modify success" }))
        // const {id:sid, name, profileImg, createdAt, modifiedAt} = storedInfo[id]
        // return Promise.resolve(new Response(JSON.stringify({id: sid, name, profileImg, createdAt, modifiedAt}), { status: 200, statusText: "modify success" }))
    }

    // 회원 정보 수정
    const modifyInfo = (info: UserInfoForm) => {
        const currentTime = currentTimeGenerator()
        const result = {...info, modifiedAt: currentTime}
        setCookie(id, result)
        return Promise.resolve(new Response(JSON.stringify(null), { status: 200, statusText: "modify success" }))
    }

    // 회원 탈퇴
    const removeUserInfo = (id:string) => {
        removeCookie(id)
        return Promise.resolve(new Response(JSON.stringify(null), { status: 200, statusText: "remove success" }))
    }

    return { signin, signup, getUserInfo, modifyInfo, removeUserInfo }
}

export default useCookieStorage;