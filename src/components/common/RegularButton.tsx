import { ReactNode } from 'react'
import styles from './RegularButton.module.scss'

interface Props {
    children: ReactNode
    onClick?: () => void
    type?: "submit" | "reset" | "button" | undefined
}

const RegularButton = ({children, onClick, type = 'button'} : Props) => {
  return (
    <button 
        className={styles.button}
        onClick={onClick}
        type={type}>
        {children}
    </button>
  )
}

export default RegularButton