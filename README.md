```
안녕하십니까. 한터 글로벌 지원자 방충림입니다. 코딩테스트 전형에 참여할 수 있는 기회 주심에 감사드립니다.
과제는 요구사항 및 우수한 사용자 경험, 재사용성에 중점을 두고 작성하였습니다.
```
<br>

# 1. 실행 방법
   
## 1.1. 배포 환경 : 
## 1.2. 개발 환경 : npm
```
// 로컬 클라이언트 실행 방법

$ git clone https://github.com/HWAHAEBANG/react-query-based-signup.git
$ npm install
$ npm start
```
<br/>

# 2. 프로젝트 구성

## 2.1. 페이지 라우팅 경로
| NO | PAGE NAME | PATH |
| --- | --- | --- |
| 1 | 홈 | / |
| 2 | 회원가입   | /signup |
| 3 | 로그인 | /signin |
| 4 | 회원정보 조회 | /user-info |

<br/>

## 2.2. 디렉터리 구조
```
📦src
 ┣ 📂assets // 이미지 및 정적 파일
 ┃ ┣ 📜defaultAvatar.png
 ┃ ┣ 📜index.ts
 ┃ ┣ 📜logo.png
 ┃ ┗ 📜main_logo.svg
 ┣ 📂components // 컴포넌트
 ┃ ┗ 📂common // 공통적으로 사용되는 컴포넌트
 ┃ ┃ ┣ 📜Header.module.scss
 ┃ ┃ ┣ 📜Header.tsx
 ┃ ┃ ┣ 📜InputBox.module.scss 
 ┃ ┃ ┣ 📜InputBox.tsx // 재사용 가능 input 컴포넌트
 ┃ ┃ ┣ 📜ProfileImg.module.scss
 ┃ ┃ ┣ 📜ProfileImg.tsx // 재사용 가능 프로필 이미지 업로더
 ┃ ┃ ┣ 📜RegularButton.module.scss
 ┃ ┃ ┗ 📜RegularButton.tsx // 재사용 가능 button 컴포넌트
 ┣ 📂contexts // 컨텍스트
 ┃ ┗ 📜SessionProvider.tsx // 세션 상태 주입을 위한 컨텍스트
 ┣ 📂hooks // 커스텀 훅
 ┃ ┣ 📜useApi.ts // api역할 커스텀 훅
 ┃ ┣ 📜useAuth.ts // react-query 로직을 모듈화한 커스텀 북
 ┃ ┣ 📜useCookieStorage.ts // 쿠키 접근용 커스텀 훅 (서버 역할, 프로미스 반환)
 ┃ ┣ 📜useSession.ts // 현재 로그인 중인 세션 관리 커스텀 훅
 ┃ ┗ 📜useViewportError.ts // 해상도 에러 감지용 커스텀 훅
 ┣ 📂pages // 페이지 별 컴포넌트
 ┃ ┣ 📜ErrorPage.module.scss 
 ┃ ┣ 📜ErrorPage.tsx // 에러 페이지
 ┃ ┣ 📜HomePage.module.scss 
 ┃ ┣ 📜HomePage.tsx // 홈페이지
 ┃ ┣ 📜SigninPage.module.scss 
 ┃ ┣ 📜SigninPage.tsx // 로그인 페이지
 ┃ ┣ 📜SignupPage.module.scss 
 ┃ ┣ 📜SignupPage.tsx // 회원 가입 페이지
 ┃ ┣ 📜UserInfoPage.module.scss
 ┃ ┗ 📜UserInfoPage.tsx // 회원 정보 조회 페이지
 ┣ 📂routes // 라우팅
 ┃ ┣ 📜ProtectedRoute.tsx // 비로그인 사용자의 접근 제한(회원 정보 조회 페이지)
 ┃ ┣ 📜PublicRoute.tsx // 로그인 사용자의 접근 제한(로그인, 회원가입 페이지)
 ┃ ┗ 📜Router.tsx
 ┣ 📂styles // 전역 스타일
 ┃ ┗ 📜_variables.scss
 ┣ 📂types // 타입 모듈화
 ┃ ┣ 📜signinType.ts
 ┃ ┣ 📜signupType.ts
 ┃ ┣ 📜userInfoType.ts
 ┃ ┗ 📜validationType.ts
 ┣ 📂utils // 유틸 함수
 ┃ ┣ 📜currentTimeGenerator.ts // 현재시간을 포맷팅하여 만환하는 유틸 함수
 ┃ ┗ 📜validation.ts // 유효성 검사를 담당하는 유틸 함수
 ┣ 📜App.module.scss
 ┣ 📜App.test.tsx
 ┣ 📜App.tsx
 ┣ 📜index.scss
 ┗  📜index.tsx
```

