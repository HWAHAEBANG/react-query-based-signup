import { useState, FormEvent, useRef } from "react"
import { useNavigate } from "react-router-dom"
import styles from "./SignupPage.module.scss"
import ProfileImg from "components/common/ProfileImg"
import { validation } from "utils/validation"
import InputBox from "components/common/InputBox"
import RegularButton from "components/common/RegularButton"
import { SignupForm } from "types/signupType"
import useAuth from "hooks/useAuth"
import { vaidationChecker } from "utils/validationChecker"

const SignupPage = () => {
    const navigate = useNavigate()
    const [ form, setForm ] = useState<SignupForm>({id: '', pw: '', pwCheck:'', name:'', profileImg:''})
    const { signupMutation } = useAuth(form.id)
    const attemptCount = useRef(0)

   if(attemptCount.current >= 2) throw new Error('API 호출 제한을 초과했습니다.')
   
    const moveToSignin = () => {
        navigate('/signup')
    }

    const everyValidation = vaidationChecker(form)

    const handleSubmit = (e:FormEvent<HTMLFormElement> ) => {
        e.preventDefault()
        if(!everyValidation){
            alert('입력값 형식을 준수해주세요. 3번 실패 시 에러 발생')
            return attemptCount.current += 1
        }
        signupMutation.mutate(form)
    }


    return (
        <form className={styles.signupForm} onSubmit={handleSubmit}>
            <ProfileImg inputValue={form.profileImg} setInputValue={setForm}/>
            <section className={styles.inputSection}>
                <InputBox
                    inputValue={form}
                    setInputValue={setForm}
                    label='아이디' 
                    name='id' 
                    placeHolder='ID를 입력해주세요'
                    rule={validation.id}
                    />
                <InputBox
                    inputValue={form} 
                    setInputValue={setForm}
                    label='비밀번호' 
                    name='pw' 
                    placeHolder='PW를 입력해주세요'
                    rule={validation.pw}
                    />
                <InputBox 
                    inputValue={form} 
                    setInputValue={setForm}
                    label='비밀번호 확인' 
                    name='pwCheck' 
                    placeHolder='PW를 다시 입력해주세요'
                    rule={validation.pwCheck}
                    />
                <InputBox 
                    inputValue={form} 
                    setInputValue={setForm}
                    label='이름' 
                    name='name' 
                    placeHolder='이름을 입력해주세요'
                    rule={validation.name}
                    />
            </section>
            <section className={styles.buttonSection}>
                <RegularButton
                    onClick={moveToSignin}
                    type="submit"
                    // disabled={!everyValidation}
                >
                    회원가입
                </RegularButton>
            </section>
        </form>
    )
}

export default SignupPage