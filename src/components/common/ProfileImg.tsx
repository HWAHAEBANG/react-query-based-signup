import styles from './ProfileImg.module.scss'
import defaultAvatar from 'assets/defaultAvatar.png'
import { ChangeEvent, useState } from 'react'


interface Props<T> {
    inputValue: string
    setInputValue: React.Dispatch<React.SetStateAction<T>>
}


const ProfileImg = <T,>({inputValue, setInputValue}:Props<T>) => {
    const [tempPreview, setTempPreview] = useState('');

    const saveImg = (e:ChangeEvent<HTMLInputElement>) => {
        const file = e?.target?.files?.[0] 
        const reader = new FileReader()
        reader.readAsDataURL(file as File)
        reader.onloadend = () => {
            setTempPreview(`${reader.result}`) // 임시로 미리보기 보이도록 구현. 
            setInputValue((prev) => ({...prev, profileImg: file?.name})) // 실제 쿠키에는 파일명만 저장 (사유: 용량제한, 과제 조건)
        }
    }

    return (
            <section className={styles.section}>
                <div className={styles.imgWrapper}>
                    <img 
                        src={tempPreview || defaultAvatar}
                        alt="프로필 이미지" />
                </div>
                <div className={styles.uploadWrapper}>
                    <label htmlFor="profileImg">이미지 업로드</label>
                    <input 
                        type="file"
                        accept='image/*'
                        id="profileImg"
                        name="profileImg"
                        onChange={saveImg}
                        hidden
                        />
                    <input
                        type="text"
                        id="profileImg"
                        value={inputValue}
                        placeholder='(선택 사항) 선택된 이미지가 없습니다.'
                        readOnly
                        disabled
                    />
                </div>
            </section>   
    )
}

export default ProfileImg