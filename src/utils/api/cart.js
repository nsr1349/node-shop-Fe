import api from "./api";

export const addCartApi = async ({ productId , size, qty }) => {
    return await api.post(`/cart`, { productId , size, qty })
}