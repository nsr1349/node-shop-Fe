import { MdAutoAwesomeMosaic , MdPriceChange } from "react-icons/md";
import { useLocation, Link } from "react-router-dom"; 
import { useGetProduct } from "../../utils/query/product";
import AdminProductsFallback from "./AdminProductsFallback";
import PageNationBar from "../../components/PageNationBar/PageNationBar";
import React from "react";


const AdminProductList = () => {
    const { state } = useLocation();
    const { page = 1, q } = state || { page : 1 , q : undefined }
    const { data, isLoading  } = useGetProduct({page, q, size : 5})
    const { products, totalPageNum } = data?.data || {}


    if (isLoading) return <AdminProductsFallback/>

    if (products?.length === 0) return <div className="center mt-10">결과없음</div>


    return <>
            <ul className="my-4 flex flex-col gap-4">
            {
                products.map(({image,name,price,sku,status,stock,_id,description, category})=><React.Fragment key={_id}>
                    <li className="flex sm:flex-col">
                        <div className="flex flex-grow">
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
                        </div>
                        <div className="flex items-end gap-2 py-4 sm:justify-end">
                            <Link to='manage' state={{image, name, price, sku, status, stock, _id , description, category, page, q }} className="bg-sub px-4 py-2 rounded-md hover:bg-g transition-all sm:w-full text-center">UPDATE</Link>
                            <Link to='delete' state={{ name, _id , page, q }} className="bg-sub px-4 py-2 rounded-md hover:bg-red-800 transition-all sm:w-full text-center">DELETE</Link>
                        </div>
                    </li>
                    <hr className="w-full border-sub"/>
                </React.Fragment>)
            }
            </ul>
            <PageNationBar page={page} totalPageNum={totalPageNum} state={{q}}/>
    </>
}

export default AdminProductList;