import { useGetCart } from "../../utils/query/cart";

const CartPage = () => {
    const { data } = useGetCart()
    console.log(data)
    return <>
        카트페이지
        <pre></pre>
        <ul>
            {
                data.items.map(({productId, _id})=> <li key={_id} >{productId}</li>)
            }
        </ul>
    </>
}

export default CartPage;