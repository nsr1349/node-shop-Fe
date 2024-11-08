import { Route, BrowserRouter, Routes } from 'react-router-dom'
import NotFound from './components/NotFound/Notfound'
import MainPage from './pages/MainPage/MainPage'
import SignUpPage from './pages/SignUpPage/SignUp'
import LoginPage from './pages/LoginPage/LoginPage'
import CartPage from './pages/CartPage/CartPage'
import AdminLayout from './pages/AdminLayout/AdminLayout'
import AdminAccountPage from './pages/AdminAccountPage/AdminAccountPage'
import AdminProductPage from './pages/AdminProductPage/AdminProductPage'
import AdminOrderPage from './pages/AdminOrderPage/AdminOrderPage'
import AdminProductManagePage from './pages/AdminProductManagePage/AdminProductManagePage'
import AdminProductDeletePage from './pages/AdminProductDeletePage/AdminProductDeletePage'
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import { ToastContainer } from 'react-toastify';
import MainLayout from './components/Layout/MainLayout'
import DetailPage from './pages/DetailPage/DetailPage'
import OrderPage from './pages/OrderPage/OrderPage'
import OrderSuccessPage from './pages/OrderSuccessPage/OrderSuccessPage'
import MyOrderPage from './pages/MyOrderpage/MyOrderPage'
import AdminOrderManage from './pages/AdminOrderPage/AdminOrderManage'
// import { useGetUser } from './utils/query/user'

function App() {
    // const { data } = useGetUser()
    
    return (
        <>
            <BrowserRouter>
                <ToastContainer />
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route path="/" element={<MainPage/>}/>
                        <Route path="/detail/:id" element={<DetailPage/>}/>
                        <Route path="/cart" element={<CartPage />}/>
                        <Route path="/order" element={<OrderPage/>}/>
                        <Route path="/order/success" element={<OrderSuccessPage/>}/>
                        <Route path="/my-order" element={<MyOrderPage/>}/>
                        <Route path="/signUp" element={<SignUpPage />}/>
                        <Route path="/login" element={<LoginPage />}/>
                    </Route>
                    <Route path="/admin" element={<AdminLayout />}>
                        <Route path="" element={<AdminAccountPage/>}/>
                        <Route path="product" element={<AdminProductPage/>}>
                            <Route path="manage" element={<AdminProductManagePage/>}/>
                            <Route path="delete" element={<AdminProductDeletePage/>}/>
                        </Route>
                        <Route path="order" element={<AdminOrderPage/>}>
                            <Route path="manage" element={<AdminOrderManage/>}/>
                        </Route>
                    </Route>
                    <Route path="*" element={<NotFound />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
