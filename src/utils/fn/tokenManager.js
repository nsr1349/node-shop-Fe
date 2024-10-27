import api from "../api/api";

export const setToken = (token)=> {
    sessionStorage.setItem("token", token )
    api.defaults.headers["authorization"] = "Bearer " + token
}

export const deleteToken = ()=> {
    sessionStorage.removeItem('token')
    api.defaults.headers["authorization"] = "Bearer "
}