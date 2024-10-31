import Layout from "../../components/Layout/Layout";
import SearchBar from "../../components/SearchBar/SearchBar";
import MainProductList from "./MainProductList";

const MainPage = () => {
    return <>
        <Layout>
            <main className="max-w-[1000px] mx-auto px-4 pb-20">
                <SearchBar/>
                <MainProductList/>
            </main>
        </Layout>
    </>
}

export default MainPage;