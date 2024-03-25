export interface Rule<T> {
    description: string
    validationMessage: string
    validator: (inputValue: T) => boolean
}