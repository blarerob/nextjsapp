"use client"
import React from 'react';
import { createTask } from "@/utils/actions";
import Link from "next/link";
import { useRouter } from 'next/navigation';

const Counter = () => {
    const router = useRouter();

    return (
        <form action={createTask}>
            <h2 className="text-center font-extrabold mb-2">Is the Property Currently Occupied?</h2>
            <div className="flex flex-col w-full mb-8">
                <Link href="/conditionOfPropertyForm" type="button" className="btn btn-secondary btn-nav-lg w-full mb-2">
                    <button type="submit" className="btn btn-secondary btn-nav-lg w-full mb-2">
                        Owner Occupied
                    </button>
                </Link>
                <Link href="/conditionOfPropertyForm" type="button" className="btn btn-secondary btn-nav-lg w-full mb-2">
                    <button type="submit" className="btn btn-secondary btn-nav-lg w-full mb-2">
                        Tenant Occupied
                    </button>
                </Link>
                <Link href="/conditionOfPropertyForm" type="button" className="btn btn-secondary btn-nav-lg w-full mb-2">
                    <button type="submit" className="btn btn-secondary btn-nav-lg w-full mb-2">
                        Not Occupied
                    </button>
                </Link>
            </div>
            <button type="button" className="btn btn-neutral max-w-28 mt-2 flex items-center" onClick={() => router.back()}>
                Go Back
            </button>
        </form>
    );
};

export default Counter;