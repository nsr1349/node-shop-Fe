import { useParams } from "react-router-dom";
import { useGetSingleProduct } from "../../utils/query/product";
import PendingButton from "../../components/PendingButton/PendingButton";
import { useState } from "react";

const DetailPage = () => {
    const { id } = useParams()
    const { data , isPending} = useGetSingleProduct(id)
    const { id : productId, name, image, price, description , size, stock } = data?.product || {}
    const [ selectSize, setSelectSize ] = useState()

    const handleAddCart = () => {
        console.log(productId)
        // 로그인 아니면 리다이렉트
        // 사이즈를 선택 안했으면 토스트
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
                <PendingButton className="btn py-2 w-full" onClick={()=> handleAddCart()}>장바구니 추가</PendingButton>
            </div>
        </div>
    </>
}

export default DetailPage;