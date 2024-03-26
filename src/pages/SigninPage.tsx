import { useState, FormEvent } from "react"
import { useNavigate } from "react-router-dom"
import styles from "./SigninPage.module.scss"
import { validation } from "utils/validation"
import InputBox from "components/common/InputBox"
import RegularButton from "components/common/RegularButton"
import { SigninForm } from "types/signinType"
import useAuth from "hooks/useAuth"

const SigninPage = () => {
    const navigate = useNavigate()
    const [ form, setForm ] = useState<SigninForm>({id: '', pw: ''})

    const { signinMutation } = useAuth(form.id)

    const moveToSignin = () => {
        navigate('/signup')
    }
    
    const handleSubmit = (e:FormEvent<HTMLFormElement> ) => {
        e.preventDefault()
        if(!form.id) return alert('아이디를 입력해주세요.')
        if(!form.pw) return alert('비밀번호를 입력해주세요.')
        signinMutation.mutate(form);
    }

    return (
        <form className={styles.signinForm} onSubmit={handleSubmit}>
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
                    />
            </section>
            <section className={styles.buttonSection}>
                <RegularButton 
                    onClick={moveToSignin}
                    type="button"
                    >
                    회원가입
                </RegularButton>
                <RegularButton 
                    type="submit">
                    로그인
                </RegularButton>
            </section>
        </form>
    )
}

export default SigninPage