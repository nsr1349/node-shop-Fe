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
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import { ToastContainer } from 'react-toastify';

function App() {

    return (
        <>
            <BrowserRouter>
                <ToastContainer />
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/login" element={<LoginPage />}/>
                    <Route path="/cart" element={<CartPage />}/>
                    <Route path="/signUp" element={<SignUpPage />}/>
                    <Route path="/admin" element={<AdminLayout />}>
                        <Route path="" element={<AdminAccountPage/>}/>
                        <Route path="product" element={<AdminProductPage/>}>
                            <Route path="manage" element={<AdminProductManagePage/>}/>
                        </Route>
                        <Route path="order" element={<AdminOrderPage/>}/> 
                    </Route>
                    <Route path="*" element={<NotFound />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
