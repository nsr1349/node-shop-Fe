import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { LoginApi,createUserApi } from '../api/userApi'
import { setToken } from '../fn/tokenManager';

export const useLogin = () => {
    const navigate = useNavigate()
    
    const loginMutation = useMutation({
        mutationFn: LoginApi,
        onSuccess: ({data}) => {
            setToken(data.token)
            navigate('/')
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
        onSuccess: ({data}) => {
            console.log(data)
            alert('가입 성공! 로그인페이지로 이동합니다')
            navigate('/login')
        },
        onError: (error) => {
            console.error('Login error:', error);
        }
    });

    return signUpMutation;
};