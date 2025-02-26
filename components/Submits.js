import React from 'react';
import Link from "next/link";
import DeleteForm from "@/components/DeleteForm";
import {getAllOffers} from "@/utils/actions";

const Submits = async () => {
    const offers = await getAllOffers();

    if(offers.length === 0) {
        return <h2 className="mt-8 font-medium text-lg">No offers to show</h2>
    }

    return (
    <ul>
        {offers.map((offer) => (
        <li key={offer.id} className="flex justify-between items-center px-6 py-4 mb-4 border border-base-300 rounded-lg shadow-lg">
           <h2
               className={`text-lg capitalize ${
                   offer.completed ? "line-through" : null
               }`}
           >
               {offer.message}
           </h2>
            <div className="flex gap-6 items-center">
                <Link href={`/todo-list/${offer.id}`} className="btn btn-primary btn-xs">Edit</Link>
                <DeleteForm id={offer.id} />
            </div>
            <h2>{offer.firstName}</h2>
            <h2>{offer.lastName}</h2>
            <h2>{offer.email}</h2>
            <h2>{offer.phone}</h2>
        </li>
        ))}
    </ul>
);
  //  const offer = await getAllOffers();
  //
  //   if (offer.length === 0) {
  //   return <h2 className="mt-8 font-medium text-lg">No tasks</h2>
  //   }
  // return <ul>
  //     {offer.map((task) => (
  //         <li key={task.id} className="flex justify-between items-center px-6 py-4 mb-4 border border-base-300 rounded-lg shadow-lg">
  //             <h2 className={`text-lg capitalize ${
  //                 task.completed ? 'line-through' : null
  //             }`}>
  //                 {task.content}
  //             </h2>
  //             <div className="flex gap-6 items-center">
  //                 <Link href={`/todo/${offer.id}`} className="btn btn-primary btn-xs">Edit</Link>
  //                 <DeleteForm id={offer.id} />
  //             </div>
  //         </li>
  //     ))}
  // </ul>
};

export default Submits;