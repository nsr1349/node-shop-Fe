import api from "./api";

export const createProductApi = async ({ formData, image, category, stocks}) => {
    if (!image) throw new Error('이미지는 필수 값입니다.')
    if (formData.sku.length > 20) throw new Error('sku 가 너무 깁니다.')
    if (formData.name.length > 20) throw new Error('이름이 너무 깁니다.')
    if (formData.price < 0) throw new Error('가격은 음수가 될 수 없습니다.')
    if (formData.price > 100000000) throw new Error('가격은 1억이 한도입니다.')
    if (category.length === 0) throw new Error('카테고리를 하나 이상 선택해주세요')
    
    const stock = {}
    stocks.forEach(({size ,qty})=> {
        if (!size) throw new Error('상품 재고 사이즈칸을 확인 해주세요.')
        if (qty < 0) throw new Error('수량은 음수가 될 수 없습니다.')
        stock[size] = qty
    })
    const size = Object.keys(stock)

    return await api.post("/product", { size , stock, image, category, ...formData})
}

export const getProductApi = async (query) => {
    try {
        return await api.get("/product", { params : { ...query }} )
    } catch (error) {
        return error
    }
}