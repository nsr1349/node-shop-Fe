const AdminProductsFallback = () => {
    return <ul className="my-4">
        <li className="flex my-4">
            <div className="h-44 w-32 skeleton"></div>
            <div className="flex-grow p-4 pl-6 inline-flex flex-col gap-2">
                <div className="h-8 w-28 skeleton"></div>
                <div className="flex-grow "></div>
                <div className="h-6 w-20 skeleton"></div>
                <div className="h-6 w-28 skeleton"></div>
            </div>
            <div className="flex flex-col gap-2 justify-end py-4">
                <div className="h-8 w-28 skeleton"></div>
                <div className="h-8 w-28 skeleton"></div>
            </div>
        </li>
        <hr className="border-sub"/>
    </ul>
}

export default AdminProductsFallback;