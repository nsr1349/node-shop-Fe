import { Outlet, Link } from "react-router-dom"; 
import AdminProductList from "./AdminProductList";
import SearchBar from "../../components/SearchBar/SearchBar";

const AdminProductPage = () => {
    return <>
        <Outlet />
        <main className="flex">
            <div className="min-h-screen flex-grow pt-4">
                <div className="w-11/12 max-w-5xl mx-auto">
                    <SearchBar/>
                    <div className="py-2 text-end">
                        <Link to='manage'>
                            <button className="mt-4 bg-sub py-2 px-4 rounded-md hover:bg-g transition-all">상품추가버튼</button>
                        </Link>
                    </div>
                    <AdminProductList/>
                </div>
            </div>
        </main>
    </>
}

export default AdminProductPage;