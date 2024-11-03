import { MdClose } from "react-icons/md";
import PendingButton from "../../components/PendingButton/PendingButton";
import { useGetCart, useEditCart, useDeleteCart } from "../../utils/query/cart";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
    const { data, isLoading } = useGetCart()
    const { mutate : editMutate, isPending : editPending } = useEditCart()
    const { mutate : deleteMutate , isPending : deletePending} = useDeleteCart()
    const queryClient = useQueryClient(); 
    const Navigate = useNavigate()

    if (!isLoading && !data) return Navigate('/login')

    const handleEditCart = async (e, id) => {
        const newItems = data?.items.map(item => item._id === id ? { ...item, qty: e.target.value } : item)
        editMutate({items : newItems})
        queryClient.setQueryData(['cart'], {...data , items : newItems } )
    }
    
    const handleDeleteCart = async (id) => deleteMutate(id)

    return <>
        <div className="flex gap-10 max-w-[1000px] mx-auto mt-10">
        <div className="w-full text-left">
            <h1 className="text-2xl font-bold">장바구니</h1>
                    {
                        data?.items && data?.items.map(({productId : { name , price, image}, size, qty, _id})=> <div key={_id} className="border-b-2 border-sub flex items-center">
                            <div className="flex my-6 flex-grow">
                                <img className="object-cover h-32 w-24 mr-6" src={image} alt="" />
                                <div className="content-center ">
                                    <h6>{name}</h6>
                                    <p className="text-g mt-1">SIZE : {size}</p>
                                </div>
                            </div>
                            <div>{price.typeOf(Number) && (price).toLocaleString()} 원</div>
                            <div className="px-4">
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
                            </div>
                            <div >
                                <button disabled={deletePending} className="btn p-2 rounded-full" onClick={()=> handleDeleteCart(_id)}>
                                    <MdClose  size={20}/>
                                </button>
                            </div>
                        </div>)
                    }
            </div>
            <div className="w-[500px]">
                <div className="border-2 border-sub mb-2">
                    <div className="px-6 py-4">Order Summary</div>
                    <ul className="px-6 py-4 border-y-2 border-sub min-h-32">
                        {
                            data?.items && data?.items.map(({productId : { name , price}, size, qty, _id})=> <li key={_id} className="mt-2 flex gap-2 items-center justify-between">
                                <div className="text-zinc-600">{`${name} (${size})`}</div>
                                <div>{(price * qty).toLocaleString()}</div>
                            </li>)
                        }
                    </ul>
                    <div className="bg-sub flex px-6 py-3 justify-between font-bold">
                        <div>합계</div>
                        {data?.items && <div> {(data.items.reduce((acc, crr) => acc + (crr.productId.price * crr.qty), 0)).toLocaleString()} 원</div>}  
                    </div>
                </div>
                <div>
                    <PendingButton isPending={editPending || deletePending} className="w-full py-3 font-bold text-lg ">결제하기</PendingButton>
                </div>
            </div>
        </div>
    </>
}

export default CartPage;
