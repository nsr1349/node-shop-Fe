import { useParams, useNavigate } from "react-router-dom";
import { useGetSingleProduct } from "../../utils/query/product";
import PendingButton from "../../components/PendingButton/PendingButton";
import { useState } from "react";
import { useGetUser } from "../../utils/query/user";
import { useAddCart } from "../../utils/query/cart";
import { toast } from "react-toastify";

const DetailPage = () => {
    const { id } = useParams()
    const { data: singleProductData , isPending} = useGetSingleProduct(id)
    const { _id : productId, name, image, price, description , size, stock } = singleProductData?.product || {}
    const { mutate, error } = useAddCart()
    const {data : userData} = useGetUser()
    const { user } = userData || {}
    const [ selectSize, setSelectSize ] = useState(null)
    const navigate = useNavigate()

    console.log(user)
    const handleAddCart = () => {
        if (!user) navigate('/login')
        if (selectSize === null) return toast.error('사이즈를 선택해주세요', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            theme: "dark",
            transition: null,
        })
        mutate({ productId , size : selectSize, qty : 1})
        // 
    }

    if (isPending) return <>로딩중</>

    return <>
        <div className=" mx-auto max-w-[1000px] min-h-96 flex gap-4">
            <div className="bg-red-950 h-96 min-w-96">
                <img className="max-h-[600px]" src={image} alt="" />
            </div>
            <div className="p-4 flex flex-col flex-grow">
                <h1 className="text-2xl">{name}</h1>
                <h4 className="text-3xl font-bold mt-2 mb-10">₩ {price}</h4>
                <p className="flex-grow">{description}</p>
                <div htmlFor="" className="mt-10 flex-grow">사이즈</div>
                <ul className="flex gap-2 mt-2 mb-4">
                    {
                        size && size.map((a)=><li key={a}>
                            <button 
                                className={`btn px-8 ${selectSize === a && 'border-white bg-slate-100 text-main font-bold'} ${stock[a] === 0 && 'btn-disable'}`} 
                                disabled={stock[a] === 0}
                                onClick={()=> setSelectSize(a)}
                            >
                                    {a} {stock[a]}
                            </button>
                        </li>)
                    }
                </ul>
                {error && error}
                <PendingButton className="btn py-2 w-full" onClick={()=> handleAddCart()}>장바구니 추가</PendingButton>
            </div>
        </div>
    </>
}

export default DetailPage;