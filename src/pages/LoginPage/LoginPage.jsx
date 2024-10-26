import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useLogin } from "../../utils/query/user";

const LoginPage = () => {
    const { register, handleSubmit } = useForm();
    const { mutate, error, isPending } = useLogin();
    
    return <>
        <div className="max-w-md mx-auto  px-4 py-6 border-2 border-sub">
            <h1 className="text-center text-2xl font-bold mb-10">로그인</h1>
            <form onSubmit={handleSubmit(mutate)} className="flex flex-col mb-4">
                <label htmlFor="email">이메일</label>
                <input type='text' className="mb-4 mt-2" required {...register('email')}/>
                <label htmlFor="password">비밀번호</label>
                <input type='password' className="mb-4 mt-2" required {...register('password')}/>
                {error && <span className="text-red-800 text-sm">{error}</span>}
                <button type="submit" className="btn w-full mt-4">
                    { isPending ? <div className="loader scale-50 mx-auto my-1"/> : '로그인'}
                </button>
            </form>
            <Link to='/signUp' className="text-g">회원가입</Link>
        </div>
    </>
}

export default LoginPage;