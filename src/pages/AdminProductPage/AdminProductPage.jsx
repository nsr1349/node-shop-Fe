import { MdAutoAwesomeMosaic , MdPriceChange, MdSearch  } from "react-icons/md";
import { Outlet, Link } from "react-router-dom"; 
import { useGetProduct } from "../../utils/query/product";

const AdminProductPage = () => {
    const { data } = useGetProduct()
    const products = data?.data?.products

    return <>
        <Outlet />
        <main className="flex">
            <div className="min-h-screen flex-grow pt-4">
                <div className="w-11/12 max-w-5xl mx-auto">
                    <div className="relative">
                        <input type="text" placeholder="검색어를 입력하세요" className="w-full" />
                        <button className="absolute right-2 inset-y-0 text-3xl text-g hover:text-white transition-all">
                            <MdSearch />
                        </button>
                    </div>
                    <div className="py-2 text-end">
                        <Link to='new-product'>
                            <button className="mt-4 bg-sub py-2 px-4 rounded-md hover:bg-g transition-all" >상품추가버튼</button>
                        </Link>
                    </div>
                    <ul className="my-4 flex flex-col gap-4">
                        {
                            products && products?.map(({image,name,price,sku,status,stock,_id})=><>
                                <li key={_id} className="flex">
                                    <div className="relative">
                                        <img className="h-44 w-32 object-cover" src={image} alt="" />
                                        <div className="absolute bottom-0 bg-sub w-full text-center py-1">{sku}</div>
                                    </div>
                                    <div className="flex-grow p-4 pl-6 flex flex-col gap-2 text-lg">
                                        <div className="flex gap-4 items-center">
                                            <h4 className="text-xl font-bold">{name}</h4>
                                            <div className={`text-xs font-bold px-4 py-1 rounded-md ${status === 'active' ? 'bg-emerald-500' : 'bg-red-800'}`}>{status}</div>
                                        </div>
                                        <div className="flex-grow"/>
                                        <div className="flex gap-2 items-center">
                                            <MdPriceChange />
                                            <div>{price} 원</div>
                                        </div>
                                        <div className="flex gap-2 items-center">
                                            <MdAutoAwesomeMosaic/>
                                            <ul className="flex gap-2 text-sm">
                                                { Object.entries(stock)?.map((a)=><li key={a[0]} className="border-2 border-sub py-1 px-2 rounded-md">{a[0]} : <span>{a[1]}</span></li>)}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="flex items-end gap-2 py-4">
                                        <button className="bg-sub px-4 py-2 rounded-md hover:bg-g transition-all">UPDATE</button>
                                        <button className="bg-sub px-4 py-2 rounded-md hover:bg-red-800 transition-all">DELETE</button>
                                    </div>
                                </li>
                                <hr className="w-full border-sub"/>
                            </> )
                        }
                    </ul>
                    <ul className="flex gap-2 mx-auto justify-center">
                        <li className="p-2 border-2 border-sub bg-sub hover:bg-sub transition-all">1</li>
                        <li className="p-2 border-2 border-sub  hover:bg-sub transition-all">2</li>
                        <li className="p-2 border-2 border-sub  hover:bg-sub transition-all">3</li>
                        <li className="p-2 border-2 border-sub  hover:bg-sub transition-all">4</li>
                    </ul>
                </div>
            </div>
        </main>
    </>
}

export default AdminProductPage;