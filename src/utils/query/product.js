import { useQuery, useMutation } from '@tanstack/react-query'
import { createProductApi, getProductApi } from '../api/product';

export const useCreateProuct = () => {
    const productMutation = useMutation({
        mutationFn: createProductApi,
        onSuccess: (data) => {
            console.log(data)
        },
    });

    return productMutation;
};

export const useGetUser = () => {
    const getUserQuery = useQuery({
        queryKey : ['product'],
        queryFn : getProductApi,
    })

    return getUserQuery;
};
