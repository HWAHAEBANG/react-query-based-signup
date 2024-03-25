import { Link, useNavigate } from 'react-router-dom'
import styles from './Header.module.scss'
import logo from 'assets/logo.png'

const Header = () => {
    const navigate = useNavigate();

    const moveToHome = () => {
        navigate('/')
    }

    const moveToSignin = () => {
        navigate('/signin')
    }

    const logout = () => {
         alert('로그아웃')
    }

  return (
    <header className={styles.header}>
        <section>
            <img src={logo} alt="" onClick={moveToHome}/>
        </section>
        <nav>
            <ul>
                <li>
                    <Link to='/user-info'>회원 정보 조회</Link>
                </li>
            </ul>
        </nav>
        {true? <button onClick={logout}>로그아웃</button> : <button onClick={moveToSignin}>로그인</button>}
    </header>
  )
}

export default Header