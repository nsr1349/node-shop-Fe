import { MdClose } from "react-icons/md";
import { useGetCart, useEditCart, useDeleteCart } from "../../utils/query/cart";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { localString } from "../../utils/fn/LocalString";
import OrderSummary from "../../components/OrderSummary/OrderSummary";

const CartPage = () => {
    const { data, isLoading } = useGetCart()
    const { mutate : editMutate, isPending : editPending } = useEditCart()
    const { mutate : deleteMutate , isPending : deletePending} = useDeleteCart()
    const queryClient = useQueryClient(); 
    const Navigate = useNavigate()

    if (!isLoading && !data) return Navigate('/login')

    if (isLoading) return  <>로딩중</>

    const handleEditCart = (e, id) => {
        const newItems = data?.items.map(item => item._id === id ? { ...item, qty: e.target.value } : item)
        editMutate({items : newItems})
        queryClient.setQueryData(['cart'], {...data , items : newItems } )
    }

    return <>
        <div className="flex gap-10 max-w-[1000px] mx-auto mt-10">
            <div className="w-full text-left">
                <h1 className="text-2xl font-bold">장바구니</h1>
                    {
                        data?.items && data?.items.length !== 0 ? data?.items.map(({productId : { name , price, image}, size, qty, _id})=> <div key={_id} className="border-b-2 border-sub flex items-center">
                            <div className="flex my-6 flex-grow">
                                <img className="object-cover h-32 w-24 mr-6" src={image} alt="" />
                                <div className="content-center ">
                                    <h6>{name}</h6>
                                    <p className="text-g mt-1">SIZE : {size}</p>
                                </div>
                            </div>
                            <div>{(localString(price))} 원</div>
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
                                <button disabled={deletePending} className="btn p-2 rounded-full" onClick={()=> deleteMutate(_id)}>
                                    <MdClose  size={20}/>
                                </button>
                            </div>
                        </div> ) : <div className="w-full text-center py-4 ">
                            장바구니가 비어있습니다
                        </div>
                    }
            </div>
            <OrderSummary items={data?.items} ispending={editPending || deletePending} event={()=>Navigate('/order')}/>
        </div>
    </>
}

export default CartPage;
