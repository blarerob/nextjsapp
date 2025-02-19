import React from 'react';
import { createTask } from "@/utils/actions";
import Link from "next/link";

const OccupiedForm = () => {
    {/*<input
    type="text"
    className="w-full p-4 mb-4 border border-base-300 rounded-lg shadow-lg"
    placeholder="Enter your email"
    name="content"
    required
/>*/}
    return (
        <form action={createTask}>
            <h2 className="text-center font-extrabold mb-2">Is the Property Currently Occupied?</h2>
            <div className="flex flex-col w-full mb-8">
                <button>
                    Owner Occupied
                </button>
                <button type="submit" className="btn btn-secondary btn-nav-lg w-full mb-2">
                    Tenant Occupied
                </button>
                <button type="submit" className="btn btn-secondary btn-nav-lg w-full mb-2">
                    Not Occupied
                </button>
            </div>
        </form>
    );
};
export default OccupiedForm;