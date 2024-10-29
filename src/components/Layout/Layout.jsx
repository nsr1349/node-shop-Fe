import { FaUserAlt, FaShoppingBag, FaBox } from "react-icons/fa";
import { RiLogoutBoxFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { deleteToken } from "../../utils/fn/tokenManager";
import { useGetUser } from "../../utils/query/user";
import { useUserStore } from "../../utils/store/user";

const Layout = ({children}) => {
    const queryClient = useQueryClient();
    const { data } = useGetUser(); 
    const { user , setUser } = useUserStore()

    const handleLogout = () => {
        deleteToken()
        setUser(null)
        queryClient.removeQueries({ queryKey: ['user'] })
    }

    useEffect(()=> {
        console.log(data)
        if (data?.status === 'success') setUser(data.user)
    },[ data ])

    return <>
        { user?.name && <div className="text-center bg-green-800 py-2">{`${user?.name}님으로 로그인 되었습니다`}</div>}
        <header className="flex justify-end p-4">
            <ul className="flex gap-2 ">
                {
                    user ? 
                    <li>
                        <div className="flex items-center gap-2 p-2 px-4 rounded-md border-2 border-sub text-sm" onClick={()=>handleLogout()}>
                            <RiLogoutBoxFill/>
                            <h4>로그아웃</h4>
                        </div>
                    </li> : 
                    <li>
                        <Link to='/login' className="flex items-center gap-2 p-2 px-4 rounded-md border-2 border-sub text-sm">
                            <FaUserAlt/>
                            <h4>로그인</h4>
                        </Link>
                    </li> 
                }
                <li>
                    <Link to='/cart' className="flex items-center gap-2 p-2 px-4 rounded-md border-2 border-sub text-sm">
                        <FaShoppingBag/>
                        <h4>쇼핑백</h4>
                    </Link>
                </li> 
                <li>
                    <Link to='/' className="flex items-center gap-2 p-2 px-4 rounded-md border-2 border-sub text-sm">
                        <FaBox/>
                        <h4>내 주문</h4>
                    </Link>
                </li> 
                {
                    user?.level === 'admin' && 
                    <li>
                        <Link to='/admin' className="flex items-center gap-2 p-2 px-4 rounded-md border-2 border-sub text-sm">
                            <FaBox/>
                            <h4>어드민</h4>
                        </Link>
                    </li> 
                }
            </ul>
        </header>
        
        {children}
    </>
}

export default Layout;