import Layout from "../../components/Layout/Layout";
import SearchBar from "../../components/SearchBar/SearchBar";
import MainProductList from "./MainProductList";

const MainPage = () => {
    return <>
        <Layout>
            <main className="max-w-[1000px] mx-auto">
                <SearchBar/>
                <MainProductList/>
            </main>
        </Layout>
    </>
}

export default MainPage;