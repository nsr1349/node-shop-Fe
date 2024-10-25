import { Link } from "react-router-dom";

const SignUpPage = () => {
    return <>
        <div className="max-w-md mx-auto flex flex-col px-4 py-6 border-2 border-sub">
            <h1 className="text-center text-2xl font-bold mb-6">회원가입</h1>
            <form className="flex flex-col mb-4">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" className="mb-4 mt-2 p-2 bg-transparent border-2 border-sub " />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" className="mb-4 mt-2 p-2 bg-transparent border-2 border-sub"/>
                <button type="submit" className="btn">회원가입</button>
            </form>
            <Link to='/login' className="text-g">로그인</Link>
        </div>
    </>
}

export default SignUpPage;