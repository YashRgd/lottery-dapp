import React from 'react';
import { StarIcon, CurrencyDollarIcon, ArrowPathIcon, ArrowUturnDownIcon } from "@heroicons/react/24/solid";
import { useContract, useContractRead, useContractWrite } from '@thirdweb-dev/react';
import { ethers } from 'ethers';
import { currency } from '../constants';
import toast from "react-hot-toast";
import { info } from 'console';

function AdminControls() {
    const { contract, isLoading } = useContract(process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS);
    const { data: totalCommission } = useContractRead(contract, "operatorTotalCommission");

    const { mutateAsync: DrawWinnerTicket } = useContractWrite(contract, "DrawWinnerTicket");
    const { mutateAsync: RefundAll } = useContractWrite(contract, "RefundAll");
    const { mutateAsync: RestartDraw } = useContractWrite(contract, "restartDraw");
    const { mutateAsync: WithdrawCommission } = useContractWrite(contract, "WithdrawCommission");

    const drawWinner = async () => {
        const notification = toast.loading("Picking a Lucky Winner");

        try {
            const data = await DrawWinnerTicket([{}]);

            toast.success("A winner has been selected!", {
                id: notification
            });
            console.info("contract call success", data);
        } catch (err) {
            toast.error("Whoops, something went wrong!", {
                id: notification,
            });

            console.error("contract call failure: ", err);
        }
    }

    const onWithdrawCommission = async () => {
        const notification = toast.loading("Withdrawing Commission");

        try {
            const data = await WithdrawCommission([{}]);

            toast.success("Commission withdrawn successfully!", {
                id: notification
            });
            console.info("contract call success", data);
        } catch (err) {
            toast.error("Whoops, something went wrong!", {
                id: notification,
            });

            console.error("contract call failure: ", err);
        }
    }

    const onRestartDraw = async () => {
        const notification = toast.loading("Restarting new draw");

        try {
            const data = await RestartDraw([{}]);

            toast.success("Draw restarted successfully!", {
                id: notification
            });
            console.info("contract call success", data);
        } catch (err) {
            toast.error("Whoops, something went wrong!", {
                id: notification,
            });

            console.error("contract call failure: ", err);
        }
    }
    const onRefundAll = async () => {
        const notification = toast.loading("Refunding everyone's funds");

        try {
            const data = await RefundAll([{}]);

            toast.success("Refunded everyone successfully!", {
                id: notification
            });
            console.info("contract call success", data);
        } catch (err) {
            toast.error("Whoops, something went wrong!", {
                id: notification,
            });

            console.error("contract call failure: ", err);
        }
    }


    return (
        <div className='text-white text-center px-5 py-3 rounded-md border-pink-300/20 border'>
            <h2 className='font-bold'>Admin Controls</h2>
            <p className='mb-5'>Total Commission to be withdrawn:{" "} {totalCommission && ethers.utils.formatEther(totalCommission.toString())}{" "}{currency}</p>

            <div className='flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2'>
                <button onClick={drawWinner} className='admin-button hover:bg-pink-500/50'>
                    <StarIcon className='h-6 mx-auto mb-2' />
                    Draw Winner</button>
                <button onClick={onWithdrawCommission} className='admin-button hover:bg-pink-500/50'>
                    <CurrencyDollarIcon className='h-6 mx-auto mb-2' />
                    Withdraw Commision</button>
                <button onClick={onRestartDraw} className='admin-button hover:bg-pink-500/50'>
                    <ArrowPathIcon className='h-6 mx-auto mb-2' />
                    Restart Draw</button>
                <button onClick={onRefundAll} className='admin-button hover:bg-pink-500/50'>
                    <ArrowUturnDownIcon className='h-6 mx-auto mb-2' />
                    Refund All</button>
            </div>
        </div>
    )
}

export default AdminControls