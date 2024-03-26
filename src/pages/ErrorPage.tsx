import { useEffect, useState } from "react";
import styles from './ErrorPage.module.scss'
import RegularButton from "components/common/RegularButton";

interface Props {
  resetErrorBoundary: (...args: any[]) => void
}

const ErrorPage = ({ resetErrorBoundary } : Props) => {
  const [ viewPortError, setViewPortError ] = useState<boolean>(false) 

 useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 770 && !viewPortError) {
        setViewPortError(true);
      } else if (window.innerWidth < 770 && viewPortError) {
        setViewPortError(false);
        resetErrorBoundary()
      }
    };

    window.addEventListener('resize', handleResize);

    // 초기화 및 정리
    handleResize(); // 초기 크기에 따라서 초기 에러 상태 설정
    return () => window.removeEventListener('resize', handleResize);
  }, [viewPortError]);







  // const viewportWidth = window.innerWidth;
  
  // useEffect(() => {
  //   const handleViewportChange = () => {
      
  //           if (viewportWidth > 770) {
  //               setViewPortError(true)
  //           } else {
  //               setViewPortError(false)
  //               resetErrorBoundary()
  //           }
  //       };
  //       window.addEventListener('resize', handleViewportChange);


  //       return () => {
  //           window.removeEventListener('resize', handleViewportChange);
  //       };
  //   }, [viewportWidth]); 

  return (
    <main className={styles.main}>
      {viewPortError && (
        <div>
           <p>지원하지 않는 해상도입니다.</p>
           <p>창의 크기를 770px 미만으로 줄여주세요.</p>
        </div>
      )}

      <p>에러가 발생하였습니다. 다시 시도해주세요<div className=""></div></p>

      <RegularButton onClick={resetErrorBoundary}>다시 시도</RegularButton>
    </main>
  )
}

export default ErrorPage