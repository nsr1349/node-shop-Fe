import { useMutation } from '@tanstack/react-query'
import { createProductApi } from '../api/product';

export const useCreateProuct = () => {
    const productMutation = useMutation({
        mutationFn: createProductApi,
        onSuccess: (data) => {
            console.log(data)
        },
    });

    return productMutation;
};

