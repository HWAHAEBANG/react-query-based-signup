import { SignupForm } from "types/signupType";
import { validation } from "./validation"

export const vaidationChecker = (form: SignupForm) => {
    
    const keys = Object.keys(validation)

    const result = keys.map((item)=>{
        return validation[item].every(i => i.validator(form))
        })

    return result.every(item => item === true)
}