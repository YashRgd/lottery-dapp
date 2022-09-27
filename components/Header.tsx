import React from 'react'
import NavButton from './NavButton'
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";
import { useDisconnect, useAddress } from "@thirdweb-dev/react";

function Header() {
    const address = useAddress();
    const disconnect = useDisconnect();
    return (
        <header className="grid grid-cols-2 md:grid-cols-5 justify-between items-center p-5">
            <div className="flex items-center space-x-2">
                <img className="rounded-full h-20 w-20" src="https://i.imgur.com/wI46kGn.png" alt="" />
                <div>
                    <h1 className="text-lg text-white font-bold">Lottery dApp</h1>
                    <p className="test-xs text-emerald-500 truncate">User: {address?.substring(0, 5)}...{address?.substring(address.length, address.length - 5)}</p>
                </div>
            </div>

            <div className="hidden md:flex md:col-span-3 items-center justify-center rounded-md">
                <div className="bg-[#2E0248] p-4 space-x-2">
                    <NavButton isActive title="Buy Tickets" />
                    <NavButton onClick={disconnect} title="Logout" />

                </div>
            </div>

            <div className="flex flex-col ml-auto text-right">
                <Bars3BottomRightIcon className="h-8 w-8 mx-auto text-white cursor-pointer" />
                <span className="md:hidden">
                    <NavButton onClick={disconnect} title="Logout" />
                </span>
            </div>
        </header>
    )
}

export default Header