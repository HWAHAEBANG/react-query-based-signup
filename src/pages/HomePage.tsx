import { MainLogo } from "assets"
import { useNavigate } from "react-router-dom"
import styles from './HomePage.module.scss'
import { useContext } from "react"
import { SessionContext } from "contexts/SessionProvider"
import useViewportError from "hooks/useViewportError"

const HomePage = () => {
    const navigate = useNavigate()
    const { session } = useContext(SessionContext);

    const moveToSignin = () => {
        navigate('/signin')
    }

    // 에러를 종류별로 생성하고 실행하는 함수
// function generateAndThrowError(errorType: any) {
//   switch (errorType) {
//     case 'TypeError':
//       throw new TypeError('This is a TypeError.');
//     case 'ReferenceError':
//       throw new ReferenceError('This is a ReferenceError.');
//     case 'RangeError':
//       throw new RangeError('This is a RangeError.');
//     case 'SyntaxError':
//       throw new SyntaxError('This is a SyntaxError.');
//     case 'CustomError':
//       throw new Error('This is a custom error.');
//     default:
//       throw new Error('Unknown error type.');
//   }
// }
//   generateAndThrowError('TypeError');
//     generateAndThrowError('ReferenceError');
    //   generateAndThrowError('RangeError');
    //    generateAndThrowError('SyntaxError');
        //  generateAndThrowError('CustomError');
// 다양한 종류의 에러 실행

  return (
    <main>
        <section className={styles.logoSection}>
            <MainLogo/>
        </section>
        <section className={styles.textSection}>
            <p>한터 글로벌에 오신 것을 환영합니다.</p>
            {!session&& <button onClick={moveToSignin}>지금 바로 로그인</button>}
        </section>
    </main>
  )
}

export default HomePage