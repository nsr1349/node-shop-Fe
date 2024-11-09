import api from "./api";

export const addCartApi = async ({ productId , size, qty }) => {
    return await api.post(`/cart`, { productId , size, qty })
}

export const getCartApi = async () => {
    if (!sessionStorage.getItem('token')) return
    const { data } = await api.get(`/cart`)
    return data.cart
}

export const editCartApi = async ({items}) => {
    const { data } = await api.put(`/cart`,{items})
    return data.cart
}

export const deleteCartApi = async (id) => {
    const { data } = await api.delete(`/cart/${id}`)
    return data.cart
}