import { useLocation, Link } from "react-router-dom";
import { useDeleteProduct } from "../../utils/query/product";
import PendingButton from "../../components/PendingButton/PendingButton";

const AdminProductDeletePage = () => {
    const { state } = useLocation();
    const { _id, name } = state || {}
    const { mutate , error, isPending } = useDeleteProduct()

    return <div className="fixed top-0 left-0 w-full h-full grid place-items-center z-40">
        <Link to={-1} className="w-full h-full bg-[rgba(0,0,0,0.5)]"/>
        <div className='fixed bg-main scale-up transition-all max-h-[95%] overflow-y-scroll none-scrollbar' >
                {
                    <div className="p-4">
                        <h1 className="mb-5">{name} 을(를) 삭제하시겠습니까?</h1>
                        { error && <span>{error}</span> }
                        <PendingButton isPending={isPending} className="border-2 border-sub py-2 hover:bg-red-800 transition-all w-full" onClick={()=> mutate(_id)}>삭제</PendingButton>
                    </div>
                }
        </div>
    </div>
}

export default AdminProductDeletePage;