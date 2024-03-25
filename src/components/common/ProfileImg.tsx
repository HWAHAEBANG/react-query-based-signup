import styles from './ProfileImg.module.scss'
import defaultAvatar from 'assets/defaultAvatar.png'


interface Props<T> {
    inputValue: string
    setInputValue: React.Dispatch<React.SetStateAction<T>>
}


const ProfileImg = <T,>({inputValue, setInputValue}:Props<T>) => {
    const saveImg = (e:any) => {
        const file = e.target.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            console.log(typeof reader.result, reader.result);
            setInputValue((prev) => ({...prev, profileImg: `${reader.result}`}))
        }
    }

    return (
            <section className={styles.section}>
                <div className={styles.imgWrapper}>
                    <img 
                        src={inputValue || defaultAvatar}
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