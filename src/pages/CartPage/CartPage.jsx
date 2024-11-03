import { MdClose } from "react-icons/md";
import PendingButton from "../../components/PendingButton/PendingButton";
import { useGetCart, useEditCart, useDeleteCart } from "../../utils/query/cart";
import { useQueryClient } from "@tanstack/react-query";

const CartPage = () => {
    const { data  } = useGetCart()
    const { mutate : editMutate } = useEditCart()
    const queryClient = useQueryClient(); 
    const { mutate : deleteMutate } = useDeleteCart()
    console.log(data)

    const handleEditCart = async (e, id) => {
        const newItems = data?.items.map(item => item._id === id ? { ...item, qty: e.target.value } : item)
        editMutate({items : newItems})
        queryClient.setQueryData(['cart'], {...data , items : newItems } )
    }

    
    const handleDeleteCart = async (id) => {
        console.log(id)
        deleteMutate(id)
    }

    return <>
        <div className="flex gap-10 max-w-[1000px] mx-auto mt-10">
        <table className="w-full text-left">
                <thead className="border-b-2 border-sub text-g">
                    <tr>
                        <th className="py-3">상품</th>
                        <th>가격</th>
                        <th>수량</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody >
                    {
                        data?.items && data?.items.map(({productId : { name , price, image}, size, qty, _id})=> <tr key={_id} className="border-b-2 border-sub">
                            <th className="flex my-6">
                                <img className="object-cover h-32 w-24 mr-6" src={image} alt="" />
                                <div className="content-center">
                                    <h6>{name}</h6>
                                    <p className="text-g mt-1">SIZE : {size}</p>
                                </div>
                            </th>
                            <th>{price} 원</th>
                            <th>
                                <select type="text" className="bg-transparent btn p-2 rounded-md" defaultValue={qty} onChange={(e)=>handleEditCart(e,_id)}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                </select>
                            </th>
                            <th >
                                <button className="btn p-2 rounded-full" onClick={()=> handleDeleteCart(_id)}>
                                    <MdClose  size={20}/>
                                </button>
                            </th>
                        </tr>)
                    }
                </tbody>
            </table>
            <div className="w-[500px]">
                <div className="border-2 border-sub mb-2">
                    <div className="px-6 py-4">Order Summary</div>
                    <ul className="px-6 py-4 border-y-2 border-sub min-h-32">
                        {
                            data?.items && data?.items.map(({productId : { name , price}, size, qty, _id})=> <li key={_id} className="mt-2 flex gap-2 items-center justify-between">
                                <div className="text-zinc-600">{`${name} (${size})`}</div>
                                <div>{price * qty}</div>
                            </li>)
                        }
                    </ul>
                    <div className="bg-sub flex px-6 py-3 justify-between font-bold">
                        <div>Total</div>
                        {data?.items && <div> {data?.items.reduce((acc, crr) => acc + (crr.productId.price * crr.qty), 0)} 원</div>}  
                    </div>
                </div>
                <div>
                    <PendingButton className="w-full py-3 font-bold text-lg ">결제하기</PendingButton>
                </div>
            </div>
        </div>
    </>
}

export default CartPage;
