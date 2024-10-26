import { Link  } from "react-router-dom";
import { useForm } from "react-hook-form";
import generateNickname from "../../utils/fn/generateNickname";
import { useSignUp } from "../../utils/query/user";

const signUpInputs = [
    {
        label : '닉네임',
        id : 'name',
        type : 'text',
        validationText : '(한글 혹은 영어)',
        value : generateNickname()
    },
    {
        label : '이메일',
        id : 'email',
        type : 'text',
    },
    {
        label : '비밀번호',
        id : 'password',
        type : 'password',
        validationText : '(영어와 숫자 조합으로 8자리 이상)'
    },
    {
        label : '비밀번호 재입력',
        id : 'password2',
        type : 'password',
    },
]

const SignUpPage = () => {
    const { register, handleSubmit } = useForm();
    const { mutate, error, isPending } = useSignUp();

    return <>
        <div className="max-w-md mx-auto flex flex-col px-4 py-6 border-2 border-sub">
            <h1 className="text-center text-2xl font-bold mb-10">회원가입</h1>
            <form onSubmit={handleSubmit(mutate)}>
                {
                    signUpInputs.map(({label, type, id, validationText, value})=> <div key={id} className="flex flex-col">
                        <label htmlFor="name">{label} <span className="text-g text-sm">{validationText}</span></label>
                        <input type={type} className="mb-4 mt-2" required defaultValue={value} {...register(id)}/>
                    </div>)
                }
                {error && <span className="text-red-800 text-sm">{error}</span>}
                <button type="submit" className="btn w-full mt-4">
                    { isPending ? <div className="loader scale-50 mx-auto my-1"/> : '회원가입'}
                </button>            
            </form>
            <Link to='/login' className="text-g mt-4">로그인</Link>
        </div>
    </>
}

export default SignUpPage;