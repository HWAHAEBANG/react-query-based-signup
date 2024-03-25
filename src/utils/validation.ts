export const validation = {
    id : [
        {
            description: '이메일 형식 준수',
            validationMessage: '이메일 형식으로 입력해주세요.',
            validator(inputValue:any){
                return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(inputValue.id)
            }
        },
    ],
    pw : [
        {
            description: '13자 이하',
            validationMessage: '13자를 초과하였습니다.',
            validator(inputValue:any){
                return /^.{1,13}$/.test(inputValue.pw)
            },
        },
        {
            description: '소문자 포함',
            validationMessage: '영어 소문자를 반드시 1개 이상 포함해주세요.',
            validator(inputValue:any){
                return /[a-z]/.test(inputValue.pw)
            },
        },
        {   
            description: '대문자 포함',
            validationMessage:'영어 대문자를 반드시 1개 이상 포함해주세요.',
            validator(inputValue:any){
                return /[A-Z]/.test(inputValue.pw)
            },
        },
        {
            description: '숫자 포함',
            validationMessage: '숫자를 반드시 1개 이상 포함해주세요.',
            validator(inputValue:any){
                return /\d/.test(inputValue.pw)
            },
        },
        {
            description: '특수 문자 포함',
            validationMessage: '특수 문자를 각각 1개 이상 포함해주세요.',
            validator(inputValue:any){
                return /[^a-zA-Z0-9\s]/.test(inputValue.pw)
            },
        },
        {
            description: '연속된 숫자 3개 이상 금지',
            validationMessage: '',
            validator(inputValue:any){
                let answer = true
                const arr:string[] = inputValue.pw.split('')
                arr.forEach((val, idx) => {
                    if(!isNaN(Number(val))){
                        if(Number(val)-1 === Number(arr[idx-1]) && Number(val)-2 === Number(arr[idx-2])){
                            return answer = false
                        } else {
                            return answer = true
                        }
                    }
                })
                return answer
            },
        },
        {
            description: '공백 사용 금지',
            validationMessage: '공백은 사용 불가능합니다.',
            validator(inputValue:any){
                return !/\s/.test(inputValue.pw)
            },
        },
    ],
        pwCheck : [
        {
            description: '비밀번호와 일치 여부',
            validationMessage: '비밀번호와 일치하지 않습니다.',
            validator(inputValue:any){
                return inputValue.pw === inputValue.pwCheck
            },
        },
    ],
        name : [
        {
            description: '5자 이하',
            validationMessage: '5자를 초과하였습니다.',
            validator(inputValue:any){
                return /^.{1,5}$/.test(inputValue.name)
            },
        },
    ]
}