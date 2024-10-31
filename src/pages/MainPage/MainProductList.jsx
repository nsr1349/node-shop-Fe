import PageNationBar from "../../components/PageNationBar/PageNationBar";
import { useLocation } from "react-router-dom"; 
import { useGetProduct } from "../../utils/query/product";
import MainProductListFallback from "./MainProductListFallback";

const MainProductList = () => {
    const { state } = useLocation();
    const { page = 1, q } = state || { page : 1 , q : undefined }
    const { data, isLoading  } = useGetProduct({page, q, size : 12, active : true})
    const { products, totalPageNum } = data?.data || {}

    if (isLoading) return <MainProductListFallback/>

    if (products?.length === 0) return <div className="center mt-10">결과없음</div>

    return <>
        <div className={`my-6 gap-4 ${products.length < 4 ? 'flex flex-wrap' : 'custom-grid'} `}>
        {
            products?.map(({image,name,price,_id})=> <div key={_id} className="border-b-2 border-sub ">
                <img src={image} alt="" className="h-[340px] object-cover"/>
                <div className="py-3 px-2">
                    <div className="font-bold mb-2">{name}</div>
                    <div>{price} 원</div>
                </div>
            </div>)
        }
        </div>
        <PageNationBar page={page} totalPageNum={totalPageNum} state={{q}}/>
    </>
}

export default MainProductList;

