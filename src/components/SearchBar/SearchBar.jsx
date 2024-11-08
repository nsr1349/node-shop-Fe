import { MdSearch } from "react-icons/md";
import { useNavigate } from "react-router-dom"; 

const SearchBar = (to = '') => {
    const Navigate = useNavigate()
    const handleSearch = () => {
        const q = document.querySelector('#search').value
        Navigate(to, { state : { q }})
    }
    return <div className="relative">
        <input id='search' type="text" placeholder="검색어를 입력하세요" className="w-full" onKeyDown={({key})=> key === 'Enter' && handleSearch() }/>
        <button className="absolute right-2 inset-y-0 text-3xl text-g hover:text-white transition-all" onClick={handleSearch}>
            <MdSearch />
        </button>
    </div>
}

export default SearchBar;