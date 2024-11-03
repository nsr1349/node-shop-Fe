import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify';
import { addCartApi , getCartApi, editCartApi , deleteCartApi} from '../api/cart';
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

export const useEditCart = () => {
    const addCartMutation = useMutation({
        mutationFn: editCartApi,
        onSuccess: () => {
            toast.success('카트가 수정되었습니다', toastOption)
        },
        onError : ({message}) => {
            toast.error(message, toastOption)
        },
    })
    return addCartMutation;
}


export const useDeleteCart = () => {
    const queryClient = useQueryClient();
    const addCartMutation = useMutation({
        mutationFn: deleteCartApi,
        onSuccess: () => {
            toast.success('카트에서 삭제되었습니다', toastOption)
            queryClient.invalidateQueries(['cart'])
        },
        onError : ({message}) => {
            toast.error(message, toastOption)
        },
    })
    return addCartMutation;
}

