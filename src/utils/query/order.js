import { useMutation , useQueryClient, useQuery } from '@tanstack/react-query'
import { toast } from 'react-toastify';
import { toastOption } from '../../common/options';
import { createOrderApi, getOrderApi, getSingleOrderApi, updateOrderApi } from '../api/order';
import { useNavigate } from 'react-router-dom';


export const useCreateOrder = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate()
    const createOrderMutation = useMutation({
        mutationFn: createOrderApi,
        onSuccess: ({data}) => {
            queryClient.invalidateQueries(['cart'])
            navigate(`/order/success`, {state : { orderNum : data.orderNum }})
        },
        onError : ({message}) => {
            toast.error(message, toastOption)
        }
    })
    return createOrderMutation;
}

export const useGetOrder = (query) => {
    const getOrderQuery = useQuery({
        queryFn: ()=> getOrderApi(query),
        queryKey : ['order', query],
    })
    return getOrderQuery;
}

export const useGetSingleOrder = (id) => {
    const getOrderQuery = useQuery({
        queryFn: ()=> getSingleOrderApi(id),
        queryKey : ['order', id],
    })
    return getOrderQuery;
}

export const useUpdateOrder = () => {
    const queryClient = useQueryClient();
    const createOrderMutation = useMutation({
        mutationFn: updateOrderApi,
        onSuccess: () => {
            toast.success('업데이트 되었습니다', toastOption)
            queryClient.invalidateQueries(['order'])
        },
        onError : ({message}) => {
            toast.error(message, toastOption)
        }
    })
    return createOrderMutation;
}