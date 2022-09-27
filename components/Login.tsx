import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import React from 'react'

function Login() {
    const address = useAddress();
    return (
        <div className="bg-[#2E0248] min-h-screen flex flex-col items-center justify-center text-center">
            <div className="flex flex-col items-center mb-10">
                <img className="rounded-full h-56 w-56 mb-10" src="https://i.imgur.com/wI46kGn.png" alt="" />
                <h1 className="text-6xl text-white font-bold">The Lottery dApp</h1>
                <h2 className="text-white mt-2">Get Started by logging in with your Metamask</h2>

                {/* <button className="bg-white px-8 py-5 mt-10 rounded-lg shadow-lg font-bold">Login with Metamask</button> */}
                <ConnectWallet className="bg-white px-8 py-5 mt-10 rounded-lg shadow-lg font-bold" colorMode="light" />
            </div>
        </div>
    )
}

export default Login