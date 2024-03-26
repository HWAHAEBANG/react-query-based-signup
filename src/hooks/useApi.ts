import { SigninForm } from "types/signinType"
import useCookieStorage from "./useCookieStorage"
import { SignupForm } from "types/signupType"
import { UserInfoForm } from "types/userInfoType"

const useApi= (id:string) => { // 컨텍스트로 할까
    const { signin, signup, getUserInfo, modifyInfo, removeUserInfo } = useCookieStorage(id)

    const signinApi = async (form: SigninForm) => {
        const response = await signin(form)
        const result = await response.json()
        return result
    }

    const signupApi = async (form: SignupForm) => {
        const response = await signup(form)
        const result = await response.json()
        return result
    }

    const getUserInfoApi = async () => {
        const response = await getUserInfo()
        const result = await response.json()
        return result
    }

    const modifyInfoApi = async (form: UserInfoForm) => {
        const response = await modifyInfo(form)
        const result = await response.json()
        return result
    }

    const removeUserInfoApi = async (id: string) => {
        const response = await removeUserInfo(id)
        const result = await response.json()
        return result
    }

    return { signinApi, signupApi, getUserInfoApi, modifyInfoApi, removeUserInfoApi }

}

export default useApi