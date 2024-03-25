import { useState, ChangeEvent } from 'react'
import styles from './InputBox.module.scss'
import { IoMdWarning, IoMdCheckmarkCircle, IoMdInformationCircle } from "react-icons/io";

interface Props<T> {
    inputValue: T
    setInputValue: React.Dispatch<React.SetStateAction<T>>
    label: string
    name: string
    placeHolder: string
    rule?: Rule<T>[]
}

export interface Rule<T> {
    description: string
    validationMessage: string
    validator: (inputValue: T) => boolean
}

const InputBox = <T,>({ inputValue, setInputValue, name, label, placeHolder, rule }: Props<T>) => {
    
    const [visible, setVisible] = useState(false)

    const handleFocus = () => setVisible((prev)=>!prev)

    const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setInputValue((prevState) => ({ ...prevState, [name]: value }))
}

    const typeDicider = (name: string) => {
        switch (name){
            case 'id':
                return 'email'
            case 'pw':
                return 'password'
            case 'pwCheck':
                return 'password'
            default:
                return 'text'
        }
    } 

    const validation = rule?.every(item => item.validator(inputValue) === true)

    const getValidationMessage = () => {
        if(!rule) return
        const idx = rule.findIndex(item => item.validator(inputValue) === false)
        return idx === -1 ? false : rule[idx].validationMessage
    }

    return (
    <div className={styles.wrapper}>
        <label className={rule && (inputValue as Record<string, string>)[name] && !validation ? `${styles.label} ${styles.warning}` : `${styles.label}`} htmlFor={name}>
            <span>{label}</span>
        {rule && 
            <div>
            <IoMdInformationCircle />
            {visible && 
                <div className={styles.ruleBox}>
                {rule.map((item,idx) => (
                    <div key={idx}>
                        <span>{item.validator(inputValue)?<IoMdCheckmarkCircle color='green'/>:<IoMdWarning color='orange'/> }</span>
                        &nbsp;
                        <span>{item.description}</span>
                    </div>
                ))}
            </div>
            }
            </div>
        }
        </label>
        <input
            className={styles.input}
            type={typeDicider(name)}
            name={name}
            value={(inputValue as Record<string, string>)[name]}
            onChange={handleInputValue}
            id={name}
            placeholder={placeHolder}
            onFocus={handleFocus}
            onBlur={handleFocus}
            />
        { rule && <p className={styles.helperText}>{ !(inputValue as Record<string, string>)[name] || getValidationMessage()} </p>}
        
    </div>
  )
}

export default InputBox