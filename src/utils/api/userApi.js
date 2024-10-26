import api from "./api";

const LoginApi = async ({ email, password }) => {
    try {
        return await api.post("/user/login", { email, password })
    } catch ({err}) {
        return Promise.reject(err);
    }
}

const createUserApi = async ({ name,email,password, password2}) => {
    try {
        if (password !== password2) return Promise.reject('비밀번호 두개가 서로 다릅니다');
        return await api.post("/user", { name, email, password })
    } catch ({err}) {
        return Promise.reject(err);
    }
}

const getUserApi = async () => {
    try {
        return await api.get('/user')
    } catch (error) {
        return error
    }
}

export { LoginApi, createUserApi, getUserApi };