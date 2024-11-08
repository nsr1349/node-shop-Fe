import AdminOrderList from "./AdminOrderList";
import SearchBar from "../../components/SearchBar/SearchBar";
import { Outlet  } from "react-router-dom";

const AdminOrderPage = () => {

    return <>
        <Outlet />
        <main className="max-w-[1000px] mx-auto px-4 pb-20">
            <SearchBar/>
            <AdminOrderList/>
        </main>
    </>
}

export default AdminOrderPage;