import { useState, ChangeEvent } from 'react'
import styles from './InputBox.module.scss'
import { IoMdWarning, IoMdCheckmarkCircle, IoMdInformationCircle } from "react-icons/io";
import { Rule } from 'types/validationType';

interface Props<T> {
    inputValue: T
    setInputValue: React.Dispatch<React.SetStateAction<T>>
    label: string
    name: string
    placeHolder?: string
    disabled?: boolean
    rule?: Rule<T>[]
}

const InputBox = <T,>({ inputValue, setInputValue, name, label, placeHolder, disabled, rule }: Props<T>) => {
    
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
    
    const classNameDecider = () => {
        if(disabled) return `${styles.label} ${styles.block}`
        if(rule && (inputValue as Record<string, string>)[name] && !validation){
            return `${styles.label} ${styles.warning}`
        } else {
            return `${styles.label}`
        }
    }

    return (
    <div className={styles.wrapper}>
        <label className={classNameDecider()} htmlFor={name}>
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
            disabled={disabled}
            onFocus={handleFocus}
            onBlur={handleFocus}
            />
        { rule && <p className={styles.helperText}>{ !(inputValue as Record<string, string>)[name] || getValidationMessage()} </p>}
        
    </div>
  )
}

export default InputBox