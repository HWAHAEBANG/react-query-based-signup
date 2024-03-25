import { MainLogo } from "assets"
import { useNavigate } from "react-router-dom"
import styles from './HomePage.module.scss'

const HomePage = () => {
    const navigate = useNavigate()

    const moveToSignin = () => {
        navigate('/signin')
    }

  return (
    <main>
        <section className={styles.logoSection}>
            <MainLogo/>
        </section>
        <section className={styles.textSection}>
            <p>한터 글로벌에 오신 것을 환영합니다.</p>
            <button onClick={moveToSignin}>지금 바로 로그인</button>
        </section>
    </main>
  )
}

export default HomePage