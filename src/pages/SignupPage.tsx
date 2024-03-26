import { useState, FormEvent } from "react"
import { useNavigate } from "react-router-dom"
import styles from "./SignupPage.module.scss"
import ProfileImg from "components/common/ProfileImg"
import { validation } from "utils/validation"
import InputBox from "components/common/InputBox"
import RegularButton from "components/common/RegularButton"
import { SignupForm } from "types/signupType"
import useAuth from "hooks/useAuth"

const SignupPage = () => {
    const navigate = useNavigate()
    const [ form, setForm ] = useState<SignupForm>({id: '', pw: '', pwCheck:'', name:'', profileImg:''})
    const { signupMutation } = useAuth(form.id)

    const moveToSignin = () => {
        navigate('/signup')
    }

    const {id, pw, pwCheck, name} = form
    const allNotEmpty = Object.values({id, pw, pwCheck, name}).some(value => value === '');

    const handleSubmit = (e:FormEvent<HTMLFormElement> ) => {
        e.preventDefault()
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
                    disabled={allNotEmpty}
                >
                    회원가입
                </RegularButton>
            </section>
        </form>
    )
}

export default SignupPage