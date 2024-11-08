import OrderSummary from "../../components/OrderSummary/OrderSummary";
import { useGetCart } from "../../utils/query/cart";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Cards from 'react-credit-cards-2';
import { useState } from "react";
import 'react-credit-cards-2/dist/es/styles-compiled.css'
import { cc_expires_format } from "../../utils/api/numbers";
import { useCreateOrder } from "../../utils/query/order";

const OrderPage = () => {
    const { data, isLoading } = useGetCart()
    const { mutate } = useCreateOrder()
    const { register, handleSubmit } = useForm();
    const Navigate = useNavigate()
    const [state, setState] = useState({
        number: '',
        expiry: '',
        cvc: '',
        name: '',
        focus: '',
    });

    if (!isLoading && data?.items.length === 0) return Navigate('/cart')
        
    const handleInputChange = ({ target : { name, value } }) => {
        if (name === 'expiry')
            return setState((prev) => ({ ...prev, [name]: cc_expires_format(value) }))
        
        setState((prev) => ({ ...prev, [name]: value }))
    }
    
    const handleInputFocus = (evt) => 
        setState((prev) => ({ ...prev, focus: evt.target.name }))

    const handleOrder = ({contact , shipTo}) => {
        const newItems = data?.items.map( item => { return {...item, price : item.productId.price}})

        mutate({
            shipTo , 
            contact, 
            totalPrice : data?.items.reduce((acc, crr) => acc + (crr.productId.price * crr.qty), 0), 
            items : newItems, 
        })
    }

    return <>
        <form className="flex gap-10 max-w-[1000px] mx-auto mt-4 px-4 md:flex-col pb-10" onSubmit={handleSubmit(handleOrder)}>
            <div className="w-full">
                <h1 className="text-2xl font-bold mb-6">결제하기</h1>
                <div className="text-lg font-bold mb-4 my-10 text-g">인적사항</div>
                <div className="w-full flex flex-col gap-4 ">
                    <div className="flex gap-4">
                        <input type="text" placeholder="성" className="w-full" required {...register('firstname')}/>
                        <input type="text" placeholder="이름" className="w-full" required {...register('secondname')}/>
                    </div>
                    <input type="text" placeholder="연락처" {...register('contact')}/>
                    <input type="text" placeholder="주소" {...register('shipTo')}/>
                    <div className="flex gap-4">
                        <input type="text" placeholder="city" className="w-full" required />
                        <input type="text" placeholder="zip" className="w-full" required/>
                    </div>
                </div>
                <div className="text-lg font-bold mb-4 my-10 text-g">카드정보</div>
                <div className="flex gap-4 flex-col">
                    <Cards
                        number={state.number}
                        expiry={state.expiry}
                        cvc={state.cvc}
                        name={state.name}
                        focused={state.focus}
                    />
                    <div className="flex-grow gap-2 flex-col flex">
                        <input
                            type="number"
                            name="number"
                            placeholder="Card Number"
                            required
                            value={state.number}
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                        />
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            required
                            value={state.name}
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                        />
                        <div className="flex gap-4">
                            <input
                                className="w-full" 
                                type="text"
                                name="expiry"
                                placeholder="MM/DD"
                                required
                                value={state.expiry}
                                onChange={handleInputChange}
                                onFocus={handleInputFocus}
                            />
                            <input
                                className="w-full" 
                                type="number"
                                name="cvc"
                                placeholder="cvc"
                                required
                                value={state.cvc}
                                onChange={handleInputChange}
                                onFocus={handleInputFocus}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <OrderSummary items={data?.items} event={()=>{}} className="md:w-full"/>
        </form>
    </>
}

export default OrderPage;