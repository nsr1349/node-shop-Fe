
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import NotFound from './components/NotFound/Notfound'
import MainPage from './pages/MainPage/MainPage'
import SignUpPage from './pages/SignUpPage/SignUp'
import LoginPage from './pages/LoginPage/LoginPage'
import CartPage from './pages/CartPage/CartPage'
import AdminPage from './pages/AdminPage/AdminPage'
import './App.css'

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/login" element={<LoginPage />}/>
                    <Route path="/cart" element={<CartPage />}/>
                    <Route path="/signUp" element={<SignUpPage />}/>
                    <Route path="/admin" element={<AdminPage />}/>
                    <Route path="*" element={<NotFound />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
