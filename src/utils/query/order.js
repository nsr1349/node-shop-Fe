import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify';
import { toastOption } from '../../common/options';
import { createOrderApi } from '../api/order';

export const useCreateOrder = () => {
    // const queryClient = useQueryClient();

    const createCartMutation = useMutation({
        mutationFn: createOrderApi,
        onSuccess: () => {
        },
        onError : ({message}) => {
            toast.error(message, toastOption)
        }
    })
    return createCartMutation;
}