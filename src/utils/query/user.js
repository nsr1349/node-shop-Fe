import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { LoginApi,createUserApi } from '../api/userApi'
import api from '../api/api'

export const useLogin = () => {
    const navigate = useNavigate()
    
    const loginMutation = useMutation({
        mutationFn: LoginApi,
        onSuccess: ({data}) => {
            const { token } = data
            
            sessionStorage.setItem("token", token )
            api.defaults.headers["authorization"] = "Bearer " + token

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