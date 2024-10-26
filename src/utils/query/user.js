import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { LoginApi } from '../api/userApi'
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
    });

    return loginMutation;
};