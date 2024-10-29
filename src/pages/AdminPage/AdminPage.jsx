import { Link } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import { useModal } from "../../components/Modal/useModal";
import AddProductForm from "./components/AddProductForm";

const AdminPage = () => {
    const { isOpen, openModal, closeModal } = useModal()

    return <main className="flex">
        <Modal closeModal={closeModal} isOpen={isOpen}>
            <AddProductForm/>
        </Modal>
        <aside className="h-screen sticky top-0 left-0 border-2 border-red-300 w-fit py-10 px-6">
            <div>로고</div>
            <nav>
                <ul>
                    <li>
                        <Link className="flex gap-2">
                            <div>아이콘</div>
                            <p>Admin account</p>
                        </Link>
                    </li>
                    <li>
                        <Link className="flex gap-2">
                            <div>아이콘</div>
                            <p>Admin account</p>
                        </Link>
                    </li>
                    <li>
                        <Link className="flex gap-2"> 
                            <div>아이콘</div>
                            <p>Admin account</p>
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
        <div className="min-h-screen flex-grow pt-20">
            <div className="border-2 border-red-900 w-11/12 max-w-5xl mx-auto">
                <div>search bar</div>
                <ul>
                    <li>아이템</li>
                </ul>
                <button>추가버튼</button>
                <button onClick={()=> openModal()}>열려라</button>
            </div>
        </div>
    </main>
}

export default AdminPage;