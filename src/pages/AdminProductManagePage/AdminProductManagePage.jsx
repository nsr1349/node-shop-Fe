import { useState } from "react";
import { MdDelete, MdAdd, MdClose  } from "react-icons/md";
import CloudinaryUploadWidget from "../../components/CloudinaryUploadWidget/CloudinaryUploadWidget";
import { useForm } from "react-hook-form";
import { useCreateProuct, useUpdateProduct } from "../../utils/query/product";
import PendingButton from "../../components/PendingButton/PendingButton";
import { Link, useLocation } from "react-router-dom";

const categorieOptions = ['top', 'dress', 'bottom']
const stockSizeOptions = ['XS', 'S', 'M' ,'L', 'XL']
const initFormState = { 
    sku : 'sku0', 
    name : '',  
    image : null ,
    category : [categorieOptions[0]] ,
    description : '', 
    price : 0, 
    stock : { XS : 0 } ,
    status : 'active'
}

const AdminProductManagePage = () => {
    const { state } = useLocation();
    const { sku , name, image : initImage, category : initCategory, description, price, stock, status, _id } = state || initFormState
    const [ image, setImage ] = useState(initImage)
    const [ category, setCategory ] = useState(initCategory)
    const [ stocks, setStocks ] = useState(Object.entries(stock).map(([size, qty]) => ({ size, qty })))
    const { register, handleSubmit } = useForm();
    const { error : createErr, isPending : isCreatePending, mutate : createMutate } = useCreateProuct()
    const { error : updateErr, isPending : isUpdatePending, mutate : updateMutate } = useUpdateProduct()

    const submit = (formData) => {
    
        if (_id){
            updateMutate({_id, ...formData, image, category, stocks }) 
        }else {
            createMutate({ ...formData, image, category, stocks }) 
        }
    }   

    const handleAddCategorie = ({target}) => {
        const newValue = target.value;
        if (categorieOptions.includes(newValue) && !category.includes(newValue)) 
            setCategory([...category, newValue])
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

    return <div className="fixed top-0 left-0 w-full h-full grid place-items-center z-40">
        <Link to={-1} className="w-full h-full bg-[rgba(0,0,0,0.5)]"/>
        <div className='fixed bg-main scale-up transition-all max-h-[95%] overflow-y-scroll none-scrollbar' >
            <form onSubmit={handleSubmit(submit)}>
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
                            <input type="text" className="my-2" defaultValue={sku} required {...register('sku')}/>
                            <label htmlFor="" >Name</label>
                            <input type="text" className="my-2" defaultValue={name} required {...register('name')}/>
                            <label htmlFor="" >price</label>
                            <input type="number" className="my-2" defaultValue={price} required {...register('price')}/>
                            <label htmlFor="" >active</label>
                            <select className="my-2 bg-transparent border-2 border-sub py-2 px-2" defaultValue={status} required {...register('status')}>
                                <option value="active">active</option>
                                <option value="inactive">inactive</option>    
                            </select>
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
                            category.length !== 0 && category.map((option)=>              
                            <div key={option} className="inline-flex gap-2 py-1 px-2 bg-sub rounded-md">
                                <div>{option}</div>
                                <button type="button" onClick={()=> setCategory(category.filter((el) => el !== option))}><MdClose/></button>
                            </div>)
                        }
                    </div>
                    <div className="my-2 mt-6">상품재고</div>
                    {
                        stocks.map(({ size, qty } , i)=> <div key={i} className="flex gap-4 mt-1">
                            <select className="bg-transparent border-2 border-sub p-2 text-xs" defaultValue={size} onChange={(e)=> handleSizeChange(e, i)}>
                                <option value={null}>옵션을 선택해주세요</option>
                                { stockSizeOptions.map((size)=><option 
                                    key={size} 
                                    value={size}
                                    disabled={stocks.some(({size : targetSize})=> targetSize === size)}
                                >
                                    {size}
                                </option>) }
                            </select>
                            <input type="number" defaultValue={qty} onChange={(e)=> handleStockValue(e ,i)}/>
                            <div className="bg-sub hover:bg-red-900 transition-all px-3 center" onClick={()=> stocks.length > 1 && setStocks(stocks.filter((_, index) => index !== i))}>
                                <MdDelete size={20}/>
                            </div>
                        </div>)
                    }
                    <button type="button" className="mt-2 py-2 bg-sub w-full center hover:bg-g transition-all" onClick={()=> stockSizeOptions.length > stocks.length && setStocks([...stocks, { size : null , qty : 0}])}>
                        <MdAdd/>
                    </button>
                    <div className="my-2 mt-4">description</div>
                    <textarea className="p-2 w-full bg-transparent border-2 border-sub" defaultValue={description} required {...register('description')}/>
                    
                    <div className="flex items-center justify-between">
                        <div className="text-red-800">{createErr?.message || updateErr?.message  }</div>
                        <PendingButton isPending={isUpdatePending || isCreatePending} className="my-2 px-6 py-2 bg-sub hover:bg-g transition-all">{_id ? '업데이트' : '새로추가'}</PendingButton>
                    </div>
                </div>
            </form>
        </div>
    </div>
}

export default AdminProductManagePage;