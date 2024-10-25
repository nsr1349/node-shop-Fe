import { Link } from "react-router-dom";

const LoginPage = () => {
    return <>
        
        <div className="max-w-md mx-auto flex flex-col px-4 py-6 border-2 border-sub">
            <h1 className="text-center text-2xl font-bold mb-6">로그인</h1>
            <form className="flex flex-col mb-4">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" className="mb-4 mt-2 p-2 bg-transparent border-2 border-sub " />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" className="mb-4 mt-2 p-2 bg-transparent border-2 border-sub"/>
                <button type="submit" className="btn">로그인</button>
            </form>
            <Link to='/signUp' className="text-g">회원가입</Link>
        </div>


    </>
}

export default LoginPage;