import PendingButton from "../PendingButton/PendingButton";
import { localString } from "../../utils/fn/LocalString";

const OrderSummary = ({items, ispending = false, event, className=''}) => {
    console.log(items)
    
    return <>
    { items?.length !== 0 && <div className={`w-[500px] ${className}`}>
        <div className="border-2 border-sub mb-2">
            <div className="px-6 py-4">Order Summary</div>
                <ul className="px-6 py-4 border-y-2 border-sub min-h-32">
                    {
                        items && items.map(({productId : { name , price}, size, qty, _id})=> <li key={_id} className="mt-2 flex gap-2 items-center justify-between">
                            <div className="text-zinc-600">{`${name} (${size})`}</div>
                            <div>{localString(price * qty)}</div>
                        </li>)
                    }
                </ul>
                <div className="bg-sub flex px-6 py-3 justify-between font-bold">
                    <div>합계</div>
                    {items && <div> {localString(items.reduce((acc, crr) => acc + (crr.productId.price * crr.qty), 0))} 원</div>}  
                </div>
            </div>
            <div>
                <PendingButton isPending={ispending} className="w-full py-3 font-bold text-lg" onClick={()=> event()}>결제하기</PendingButton>
            </div>
        </div>
    }</>
}

export default OrderSummary;