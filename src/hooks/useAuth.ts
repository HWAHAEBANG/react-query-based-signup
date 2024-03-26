import { useMutation, useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import useSession from './useSession'
import useApi from './useApi'

const useAuth = (id:string) => {
    const { signinApi, signupApi, getUserInfoApi, modifyInfoApi, removeUserInfoApi } = useApi(id)
    const { createSession } = useSession()
    const navigate = useNavigate();


    const signinMutation = useMutation({
        mutationFn: signinApi,
        onSuccess: (data) => {
            createSession(id)
            alert('로그인 성공')
            navigate('/user-info')
        },
        onError: (err) => {
            alert('아이디 또는 비밀번호가 틀렸습니다.')
        }
    })


    const signupMutation = useMutation({
        mutationFn: signupApi,
        onSuccess: (data) => {
            alert('회원 가입 성공')
            navigate('/signin')
        },
        onError: (err) => {
            alert('일시적인 오류가 발생하였습니다. 다시 시도 바랍니다.')
        }
    })


    const getUserInfoQuery = useQuery({
        queryFn: getUserInfoApi,
        queryKey: ['userInfo'],
        staleTime: 1 * 60 * 1000,
        gcTime: 5 * 60 * 1000,
        retry: 3,
        refetchOnWindowFocus: true,
    })


    const modifyInfoMutation = useMutation({
        mutationFn: modifyInfoApi,
        onSuccess: (data) => {
            alert('수정이 완료되었습니다.')
        },
        onError: (err) => {
            alert('일시적인 오류가 발생하였습니다. 다시 시도 바랍니다.')
        }
    })

        const removeUserInfoMutation = useMutation({
        mutationFn: removeUserInfoApi,
        onSuccess: (data) => {
            alert('탈퇴 처리되었습니다. 이용해주셔서 감사합니다.')
        },
        onError: (err) => {
            alert('일시적인 오류가 발생하였습니다. 다시 시도 바랍니다.')
        }
    })

    return { signinMutation, signupMutation, getUserInfoQuery, modifyInfoMutation, removeUserInfoMutation }
}

export default useAuth;