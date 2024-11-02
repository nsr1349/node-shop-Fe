import { useQuery, useMutation } from '@tanstack/react-query'
import { createProductApi, getProductApi, updateProductApi, deleteProductApi, getSingleProductApi } from '../api/product';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useQueryClient } from '@tanstack/react-query';

const toastOption =  {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    theme: "dark",
    transition: null,
}


export const useCreateProuct = () => {
    const navigate = useNavigate()
    const queryClient = useQueryClient();
    const productMutation = useMutation({
        mutationFn: createProductApi,
        onSuccess: (data) => {
            console.log(data)
            navigate('/admin/product')
            toast.success('상품이 추가되었습니다.', toastOption)
            queryClient.invalidateQueries({ queryKey: ['product'] });
        },
    });

    return productMutation;
};

export const useGetProduct = (query) => {
    const getProductQuery = useQuery({
        queryKey : ['product', query],
        queryFn : () => getProductApi(query),
    })

    return getProductQuery;
};

export const useGetSingleProduct = (id) => {
    const getProductQuery = useQuery({
        queryKey : ['product', id],
        queryFn :  ()=> getSingleProductApi(id),
    })

    return getProductQuery;
};

export const useUpdateProduct = () => {
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const UpdateProductQuery = useMutation({
        mutationFn : updateProductApi,
        onSuccess: () => {
            navigate('/admin/product')
            toast.success('상품이 수정되었습니다.', toastOption)
            queryClient.invalidateQueries({ queryKey: ['product'] });
        },
    })

    return UpdateProductQuery;
};

export const useDeleteProduct = () => {
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const UpdateProductQuery = useMutation({
        mutationFn : deleteProductApi,
        onSuccess: () => {
            toast.success('상품이 삭제되었습니다.', toastOption)
            queryClient.invalidateQueries({ queryKey: ['product'] });
            navigate('/admin/product')
        },
    })

    return UpdateProductQuery;
};