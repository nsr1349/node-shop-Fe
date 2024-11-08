import { useLocation, Link } from "react-router-dom";
import { useGetSingleOrder , useUpdateOrder } from "../../utils/query/order";

const AdminOrderManage = () => {
    const { state } = useLocation();
    const { _id } = state || {}
    const { data } = useGetSingleOrder(_id)
    const { orderNum, createdAt, shipTo, contact , userId, items , status} = data?.order || {}
    const { mutate } = useUpdateOrder()

    const handleUpdateOrder = (e) => {
        mutate({_id, status : e.target.value})
    }

    return <div className="fixed top-0 left-0 w-full h-full grid place-items-center z-40">
        <Link to={-1} className="w-full h-full bg-[rgba(0,0,0,0.5)]"/>
        <div className="fixed bg-main scale-up transition-all max-h-[95%] overflow-y-scroll none-scrollbar">
            <div className="p-4">
                <div>오더 정보</div>
                <div>주문번호 : {orderNum}</div>
                <div>날짜 : {createdAt}</div>
                <div>이메일 : {userId?.email}</div>
                <div>주소 : {shipTo}</div>
                <div>연락처 : {contact}</div>
                <table className="min-w-full text-left">
                    <thead className="text-xs uppercase text-g border-b border-sub">
                        <tr>
                            <th className="py-3">id</th>
                            <th>name</th>
                            <th>unit price</th>
                            <th>qty</th>
                            <th>price</th>
                        </tr>
                    </thead>
                    <tbody className="text-xs">
                        {
                            items?.map(({productId : {name}, price, qty, _id})=> <tr key={_id} >
                                    <td className="py-4 ">{_id}</td>
                                    <td>{name}</td>
                                    <td>{price}</td>
                                    <td>{qty}</td>
                                    <td>{price * qty}</td>
                                </tr>
                        )}
                    </tbody>
                </table>
                <select name="" id="" className="bg-transparent" defaultValue={status} onChange={handleUpdateOrder}>
                    <option value="delivered">delivered</option>
                    <option value="preparing">preparing</option>
                    <option value="shipped">shipped</option>
                </select>
            </div>
        </div>
    </div>
}

export default AdminOrderManage;