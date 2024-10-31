import { Link } from "react-router-dom"; 

const PageNationBar = ({totalPageNum = 1, page = 1, state = {}}) => {
    return <ul className="flex gap-2 mx-auto justify-center items-center">
        {
            <>
                {page !== 1 && <Link to={``} state={{ page: page - 1, ...state }} className={`p-2 border-2 border-sub hover:bg-sub transition-all`}>prev</Link>}
                {Array(totalPageNum).fill(1).map((_, i)=> <li key={i} >
                    <Link to={``} state={{ page: i + 1, ...state }} className={`p-2 border-2 border-sub hover:bg-sub transition-all ${page === i + 1 &&'bg-sub'}`} >
                        {i + 1}
                    </Link>
                </li>)}
                {page !== totalPageNum && <Link to={``} state={{ page: page + 1, ...state }} className={`p-2 border-2 border-sub hover:bg-sub transition-all `}>next</Link>}
            </>
        }
    </ul>  
}

export default PageNationBar;