import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useLogin } from "../../utils/query/user";
import { useGetUser } from "../../utils/query/user";
import { Navigate } from "react-router-dom";
import PendingButton from "../../components/PendingButton/PendingButton";
import { GoogleLogin } from '@react-oauth/google';
import { useGoogleLogin } from "../../utils/query/user";

const LoginPage = () => {
    const { register, handleSubmit } = useForm();
    const { mutate : loginMutate, error : loginErr, isPending } = useLogin();
    const { data , isLoading } = useGetUser(); 
    const { mutate : googleLoginMutate } = useGoogleLogin()

    if (isLoading) return <></>
    if (data?.status === 'success') return <Navigate to='/'/>

    return <>
        <div className="max-w-md mx-auto  px-4 py-6 border-2 border-sub">
            <h1 className="text-center text-2xl font-bold mb-10">로그인</h1>
            <form onSubmit={handleSubmit(loginMutate)} className="flex flex-col mb-4">
                <label htmlFor="email">이메일</label>
                <input type='text' className="mb-4 mt-2" required {...register('email')}/>
                <label htmlFor="password">비밀번호</label>
                <input type='password' className="mb-4 mt-2" required {...register('password')}/>
                {loginErr && <span className="text-red-800 text-sm">{loginErr}</span>}
                <PendingButton type="submit" isPending={isPending} className="w-full py-2 mt-4 btn-danger">로그인</PendingButton>
            </form>
            <GoogleLogin
                onSuccess={({credential : token}) => {
                    googleLoginMutate({token})
                }}
                onError={() => {console.log('Login Failed') }}
            />
            <div className="pt-4">
                <Link to='/signUp' className="text-g mt-4">회원가입</Link>
            </div>
        </div>
    </>
}

export default LoginPage;