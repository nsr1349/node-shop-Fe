import axios from "axios";

const api = axios.create({
    baseURL: `${import.meta.env.VITE_APP_LOCAL_URL}/api`,
    headers: {
        "Content-Type": "application/json",
        authorization : "Bearer " + sessionStorage.getItem('token')
    },
});
/**
 * console.log all requests and responses
 */
api.interceptors.request.use(
    (request) => {
        return request;
    },
    function (error) {
        console.log("REQUEST ERROR", error);
    }
);

api.interceptors.response.use(
    (response) => {
        return response;
    },
    function (error) {
        error = error.response.data;
        console.log("RESPONSE ERROR", error);
        return Promise.reject(error);
    }
);

export default api;