import { Link } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import { useModal } from "../../components/Modal/useModal";
import AddProductForm from "./components/AddProductForm";
import { RiAdminFill } from "react-icons/ri";
import { AiFillProduct } from "react-icons/ai";
import { MdReorder, MdAutoAwesomeMosaic , MdPriceChange } from "react-icons/md";

const a = ['','']

const AdminPage = () => {
    const { isOpen, openModal, closeModal } = useModal()

    return <main className="flex">
        <Modal closeModal={closeModal} isOpen={isOpen}>
            <AddProductForm/>
        </Modal>
        <aside className="h-screen sticky top-0 left-0 border-r-2 border-sub w-fit py-10 px-4">
            <img src="/logo.png" alt="" className="w-24 mx-auto mb-6"/>
            <nav>
                <ul>
                    <li>
                        <Link className="flex gap-4 items-center  px-4 py-3 rounded-md mb-2 hover:bg-sub transition-all" >
                            <RiAdminFill/>
                            <p>Admin account</p>
                        </Link>
                    </li>
                    <li>
                        <Link className="flex gap-4 items-center px-4 py-3 bg-sub rounded-md mb-2 hover:bg-sub transition-all">
                            <AiFillProduct/>
                            <p>Product</p>
                        </Link>
                    </li>
                    <li>
                        <Link className="flex gap-4 items-center px-4 py-3 rounded-md mb-2 hover:bg-sub transition-all"> 
                            <MdReorder/>
                            <p>Order</p>
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
        <div className="min-h-screen flex-grow pt-20">
            <div className="w-11/12 max-w-5xl mx-auto">
                <div className="">search bar</div>
                <button className="bg-sub mt-2 py-2 px-4 rounded-md hover:bg-g transition-all" onClick={()=> openModal()}>상품추가버튼</button>
                <ul className="my-6">
                    {
                        a.map((_,i)=> <li key={i} className="flex border-b-2 border-sub">
                        <div className="relative">
                            <img className="h-48 w-36 object-cover " src="https://res.cloudinary.com/dyoj0undj/image/upload/v1679837632/ophtekkvf1oyhya8fdwe.jpg" alt="" />
                            <div className="absolute bottom-0 bg-sub w-full text-center py-1">sku008</div>
                        </div>
                        <div className="flex-grow p-4 flex flex-col gap-2 text-lg">
                            <div className="flex gap-5 items-center">
                                <h4 className="text-xl font-bold">멋있는 자캣</h4>
                                <div className="text-xs font-bold bg-emerald-500 px-4 py-1 rounded-md">ACTIVE</div>
                            </div>
                            <div className="flex-grow"/>
                            <div className="flex gap-2 items-center">
                                <MdPriceChange />
                                <div>32000 원</div>
                            </div>
                            <div className="flex gap-2 items-center">
                                <MdAutoAwesomeMosaic/>
                                <ul className="flex gap-2 text-sm">
                                    <li className="border-2 border-sub py-1 px-2 rounded-md">S : <span>56</span></li>
                                    <li className="border-2 border-sub py-1 px-2 rounded-md">S : <span>56</span></li>
                                    <li className="border-2 border-sub py-1 px-2 rounded-md">S : <span>56</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex items-end gap-2 py-4">
                            <button className="bg-sub px-4 py-2 rounded-md hover:bg-g transition-all">UPDATE</button>
                            <button className="bg-sub px-4 py-2 rounded-md hover:bg-red-800 transition-all">DELETE</button>
                        </div>
                    </li>)
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
}

export default AdminPage;