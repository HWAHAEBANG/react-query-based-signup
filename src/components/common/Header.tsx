import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate();

    const moveToSignin = () => {
        navigate('/signin')
    }

    const logout = () => {
         alert('로그아웃')
    }

  return (
    <header>
        <section>로고영역</section>
        <nav>
            <ul>
                <li>
                    <Link to='/user-info'>회원정보 조회</Link>
                </li>
            </ul>
        </nav>
        {true? <button onClick={logout}>로그아웃</button> : <button onClick={moveToSignin}>로그인</button>}
    </header>
  )
}

export default Header