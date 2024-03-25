import InputBox from 'components/common/InputBox'
import ProfileImg from 'components/common/ProfileImg'
import RegularButton from 'components/common/RegularButton'
import { FormEvent, useState } from 'react' 
import styles from './UserInfoPage.module.scss'
import { validation } from 'utils/validation'

const UserInfoPage = () => {

  const [form, setForm] = useState({id:'bcl0206@naver.com', name:'방충림', profileImg:'안녕.jpg', createdAt:'1234.12.12 11:22:33', modifiedAt:'1234.12.12 11:22:33'})

  const logout = () => {
    alert('로그아웃')
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert('수정 완료')
  }

  return (
    <form className={styles.userInfoForm} onSubmit={handleSubmit}>
      <ProfileImg inputValue={form.profileImg} setInputValue={setForm}/>
      <section className={styles.inputSection}>
        <InputBox
            inputValue={form}
            setInputValue={setForm}
            label='아이디 (수정 불가)' 
            name='id'
            disabled
        />
        <InputBox
            inputValue={form}
            setInputValue={setForm}
            label='이름' 
            name='name' 
            placeHolder='이름을 입력해주세요'
            rule={validation.name}
          />
          <InputBox
            inputValue={form}
            setInputValue={setForm}
            label='가입 일시 (수정 불가)' 
            name='createdAt'
            disabled
          />
          <InputBox
            inputValue={form}
            setInputValue={setForm}
            label='수정 일시 (수정 불가)' 
            name='modifiedAt'
            disabled
          />
        </section>
        <section className={styles.buttonSection}>
          <RegularButton
              onClick={logout}
              type="button">
              로그아웃
          </RegularButton>
          <RegularButton 
              type="submit">
              수정
          </RegularButton>
        </section>
    </form>
  )
}

export default UserInfoPage