import { useLocation, useNavigate } from "react-router-dom";
import { FaCircleCheck } from "react-icons/fa6";
import { useEffect } from "react";
const OrderSuccessPage = () => {
    const { state } = useLocation();
    const navi = useNavigate();

    useEffect(()=>{
        if (!state?.orderNum) return navi('/')
    },[])

    return <main className="max-w-[1000px] mx-auto pt-10 center min-h-56">
        <div className="center">
            <FaCircleCheck className="text-green-600 text-7xl"/>
            <h1 className="mt-4 mb-2 text-xl font-bold">주문 성공!</h1>
            <span className="text-g">주문코드 : {state?.orderNum}</span> 
        </div>
    </main>
}

export default OrderSuccessPage;