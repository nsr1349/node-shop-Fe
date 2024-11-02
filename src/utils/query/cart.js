import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify';
import { addCartApi } from '../api/cart';
import { toastOption } from '../../common/options';
import { useCartLenStore } from '../store/user';

export const useAddCart = () => {
    const {setCartLen} = useCartLenStore()
    const addCartMutation = useMutation({
        mutationFn: addCartApi,
        onSuccess: ({data}) => {
            
            console.log('cart res' , data)
            console.log('cart res' , data.cartLen)
            setCartLen(data.cartLen)
            toast.success('카트에 상품이 담겼습니다', toastOption)
        },
        onError : ({message}) => {
            toast.error(message, toastOption)
        }
    })
    return addCartMutation;
}