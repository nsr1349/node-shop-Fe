import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { LoginApi, createUserApi, getUserApi } from '../api/userApi'
import { setToken } from '../fn/tokenManager';

export const useLogin = () => {
    const navigate = useNavigate()
    const queryClient = useQueryClient()

    const loginMutation = useMutation({
        mutationFn: LoginApi,
        onSuccess: ({data}) => {
            setToken(data.token)
            navigate('/')
            queryClient.setQueryData(['user'], { user: data.user })
            queryClient.invalidateQueries(['cart'])
        },
        onError: (error) => {
            console.error('Login error:', error);
        }
    });

    return loginMutation;
};

export const useSignUp = () => {
    const navigate = useNavigate()
    
    const signUpMutation = useMutation({
        mutationFn: createUserApi,
        onSuccess: () => {
            alert('가입 성공! 로그인페이지로 이동합니다')
            navigate('/login')
        },
        onError: (error) => {
            console.error('SignUp error:', error);
        }
    });

    return signUpMutation;
};

export const useGetUser = () => {
    const getUserQuery = useQuery({
        queryKey : ['user'],
        queryFn : getUserApi,
    })

    return getUserQuery;
};
