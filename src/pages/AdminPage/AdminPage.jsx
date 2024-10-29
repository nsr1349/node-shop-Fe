import { Link } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import { useModal } from "../../components/Modal/useModal";
import AddProductForm from "./components/AddProductForm";
import { RiAdminFill } from "react-icons/ri";
import { AiFillProduct } from "react-icons/ai";
import { MdReorder } from "react-icons/md";

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
                            <p>product</p>
                        </Link>
                    </li>
                    <li>
                        <Link className="flex gap-4 items-center px-4 py-3 rounded-md mb-2 hover:bg-sub transition-all"> 
                            <MdReorder/>
                            <p>order</p>
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
        <div className="min-h-screen flex-grow pt-20">
            <div className="border-2 border-red-900 w-11/12 max-w-5xl mx-auto">
                <div className="mb-4">search bar</div>
                <ul>
                    <li className="b-test flex">
                        <div>
                            <img src="" alt="" />
                            <div>sku008</div>
                        </div>
                        <div className="flex-grow">
                            <div className="flex gap-2">
                                <h4>멋있는 자캣</h4>
                                <div>ACTIVE</div>
                            </div>
                            <div className="flex gap-2">
                                <div>icon</div>
                                <div>32000 원</div>
                            </div>
                            <div className="flex gap-2">
                                <div>icon</div>
                                <ul className="flex gap-2">
                                    <li>S : <span>56</span></li>
                                    <li>S : <span>56</span></li>
                                    <li>S : <span>56</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex items-end">
                            <button className="b-test ">UPDATE</button>
                            <button>DELETE</button>
                        </div>
                    </li>
                </ul>
                <button className="bg-sub mt-4 py-2 px-4 rounded-md hover:bg-g transition-all" onClick={()=> openModal()}>상품추가버튼</button>
            </div>
        </div>
    </main>
}

export default AdminPage;