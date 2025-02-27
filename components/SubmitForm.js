'use client';
import React, {useEffect} from 'react';
import {createOffer} from "@/utils/actions";
import { useFormStatus, useFormState } from "react-dom";
import toast from "react-hot-toast";

const initialState = {
    message: null,
    firstName: null,
    lastName: null,
    email: null,
    phone: null,
};

const SubmitBtn = () => {
    'use client';
  const { pending } = useFormStatus();

  return (
      <div className="md:col-span-2">
          <div className="text-center">
      <button
          type="submit"
          className="bg-pink-500 text-lg font-medium rounded-lg py-5 px-14 text-white transition hover:bg-primary-strong"
          disabled={pending}
      >
          {pending ? 'creating...' : 'Submit Now'}
      </button>
              <div id="result" className="mt-3 text-center"></div>
          </div>
      </div>
  )
};

const SubmitForm = () => {
   const [state, formAction] = useFormState(createOffer, initialState);
    useEffect(() => {
        if (state.status === 400) {
            toast.error(state.message);
        } else if(state.message) {
            toast.success('Offer Created!');
        }
    }, [state]);
  return <form action={formAction}>
      <div className="join w-full mb-8">
          <input
              type="text"
              className="input input-bordered join-item w-full"
              placeholder="First Name*"
              name="firstName"
              required
              />
      </div>
      <div className="join w-full mb-8">
          <input
              type="text"
              className="input input-bordered join-item w-full"
              placeholder="Last Name*"
              name="lastName"
              required
          />
      </div>
      <div className="join w-full mb-8">
          <input
              type="text"
              className="input input-bordered join-item w-full"
              placeholder="Email*"
              name="email"
              required
          />
      </div>
      <div className="join w-full mb-8">
          <input
              type="text"
              className="input input-bordered join-item w-full"
              placeholder="Phone*"
              name="phone"
              required
          />
      </div>
      <div className="join w-full mb-8">
          <input
              type="text"
              className="input input-bordered join-item w-full"
              placeholder="Message for us"
              name="message"
          />
      </div>
      <SubmitBtn />
  </form>
};

export default SubmitForm;