import { useQuery, useMutation } from '@tanstack/react-query'
import { createProductApi, getProductApi } from '../api/product';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useQueryClient } from '@tanstack/react-query';

export const useCreateProuct = () => {
    const navigate = useNavigate()
    const queryClient = useQueryClient();
    const productMutation = useMutation({
        mutationFn: createProductApi,
        onSuccess: (data) => {
            console.log(data)
            navigate('/admin/product')
            toast.success('상품이 추가되었습니다.', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                theme: "dark",
                transition: null,
            })
            queryClient.invalidateQueries({ queryKey: ['product'] });
        },
    });

    return productMutation;
};

export const useGetProduct = (query) => {
    const getUserQuery = useQuery({
        queryKey : ['product', query],
        queryFn : () => getProductApi(query),
    })

    return getUserQuery;
};
