'use client';
import React, { useState } from 'react';
import { createTask } from "@/utils/actions";
import { LoadScript, Autocomplete } from '@react-google-maps/api';
import Link from "next/link";
import {useRouter} from "next/navigation";

const AddressOfPropertyForm = () => {
    const router = useRouter();
const [address, setAddress] = useState('');

const handlePlaceChanged = (autocomplete) => {
 const place = autocomplete.getPlace();
 setAddress(place.formatted_address);
};

return (
 <LoadScript googleMapsApiKey='AIzaSyD72fAKWlhOdJ5T-EnsMUqQ3nfufyOXBow' libraries={['places']}>
   <form action={createTask}>
     <h2 className="text-center font-extrabold mb-2">What is the Address of the Property?</h2>
     <div className="flex flex-col w-full mb-8">
       <Autocomplete onPlaceChanged={(autocomplete) => handlePlaceChanged(autocomplete)}>
         <input
           type="text"
           className="w-full p-4 mb-4 border border-base-300 rounded-lg shadow-lg"
           placeholder="Enter the address"
           value={address}
           onChange={(e) => setAddress(e.target.value)}
           required
         />
       </Autocomplete>
       <Link href="/todo-list" type="button" className="btn btn-secondary btn-nav-lg w-full mb-2">
         <button type="submit">
           Submit
         </button>
       </Link>
     </div>
       <button type="button" className="btn btn-neutral max-w-28 mt-2 flex items-center mb-16 fixed bottom-0 left-9 right-0" onClick={() => router.back()}>
           Go Back
       </button>
   </form>
 </LoadScript>
);
};

export default AddressOfPropertyForm;