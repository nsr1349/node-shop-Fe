import api from "./api";

export const addCartApi = async ({ productId , size, qty }) => {
    try {
        return await api.post(`/cart`, { productId , size, qty })
    } catch (error) {
        return error
    }
}