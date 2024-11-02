import { useParams } from "react-router-dom";

const a = ['S','M' ,'L']

const DetailPage = () => {
    const { id } = useParams()
    console.log(id)
    return <>
        <div className=" mx-auto max-w-[1000px] min-h-96 flex gap-4">
            <div className="bg-red-950 h-96 min-w-96">
                <img className="max-h-[600px]" src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fb5%2Fa2%2Fb5a2b326d37ab313e82dd41ac8c3aab81839e260.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]" alt="" />
            </div>
            <div className="p-4 flex flex-col">
                <h1 className="text-2xl">코튼 가디건 루즈핏</h1>
                <h4 className="text-3xl font-bold mt-2 mb-10">₩ 69,900</h4>
                <p className="flex-grow">가끔은 일상 속에서 아무 생각 없이 글을 적어보는 것도 재밌는 경험이 될 수 있어요. 이런저런 주제에 구애받지 않고 머릿속에 떠오르는 것들을 자유롭게 풀어내다 보면, 자신의 생각이나 감정을 뜻밖의 방식으로 발견하게</p>
                <div htmlFor="" className="mt-10 flex-grow">사이즈</div>
                <ul className="flex gap-2 mt-2 mb-4">
                    {
                        a.map((a)=><li key={a}>
                            <button className="btn px-8">{a}</button>
                        </li>)
                    }
                </ul>
                <button className="btn py-2">장바구니 추가</button>
            </div>
        </div>
    </>
}

export default DetailPage;