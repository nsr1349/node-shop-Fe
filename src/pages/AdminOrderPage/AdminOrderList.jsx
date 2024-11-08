import { useGetOrder } from "../../utils/query/order";
import { useNavigate, useLocation } from "react-router-dom";
import PageNationBar from "../../components/PageNationBar/PageNationBar";

const AdminOrderList = () => {
    const navi = useNavigate()
    const { state } = useLocation();
    const { page = 1, q } = state || { page : 1 , q : undefined }
    const { data } = useGetOrder({page, q, size : 3})
    const { orders, totalPageNum } = data || {}

    return <>
        <div className="w-full max-w-4xl mx-auto p-4">
            <table className="min-w-full text-left">
                <thead className="text-xs uppercase text-g border-b border-sub">
                    <tr>
                        <th className="py-3">order</th>
                        <th>date</th>
                        <th>orderItem</th>
                        <th>totalprice</th>
                        <th>status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders?.map(({orderNum, createdAt, items, totalPrice , status, _id})=> <tr key={orderNum} className="text-sm" onClick={()=> navi('manage', { state : { _id } })}>
                                <td className="py-4 ">{orderNum}</td>
                                <td>{createdAt}</td>
                                <td>{items[0].productId.name} { items.length > 1 && `외 ${items.length - 1}개` }</td>
                                <td>{totalPrice}</td>
                                <td>{status}</td>
                            </tr>
                    )}
                </tbody>
            </table>
        </div>
        
        <PageNationBar page={page} totalPageNum={totalPageNum} state={{q}}/>
    </> 
}

export default AdminOrderList;