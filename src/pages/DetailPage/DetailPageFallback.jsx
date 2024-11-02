const DetailPageFallback = () => {

    return <>
        <div className=" mx-auto max-w-[1000px] min-h-96 flex gap-4 px-4 animate-pulse">
            <div className="bg-sub h-[500px] min-w-96">
                <div className="max-h-[600px]"/>
            </div>
            <div className="p-4 inline-flex flex-col flex-grow">
                <div className="bg-sub h-10 w-64"/>
                <div className="bg-sub h-10 w-48 mt-2 mb-10"/>
                <div className="bg-sub h-8 w-64 mb-2"/>
                <div className="bg-sub h-8 w-64 mb-10"/>
                <div className="bg-sub h-6 w-20 mb-2"/>
                <ul className="flex gap-2 mb-4">
                    {
                        Array(3).fill(0).map((_, i)=><li key={i} className="bg-sub h-10 w-28" />)
                    }
                </ul>
                <div className="btn py-2 w-full h-12 bg-sub"></div>
            </div>
        </div>
    </>
}

export default DetailPageFallback;