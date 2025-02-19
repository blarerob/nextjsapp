"use client"
import React from 'react';
import { createTask } from "@/utils/actions";
import Link from "next/link";

const WhySellPropertyForm = () => {
    return (
        <form action={createTask}>
            <h2 className="text-center font-extrabold mb-2">Why Are You Looking to Sell Your Property?</h2>
            <div className="flex flex-col w-full mb-8">
                <Link href="/addressOfPropertyForm" type="button" className="btn btn-secondary btn-nav-lg w-full mb-2">
                    <button type="submit" className="btn btn-secondary btn-nav-lg w-full mb-2 text-center">
                        Foreclosure
                    </button>
                </Link>
                <Link href="/addressOfPropertyForm" type="button" className="btn btn-secondary btn-nav-lg w-full mb-2">
                    <button type="submit" className="btn btn-secondary btn-nav-lg w-full mb-2 text-center">
                        Inheritance
                    </button>
                </Link>
                <Link href="/addressOfPropertyForm" type="button" className="btn btn-secondary btn-nav-lg w-full mb-2">
                    <button type="submit" className="btn btn-secondary btn-nav-lg w-full mb-2 text-center">
                        Divorce
                    </button>
                </Link>
                <Link href="/addressOfPropertyForm" type="button" className="btn btn-secondary btn-nav-lg w-full mb-2">
                    <button type="submit" className="btn btn-secondary btn-nav-lg w-full mb-2 text-center">
                        Tired Landlord or Non-Performing Tenants
                    </button>
                </Link>
                <Link href="/addressOfPropertyForm" type="button" className="btn btn-secondary btn-nav-lg w-full mb-2">
                    <button type="submit" className="btn btn-secondary btn-nav-lg w-full mb-2 text-center">
                        Emergency Reasons
                    </button>
                </Link>
                <Link href="/addressOfPropertyForm" type="button" className="btn btn-secondary btn-nav-lg w-full mb-2">
                    <button type="submit" className="btn btn-secondary btn-nav-lg w-full mb-2 text-center">
                        Looking For a Quick Sell
                    </button>
                </Link>
                <Link href="/addressOfPropertyForm" type="button" className="btn btn-secondary btn-nav-lg w-full mb-2">
                    <button type="submit" className="btn btn-secondary btn-nav-lg w-full mb-2 text-center">
                       Distressed Property
                    </button>
                </Link>
                <Link href="/addressOfPropertyForm" type="button" className="btn btn-secondary btn-nav-lg w-full mb-2">
                    <button type="submit" className="btn btn-secondary btn-nav-lg w-full mb-2 text-center">
                        Financial Difficulties
                    </button>
                </Link>
            </div>
        </form>
    );
};

export default WhySellPropertyForm;