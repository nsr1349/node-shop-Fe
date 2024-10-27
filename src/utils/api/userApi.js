import api from "./api";

export const LoginApi = async ({ email, password }) => {
    try {
        return await api.post("/user/login", { email, password })
    } catch ({err}) {
        return Promise.reject(err);
    }
}

export const createUserApi = async ({ name,email,password, password2}) => {
    try {
        if (password !== password2) return Promise.reject('비밀번호 두개가 서로 다릅니다');
        return await api.post("/user", { name, email, password })
    } catch ({err}) {
        return Promise.reject(err);
    }
}

export const getUserApi = async () => {
    try {
        const { data } = await api.get('/user')
        return data
    } catch (error) {
        return error
    }
}