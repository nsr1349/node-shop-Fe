import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
// import PrivateRoute from './components/PrivateRoute.js/PrivateRoute'
import NotFound from './components/NotFound/Notfound'
import MainPage from './pages/MainPage/MainPage'
import SignUpPage from './pages/SignUpPage/SignUp'
import LoginPage from './pages/LoginPage/LoginPage'
import './App.css'

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainPage/>}/>
              <Route path="/login" element={<LoginPage />}/>
              <Route path="/signUp" element={<SignUpPage />}/>
              <Route path="*" element={<NotFound />}/>
            </Routes>
        </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
