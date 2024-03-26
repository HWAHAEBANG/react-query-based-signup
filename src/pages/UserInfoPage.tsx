import { useContext, useEffect, useLayoutEffect } from 'react'
import InputBox from 'components/common/InputBox'
import ProfileImg from 'components/common/ProfileImg'
import RegularButton from 'components/common/RegularButton'
import { FormEvent, useState } from 'react' 
import styles from './UserInfoPage.module.scss'
import { validation } from 'utils/validation'
import { UserInfoForm } from 'types/userInfoType'
import useAuth from 'hooks/useAuth'
import { SessionContext } from 'contexts/SessionProvider'
import useSession from 'hooks/useSession'


const UserInfoPage = () => {
  const [form, setForm] = useState<UserInfoForm>({id:'', name:'', profileImg:'', createdAt:'', modifiedAt:''})
  const { checkSession } = useSession()
  const { getUserInfoQuery, modifyInfoMutation } = useAuth(checkSession())
  const { logout } = useContext(SessionContext)

  const {data, isLoading, error, refetch}= getUserInfoQuery

  useEffect(()=>{
    setForm({...data})
    refetch()
  },[setForm, data, refetch])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    modifyInfoMutation.mutate(form)
  }

  if(isLoading) return <p>로딩중</p>
  if(error) return <p>에러발생</p>

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