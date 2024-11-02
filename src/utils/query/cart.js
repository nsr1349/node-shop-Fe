import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify';
import { addCartApi , getCartApi} from '../api/cart';
import { toastOption } from '../../common/options';

export const useAddCart = () => {
    const queryClient = useQueryClient();
    const addCartMutation = useMutation({
        mutationFn: addCartApi,
        onSuccess: ({data}) => {
            console.log(data.cart.items)
            toast.success('카트에 상품이 담겼습니다', toastOption)
            queryClient.setQueryData(['cart'], data.cart)
        },
        onError : ({message}) => {
            toast.error(message, toastOption)
        }
    })
    return addCartMutation;
}

export const useGetCart = () => {
    const getCartQuery = useQuery({
        queryFn: getCartApi,
        queryKey : ['cart'],
    })
    return getCartQuery;
}



