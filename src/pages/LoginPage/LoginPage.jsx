import { Link , useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { LoginApi } from "../../utils/api/userApi";
import { useState } from "react";
import api from "../../utils/api/api";

const loginInputs = [
    {
        label : '이메일',
        id : 'email',
        type : 'text',
    },
    {
        label : '비밀번호',
        id : 'password',
        type : 'password',
    }
]

const LoginPage = () => {
    const { register, handleSubmit } = useForm();
    const [ err , setErr ] = useState(null)
    const navigate = useNavigate()

    const handleOnSubmit = async ({ email, password}) => {    
        const { status , err, data } = await LoginApi({ email, password})

        if (status === 200) {
            sessionStorage.setItem("token", data.token )
            api.defaults.headers["authorization"] = "Bearer " + data.token
            navigate('/')
        }else {
            setErr(err)
        }
    }

    return <>
        <div className="max-w-md mx-auto flex flex-col px-4 py-6 border-2 border-sub">
            <h1 className="text-center text-2xl font-bold mb-10">로그인</h1>
            <form onSubmit={handleSubmit(handleOnSubmit)}>
                {
                    loginInputs.map(({label, type, id})=> <div key={id} className="flex flex-col">
                        <label htmlFor="name">{label}</label>
                        <input type={type} className="mb-4 mt-2" required {...register(id)}/>
                    </div>)
                }
                {err && <span className="mb-4 text-red-800 text-sm">{err}</span>}
                <button type="submit" className="btn w-full">로그인</button>
            </form>
            <Link to='/login' className="text-g mt-4">회원가입</Link>
        </div>
    </>
}

export default LoginPage;