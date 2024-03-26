import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './ErrorPage.module.scss'

const ErrorPage = () => {
  const navigator = useNavigate()
  const [ viewPortError, setViewPortError ] = useState<boolean>() 

  
  useEffect(() => {
    const handleViewportChange = () => {
      const viewportWidth = window.innerWidth;
      
            if (viewportWidth > 770) {
                setViewPortError(true)
            } else {
                setViewPortError(false) 
            }
        };
        window.addEventListener('resize', handleViewportChange);


        return () => {
            window.removeEventListener('resize', handleViewportChange);
        };
    }, []); 

  return (
    <main className={styles.main}>
      {viewPortError && (
        <div>
           <p>지원하지 않는 해상도입니다.</p>
           <p>창의 크기를 770px 미만으로 줄여주세요.</p>
        </div>
      )}

      <p>에러가 발생하였습니다. 다시 시도해주세요<div className=""></div></p>
    </main>
  )
}

export default ErrorPage