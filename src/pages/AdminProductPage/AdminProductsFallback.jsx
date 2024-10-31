import React from "react";

const AdminProductsFallback = () => {
    return <ul className="my-4">
        {
            Array.from({ length: 12 }, (_, i) => i + 1).map((a)=><React.Fragment key={a}>
                <li className="flex my-4 animate-pulse" style={{animationDelay : `${a % 2}s`}}>
                    <div className="h-44 w-32 bg-sub"></div>
                    <div className="flex-grow p-4 pl-6 inline-flex flex-col gap-2">
                        <div className="h-8 w-28 bg-sub"></div>
                        <div className="flex-grow "></div>
                        <div className="h-6 w-20 bg-sub"></div>
                        <div className="h-6 w-28 bg-sub"></div>
                    </div>
                    <div className="flex flex-col gap-2 justify-end py-4">
                        <div className="h-8 w-28 bg-sub"></div>
                        <div className="h-8 w-28 bg-sub"></div>
                    </div>
                </li>
                <hr className="border-sub"/>
            </React.Fragment>)
        }
    </ul>
}

export default AdminProductsFallback;