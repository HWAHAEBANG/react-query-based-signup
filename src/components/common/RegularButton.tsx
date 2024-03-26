import { ReactNode } from 'react'
import styles from './RegularButton.module.scss'

interface Props {
    children: ReactNode
    onClick?: () => void
    type?: "submit" | "reset" | "button" | undefined
    disabled?: boolean
}

const RegularButton = ({children, onClick, type = 'button', disabled = false} : Props) => {
  return (
    <button 
        className={disabled? `${styles.disabledButton}` : `${styles.button}`}
        onClick={onClick}
        type={type}
        disabled={disabled}
        >
        {children}
    </button>
  )
}

export default RegularButton