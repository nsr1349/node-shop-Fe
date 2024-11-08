import { useGetOrder } from "../../utils/query/order";

const MyOrderList = () => {
    const {data} = useGetOrder({isMyOrder : true})
    console.log(data)
    return <ul className="mt-4">
        {
            data && data?.orders.map(({orderNum, createdAt, status, totalPrice, items})=> <li key={orderNum} className="border-sub border-2 flex justify-between">
            <div className="p-4 flex flex-col gap-1">
                <h1>주문번호 : {orderNum}</h1>
                <div>{createdAt}</div>
                <div>{items[0].productId.name} { items.length > 1 && `외 ${items.length - 1}개` }</div>
                <div>{totalPrice} 원</div>
            </div>
            <div className="px-4 text-center content-center text-sm">
                <div>주문상태</div>
                <div className="bg-red-800 px-2 py-1 rounded-md mt-2">{status}</div>
            </div>
        </li>)
        }

    </ul>
}

export default MyOrderList;