import { FaUserAlt, FaShoppingBag, FaBox } from "react-icons/fa";
import { RiLogoutBoxFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useState } from "react";
import { deleteToken } from "../../utils/fn/tokenManager";

const MainPage = () => {
    const [isLogin, setIsLogin] = useState(!!sessionStorage.getItem('token')) 

    const handleLogout = () => {
        deleteToken()
        setIsLogin(false)
    }

    return <>
        <header className="flex justify-end p-4">
            <ul className="flex gap-2 ">
                {
                    isLogin ? 
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
                    <Link to='/' className="flex items-center gap-2 p-2 px-4 rounded-md border-2 border-sub text-sm">
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
            </ul>
        </header>
        <main>

        </main>
    </>
}

export default MainPage;