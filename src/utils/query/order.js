import { useMutation , useQueryClient} from '@tanstack/react-query'
import { toast } from 'react-toastify';
import { toastOption } from '../../common/options';
import { createOrderApi } from '../api/order';

export const useCreateOrder = () => {
    const queryClient = useQueryClient();

    const createCartMutation = useMutation({
        mutationFn: createOrderApi,
        onSuccess: () => {
            toast.success('주문되었습니다. 임시토스트..', toastOption)
            queryClient.invalidateQueries(['cart'])
        },
        onError : ({message}) => {
            toast.error(message, toastOption)
        }
    })
    return createCartMutation;
}