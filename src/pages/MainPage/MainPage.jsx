import { FaUserAlt, FaShoppingBag, FaBox } from "react-icons/fa";
import { Link } from "react-router-dom";

const navItems = [
    {
        icon : <FaUserAlt/>,
        to : '/login',
        text : '로그인'
    },
    {
        icon : <FaShoppingBag/>,
        to : '/',
        text : '쇼핑백'
    },
    {
        icon : <FaBox/>,
        to : '/',
        text : '내 주문'
    },
]

const MainPage = () => {
    return <>
        <header className="flex justify-end p-4">
            <ul className="flex gap-2 ">
                {
                    navItems.map(({icon, to, text})=>                
                        <li key={text}>
                            <Link to={to} className="flex items-center gap-2 p-2 px-4 rounded-md border-2 border-sub text-sm">
                                {icon}
                                <h4>{text}</h4>
                            </Link>
                        </li>)
                }
            </ul>
        </header>
        <main>

        </main>
    </>
}

export default MainPage;