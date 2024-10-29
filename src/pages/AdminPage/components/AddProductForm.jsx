import { useState } from "react";
import { MdDelete, MdAdd, MdClose  } from "react-icons/md";
import CloudinaryUploadWidget from "../../../components/CloudinaryUploadWidget/CloudinaryUploadWidget";
import { useForm } from "react-hook-form";
import { useCreateProuct } from "../../../utils/query/product";
import PendingButton from "../../../components/PendingButton/PendingButton";

const categorieOptions = ['top', 'dress', 'bottom']

const AddProductForm = () => {
    const [ image, setImage ] = useState(null)
    const [ categories, setCategories ] = useState([categorieOptions[0]])
    const [ stocks, setStocks ] = useState([{ size : null , qty : 0}])
    const { register, handleSubmit } = useForm();
    const { error, isPending, mutate } = useCreateProuct()

    const submit = (formData) => {
        mutate({ formData, image, categories, stocks }) 
    }   

    const handleAddCategorie = ({target}) => {
        const newValue = target.value;
        if (categorieOptions.includes(newValue) && !categories.includes(newValue)) 
            setCategories([...categories, newValue])
    }

    const handleSizeChange = (e, index) => {
        const newStocks = stocks.map((stock, i) => 
            i === index ? { ...stock, size: e.target.value } : stock
        )
        setStocks(newStocks);
    };

    const handleStockValue = (e, index) => {
        const newStocks = stocks.map((stock, i) => 
            i === index ? { ...stock, qty: parseInt(e.target.value) } : stock
        )
        setStocks(newStocks);
    };  

    return <form className="" onSubmit={handleSubmit(submit)}>
        <h2 className="p-6 py-4 border-b-2 border-sub font-bold text-lg">상품 추가</h2>
        <div className="p-6 py-4 text-sm">
            <div className="flex gap-4">
                <div>
                    <div className="mb-2">이미지</div>
                    <CloudinaryUploadWidget 
                        image={image} 
                        uploadImage={setImage}
                    />
                </div>
                <div className="flex flex-col h-fit ">
                    <label htmlFor="" >SKU</label>
                    <input type="text" className="my-2" required {...register('sku')}/>
                    <label htmlFor="" >Name</label>
                    <input type="text" className="my-2" required {...register('name')}/>
                    <label htmlFor="" >price</label>
                    <input type="text" className="my-2" required {...register('price')}/>
                    <label htmlFor="" >active</label>
                    <input type="text" className="my-2" required {...register('status')}/>
                </div>
            </div>
    
            <div className="mt-4 flex gap-4 items-center">
                <div>카테고리</div>
                <select id="categories" className="bg-transparent border-2 border-sub p-2 text-xs" onChange={handleAddCategorie}>
                    { categorieOptions.map((a)=> <option key={a} value={a}>{a}</option>)}
                </select>
            </div>
            <div className="my-2 flex gap-2" >
                {
                    categories.length !== 0 && categories.map((option)=>              
                    <div key={option} className="inline-flex gap-2 py-1 px-2 bg-sub rounded-md" onClick={()=> setCategories(categories.filter((el) => el !== option))}>
                        <div>{option}</div>
                        <button type="button" ><MdClose/></button>
                    </div>)
                }
            </div>
            <div className="my-2 mt-6">상품재고</div>
            {
                stocks.map(({ qty } , i)=> <div key={i} className="flex gap-4">
                    <select className="bg-transparent border-2 border-sub p-2 text-xs" onChange={(e)=> handleSizeChange(e, i)}>
                        <option value={null}>옵션을 선택해주세요</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                    </select>
                    <input type="number" defaultValue={qty} onChange={(e)=> handleStockValue(e ,i)}/>
                    <div className="bg-sub hover:bg-red-900 transition-all px-3 center" onClick={()=> setStocks(stocks.filter((_, index) => index !== i))}>
                        <MdDelete size={20}/>
                    </div>
                </div>)
            }
            <div type="submit" className="mt-2 py-2 bg-sub w-full center hover:bg-g transition-all" onClick={()=> setStocks([...stocks, { size : null , qty : 0}])}>
                <MdAdd/>
            </div>
            <div className="my-2 mt-4">description</div>
            <textarea className="p-2 w-full bg-transparent border-2 border-sub" required {...register('description')}/>
            
            <div className="flex items-center justify-between">
                <div className="text-red-800">{error?.message}</div>
                <PendingButton isPending={isPending} className="my-2 px-6 py-2 bg-sub hover:bg-g transition-all">
                    저장
                </PendingButton>
            </div>
        </div>
    </form>
}

export default AddProductForm;