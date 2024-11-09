import { Link } from "react-router-dom";
import { RiAdminFill } from "react-icons/ri";
import { AiFillProduct } from "react-icons/ai";
import { MdReorder } from "react-icons/md";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

const navList = [
    {
        title : 'Admin account',
        icon : <RiAdminFill/>,
        to : '',
    },
    {
        title : 'Product',
        icon : <AiFillProduct/>,
        to : 'product',
    },
    {
        title : 'Order',
        icon : <MdReorder/>,
        to : 'order',
    },
]

const AdminLayout = () => {
    const { pathname } = useLocation();
    const lastPath = pathname.split('/')[2] || ''

    return <main className="flex sm:flex-col">
        <aside className="h-screen sticky top-0 left-0 border-r-2 border-sub w-fit py-10 px-4 sm:relative sm:h-fit sm:flex sm:py-4 sm:border-b-2 sm:w-full sm:justify-between sm:items-center">
            <Link to='/' className="center">
                <img src="/logo.png" alt="" className="w-24 mx-auto mb-6 sm:w-10 sm:mb-0"/>
            </Link> 
            <nav>
                <ul className="sm:flex sm:gap-2">
                    {
                        navList.map(({title,icon,to})=>                     
                        <li key={title}>
                            <Link to={to} className={`flex gap-4 items-center px-4 py-3 rounded-md mb-2 hover:bg-sub transition-all sm:mb-0 ${to === lastPath && 'bg-sub'}`}>
                                {icon}
                                <p className="sm:hidden">{title}</p>
                            </Link>
                        </li>)
                    }
                </ul>
            </nav>
        </aside>
        <div className="min-h-screen flex-grow pt-20 sm:pt-8 pb-6">
            <div className="max-w-5xl w-11/12 sm:w-full mx-auto">
                <Outlet/>
            </div>
        </div>
    </main>
}

export default AdminLayout;