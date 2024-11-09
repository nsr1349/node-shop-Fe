import api from "./api";

export const createOrderApi = async ({shipTo, contact, totalPrice, items}) => {
    return await api.post("/order", {shipTo, contact, totalPrice, items})
}

export const getOrderApi = async (query) => {
    if (!sessionStorage.getItem('token')) return
    const { data } = await api.get(`/order`, { params : { ...query }})
    return data
}

export const getSingleOrderApi = async (id) => {
    const { data } = await api.get(`/order/${id}`)
    return data
}

export const updateOrderApi = async ({_id, status}) => {
    const { data } = await api.put(`/order/${_id}`, {status})
    return data
}
