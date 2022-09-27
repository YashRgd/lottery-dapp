import React from 'react'
import PropagateLoader from "react-spinners/PropagateLoader";

function Loading() {
    return (
        <div className="bg-[#2E0248] h-screen flex flex-col items-center justify-center">
            <div className="flex items-center space-x-2 mb-10">
                <img className="rounded-full h-20 w-20" src="https://i.imgur.com/wI46kGn.png" alt="" />
                <h1 className="text-lg text-white font-bold">Loading the Lottery dApp</h1>
            </div>
            <PropagateLoader color="white" size={30} />
        </div>
    )
}

export default Loading