<br/>

## 2.3. 주요 종속성

```
    "react-cookie": "^7.1.0",
    "react-icons": "^5.0.1",
    "react-router-dom": "^6.22.3",
    "sass": "^1.72.0",
    "typescript": "^4.9.5",
```
<br/>



<br/>
<br/>

# 3. 핵심 로직
## 3.1. 리액트 쿼리를 사용한 데이터 계층 및 플로우

<br/>

## 3.2. 쿠키 기반 회원 가입 및 로그인 로직
쿠키 스토리지를 활용해 회원가입과 로그인을 구현하기 위해서는 두 가지 종류의 쿠키가 필요할 것으로 판단했습니다.
### 1. 회원 정보를 저장한 쿠키 (DB역할)
  - 요구사항에 명시된 대로 회원의 정보를 쿠키의 저장합니다.
  - 쿠키는 곧 DB역할을 하는 것이므로 요청을 반환할 때 new Response객체로 변환한 후 Promise 정적메서드인 resolve, retect 등을 통해 상황에 맞는 형태로 응답하도록 합니다.
    ```js
    // useCookieSstorage.ts 중 일부
      
     // 로그인
      const signin = (receivedInfo: SigninForm) => {
          const storedInfo = cookies
          if(!storedInfo[id]){ // 존재하지 않는 아이디
              return Promise.reject(new Response(JSON.stringify(null), { status: 401, statusText: "There is no ID like that"}))
          } else if (storedInfo[id].pw !== receivedInfo.pw) { // 일치하지 않는 비밀번호
              return Promise.reject(new Response(JSON.stringify(null), { status: 401, statusText: "Wrong password"}))
          } else { // 로그인 성공
              return Promise.resolve(new Response(JSON.stringify(null), { status: 200, statusText: "signin success" }))
          }
      }
    ```
  - 전달받은 훅은 React-query의 useQuery 또는 useMutaion을 거쳐 브라우저로 최종 제공됩니다.
    ```js
    // useAuth.ts 중 일부
      
     // 로그인
    const signinMutation = useMutation({
          mutationFn: signinApi,
          onSuccess: (data) => {
              createSession(id)
              alert('로그인 성공')
              navigate('/user-info')
          },
          onError: (err) => {
              alert('아이디 또는 비밀번호가 틀렸습니다.')
          }
      })
    ```
 
### 2. 현재 로그인 중인 사용자의 세션(SID)을 저장한 쿠키 (세션스토리지 - 쿠키 모델 역할)
  - 로그인을 실시하면 회원정보 쿠키를 조회해 일치 여부를 판단하고, 일치 시 세션 쿠키를 추가로 생성합니다.
  - 세션에 관련한 정보를 SessionContext를 통해서 넓은 범위에서 자유롭게 사용할 수 있도록합니다.
  - 세션 정보에 따라 조건부 렌더링 및 protectedRouter를 구현합니다.
    ```js
    // SessionProvider.tsx 중 일부
    
    export const SessionProvider = ({children}: Props) => {
        const { checkSession, removeSession } = useSession();
        const [session, setSession] = useState<boolean>(checkSession())
        const navigate = useNavigate()
    
    
        const logout = () => {
            if(window.confirm('정말 로그아웃 하시겠습니까?')){
                removeSession()
                setSession(false)
                navigate('/signin')
            }
        }
    
        return(
            <SessionContext.Provider value={{session, setSession, logout}}>
                {children}
            </SessionContext.Provider>
        )
    }
    ```

<br/>

## 3.3. 실시간 유효성 검사

<br/>

## 3.4. Protected Route 기반 페이지 접근 제한
  - Client side rendering을 수행하는 React의 특성상 페이지 이동간에 권한을 별도로 확인해주기때문에 Protected Route를 도입했습니다.
    - ProtectedRoute.tsx // 비로그인 사용자의 접근 제한(회원 정보 조회 페이지)
    - PublicRoute.tsx // 로그인 사용자의 접근 제한(로그인, 회원가입 페이지)

      ```js
          // ProtectedRoute.tsx 중 일부
          const ProtectedRoute = ({children}: Props) => {
              const { checkSession } = useSession()
          
              if(checkSession()){
                  return <>{children}</> 
              } else {
                  alert('로그인이 필요한 서비스입니다.')
                  return <Navigate to='/signin'/>
              }  
          }
          export default ProtectedRoute
      ```
<br/>

## 3.5 컴포넌트 재사용성,확장성 및 유지보수성

<br/>

## 3.6 에러 핸들링

<br/>





  <br/>
  <br/>
