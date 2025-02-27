"use client"
import React from 'react';
import { createTask } from "@/utils/actions";
import Link from "next/link";
import {useRouter} from "next/navigation";

const LookingToSell = () => {
    const router = useRouter();
    return (
        <form action={createTask}>
            <h2 className="text-center font-extrabold mb-3">How Soon Are You Looking to Sell?</h2>
            <div className="flex flex-col w-full mb-8">
                <Link href="/whySellPropertyForm">
                    <button type="submit" className="btn btn-secondary btn-nav-lg w-full mb-2 text-center">
                        ASAP
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </button>
                </Link>
                <Link href="/whySellPropertyForm">
                    <button type="submit" className="btn btn-secondary btn-nav-lg w-full mb-2 text-center">
                        1-2 Months
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </button>
                </Link>
                <Link href="/whySellPropertyForm">
                    <button type="submit" className="btn btn-secondary btn-nav-lg w-full mb-2 text-center">
                        3-5 Months
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </button>
                </Link>
                <Link href="/whySellPropertyForm">
                    <button type="submit" className="btn btn-secondary btn-nav-lg w-full mb-2 text-center">
                        6+ Months
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </button>
                </Link>
            </div>
            <button type="button" className="btn btn-neutral max-w-28 mt-2 flex items-center" onClick={() => router.back()}>
                Go Back
            </button>
        </form>
    );
};

export default LookingToSell;