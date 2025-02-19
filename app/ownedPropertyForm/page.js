"use client"
import React from 'react';
import { createTask } from "@/utils/actions";
import Link from "next/link";

const ownedPropertyForm = () => {
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
        </form>
    );
};

export default ownedPropertyForm;