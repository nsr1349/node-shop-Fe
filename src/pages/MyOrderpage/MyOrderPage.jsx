// import SearchBar from "../../components/SearchBar/SearchBar";
import MyOrderList from "./MyOrderList";

const MyOrderPage = () => {
    return <main className="max-w-[1000px] mx-auto px-4 pb-20">
        {/* <SearchBar to={'/my-order'}/> */}
        <MyOrderList/>
    </main>
}

export default MyOrderPage;