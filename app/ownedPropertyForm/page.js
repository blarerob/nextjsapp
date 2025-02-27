"use client"
import React from 'react';
import { createTask } from "@/utils/actions";
import Link from "next/link";
import { useRouter } from 'next/navigation';


const OwnedPropertyForm = () => {
    const router = useRouter();

    return (
        <form action={createTask}>
            <h2 className="text-center font-extrabold mb-2">How Long Have You Owned the Property?</h2>
            <div className="flex flex-col w-full mb-8">
                <Link href="/lookingToSellForm">
                    <button type="submit" className="btn btn-secondary btn-nav-lg w-full mb-2 text-center">
                        0-5 Years
                    </button>
                </Link>
                <Link href="/lookingToSellForm">
                    <button type="submit" className="btn btn-secondary btn-nav-lg w-full mb-2 text-center">
                        5-15 Years
                    </button>
                </Link>
                <Link href="/lookingToSellForm">
                    <button type="submit" className="btn btn-secondary btn-nav-lg w-full mb-2 text-center">
                        15-30 Years
                    </button>
                </Link>
                <Link href="/lookingToSellForm">
                    <button type="submit" className="btn btn-secondary btn-nav-lg w-full mb-2 text-center">
                        30+ Years
                    </button>
                </Link>
            </div>
            <button type="button" className="btn btn-neutral max-w-28 mt-2 flex items-center mb-16 fixed bottom-0 left-9 right-0" onClick={() => router.back()}>
                Go Back
            </button>
        </form>
    );
};

export default OwnedPropertyForm;