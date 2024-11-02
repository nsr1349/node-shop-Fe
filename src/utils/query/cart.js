import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify';
import { addCartApi } from '../api/cart';

const toastOption =  {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    theme: "dark",
    transition: null,
}

export const useAddCart = () => {
    const addCartMutation = useMutation({
        mutationFn: addCartApi,
        onSuccess: (data) => {
            console.log('cart res' , data)
            toast.success('카트에 상품이 담겼습니다', toastOption)
        },
        onError : () => {
            toast.error('카트 담기에 실패했습니다..', toastOption)
        }
    })
    return addCartMutation;
}