import api from "./api";

const productValidation = ({ sku , name, image, category, price, stocks }) => {
    if (!image) throw new Error('이미지는 필수 값입니다.')
    if (sku.length > 20) throw new Error('sku 가 너무 깁니다.')
    if (name.length > 20) throw new Error('이름이 너무 깁니다.')
    if (price < 0) throw new Error('가격은 음수가 될 수 없습니다.')
    if (price > 100000000) throw new Error('가격은 1억이 한도입니다.')
    if (category.length === 0) throw new Error('카테고리를 하나 이상 선택해주세요')
    
    const stock = {}
    stocks.forEach(({size ,qty})=> {
        if (!size) throw new Error('상품 재고 사이즈칸을 확인 해주세요.')
        if (qty < 0) throw new Error('수량은 음수가 될 수 없습니다.')
        stock[size] = qty
    })
        const size = Object.keys(stock)
    return { stock , size}
}

export const createProductApi = async (formData) => {
    const { stock, size } = productValidation(formData)
    return await api.post("/product", { ...formData, stock, size})
}

export const getProductApi = async (query) => {
    try {
        return await api.get("/product", { params : { ...query }} )
    } catch (error) {
        return error
    }
}

export const updateProductApi = async (formData) => {
    const { stock, size } = productValidation(formData)
    try {
        return await api.put(`/product/${formData._id}`, { ...formData, stock, size } )
    } catch (error) {
        return error
    }
}