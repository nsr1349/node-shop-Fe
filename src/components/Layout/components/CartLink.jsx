import { FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGetCart } from "../../../utils/query/cart";

const CartLink = () => {
    const { data  } = useGetCart()

    return <li>
        <Link to='/cart' className="flex items-center gap-2 btn px-4 py-2 rounded-md relative">
            <FaShoppingBag size={20}/>
            <h4 className="sm:hidden">쇼핑백 </h4>
            {data?.items?.length > 0 && <div className="absolute top-[-8px] right-[-12px] bg-red-800 rounded-full px-[.6em] pb-[.2em] center">{data && `${data?.items.length}`}</div>}
        </Link>
    </li> 
}

export default CartLink;