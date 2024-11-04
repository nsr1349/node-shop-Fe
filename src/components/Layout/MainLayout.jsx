import { FaUserAlt, FaShoppingBag, FaBox } from "react-icons/fa";
import { RiLogoutBoxFill, RiSettings4Fill  } from "react-icons/ri";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { deleteToken } from "../../utils/fn/tokenManager";
import { useGetUser } from "../../utils/query/user";
import { useGetCart } from "../../utils/query/cart";

const MainLayout = () => {
    const queryClient = useQueryClient();
    const { data : CartData } = useGetCart()
    const { data : userData } = useGetUser(); 
    const { user } = userData || {}
    const navigate = useNavigate()

    const handleLogout = () => {
        deleteToken()
        queryClient.removeQueries({ queryKey: ['user'] })
        queryClient.removeQueries({ queryKey: ['cart'] })
        navigate('/')
    }

    return <>
        <header className="flex justify-between p-4">
            <Link to='/'>
                <img src="/logo.png" alt="" className="w-10 h-10"/>
            </Link>
            <ul className="flex gap-2 text-sm">
                {
                    user ? 
                    <li>
                        <div className="flex items-center gap-2 btn px-4 rounded-md py-2" onClick={()=>handleLogout()}>
                            <RiLogoutBoxFill size={20}/>
                            <h4 className="sm:hidden">로그아웃</h4>
                        </div>
                    </li> : 
                    <li>
                        <Link to='/login' className="flex items-center gap-2 btn px-4 py-2 rounded-md ">
                            <FaUserAlt size={20}/>
                            <h4 className="sm:hidden">로그인</h4>
                        </Link>
                    </li> 
                }
                <li>
                    <Link to='/cart' className="flex items-center gap-2 btn px-4 py-2 rounded-md">
                        <FaShoppingBag size={20}/>
                        <h4 className="sm:hidden">쇼핑백 {CartData && `(${CartData?.items.length})`}</h4>
                    </Link>
                </li> 
                <li>
                    <Link to='/' className="flex items-center gap-2 btn px-4 py-2 rounded-md">
                        <FaBox size={20}/>
                        <h4 className="sm:hidden">내 주문</h4>
                    </Link>
                </li> 
                {
                    user?.level === 'admin' && 
                    <li>
                        <Link to='/admin' className="flex items-center gap-2 btn px-4 py-2 rounded-md">
                            <RiSettings4Fill size={20}/>
                            <h4 className="sm:hidden">어드민</h4>
                        </Link>
                    </li> 
                }
            </ul>
        </header>
        <Outlet/>
    </>
}

export default MainLayout;