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

    return <main className="flex">
        <aside className="h-screen sticky top-0 left-0 border-r-2 border-sub w-fit py-10 px-4">
            <img src="/logo.png" alt="" className="w-24 mx-auto mb-6"/>
            <nav>
                <ul>
                    {
                        navList.map(({title,icon,to})=>                     
                        <li key={title}>
                            <Link to={to} className={`flex gap-4 items-center px-4 py-3 rounded-md mb-2 hover:bg-sub transition-all ${to === lastPath && 'bg-sub'}`}>
                                {icon}
                                <p>{title}</p>
                            </Link>
                        </li>)
                    }
                </ul>
            </nav>
        </aside>
        <div className="min-h-screen flex-grow pt-20">
            <div className="w-11/12 max-w-5xl mx-auto">
                <Outlet/>
            </div>
        </div>
    </main>
}

export default AdminLayout;