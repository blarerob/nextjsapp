import React from 'react';
import { createTask } from "@/utils/actions";
import Link from "next/link";

const ToDoForm = () => {

 return (
   <form action={createTask}>
      <h2 className="text-center font-extrabold mb-2">What Type of Property is it?</h2>
       <div className="flex flex-col w-full mb-8">
           <Link href="/occupiedform" type="button" className="btn btn-secondary btn-nav-lg w-full mb-2">
               <button>
                  Single Family
               </button>
           </Link>
           <Link href="/occupiedform" type="button" className="btn btn-secondary btn-nav-lg w-full mb-2">
               <button type="submit" className="btn btn-secondary btn-nav-lg w-full mb-2">
                 Multi Family
               </button>
           </Link>
           <Link href="/occupiedform" type="button" className="btn btn-secondary btn-nav-lg w-full mb-2">
               <button type="submit" className="btn btn-secondary btn-nav-lg w-full mb-2">
                 Commercial
               </button>
           </Link>
           <Link href="/occupiedform" type="button" className="btn btn-secondary btn-nav-lg w-full mb-2">
               <button type="submit" className="btn btn-secondary btn-nav-lg w-full mb-2">
                 Land/Lot
               </button>
           </Link>
           <Link href="/occupiedform" type="button" className="btn btn-secondary btn-nav-lg w-full mb-2">
               <button type="submit" className="btn btn-secondary btn-nav-lg w-full mb-2">
                Mobile Home
               </button>
           </Link>
           <Link href="/occupiedform" type="button" className="btn btn-secondary btn-nav-lg w-full mb-2">
               <button type="submit" className="btn btn-secondary btn-nav-lg w-full mb-2">
                 Condominium
               </button>
           </Link>
     </div>
   </form>
 );
};
export default ToDoForm;