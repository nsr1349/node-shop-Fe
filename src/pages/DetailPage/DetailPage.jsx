import { useParams, useNavigate } from "react-router-dom";
import { useGetSingleProduct } from "../../utils/query/product";
import PendingButton from "../../components/PendingButton/PendingButton";
import { useState } from "react";
import { useGetUser } from "../../utils/query/user";
import { useAddCart } from "../../utils/query/cart";
import { toast } from "react-toastify";
import { toastOption } from "../../common/options";
import DetailPageFallback from "./DetailPageFallback";

const DetailPage = () => {
    const { id } = useParams()
    const { data: singleProductData , isPending} = useGetSingleProduct(id)
    const { name, image, price, description , size, stock } = singleProductData?.product || {}
    const { mutate } = useAddCart()
    const {data : userData} = useGetUser()
    const { user } = userData || {}
    const [ selectSize, setSelectSize ] = useState(null)
    const navigate = useNavigate()
    
    const handleAddCart = () => {
        if (!user) return navigate('/login')
        if (selectSize === null) return toast.error('사이즈를 선택해주세요', toastOption)
        mutate({ productId : id , size : selectSize, qty : 1})
    }

    if (isPending) return <DetailPageFallback/>

    return <>
        <div className=" mx-auto max-w-[1000px] min-h-96 flex gap-4 px-4 sm:flex-col">
            <img className="max-h-[600px] sm:max-h-fit object-cover " src={image} alt="" />
            <div className="p-4 flex flex-col flex-grow h-fit">
                <h1 className="text-2xl">{name}</h1>
                <h4 className="text-3xl font-bold mt-2 mb-10">₩ {(price).toLocaleString()}</h4>
                <p className="flex-grow mb-4">{description}</p>
                <div htmlFor="" className="mt-1 flex-grow mb-2">사이즈</div>
                <ul className="flex gap-2 mb-4">
                    {
                        size && size.map((a)=><li key={a}>
                            <button 
                                className={`btn px-8 py-1 ${selectSize === a && 'border-white bg-slate-100 text-main font-bold'} ${stock[a] === 0 && 'btn-disable'}`} 
                                disabled={stock[a] === 0}
                                onClick={()=> setSelectSize(a)}
                            >
                                    {a} {stock[a]}
                            </button>
                        </li>)
                    }
                </ul>
                <PendingButton className="btn py-2 w-full" onClick={()=> handleAddCart()}>장바구니 추가</PendingButton>
            </div>
        </div>
    </>
}

export default DetailPage;