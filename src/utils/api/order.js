import api from "./api";

export const createOrderApi = async ({shipTo, contact, totalPrice, items}) => {
    return await api.post("/order", {shipTo, contact, totalPrice, items})
}