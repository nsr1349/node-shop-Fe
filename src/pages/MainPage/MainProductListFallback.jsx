const MainProductListFallback = () => {
    return <>
        <div className='my-6 gap-4 custom-grid'>
        {
            Array(12).fill(1)?.map((_,i)=> <div key={i} className="border-b-2 border-sub max-w-[230px] animate-pulse" style={{animationDelay : `${i % 2}s`}}>
                <div className="h-[340px] w-full bg-sub"/>
                <div className="py-3 px-2">
                    <div className="font-bold mb-2 bg-sub w-24 h-6"/>
                    <div className="bg-sub w-14 h-6"/>
                </div>
            </div>)
        }
        </div>
    </>
}

export default MainProductListFallback;

