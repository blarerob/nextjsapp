'use client';
import React from 'react';
import {createOffer} from "@/utils/actions";
import { useFormStatus, useFormState } from "react-dom";

const initialState = {
    message: null,
};

const SubmitBtn = () => {
    'use client';
  const { pending } = useFormStatus();

  return (
      <button type="submit" className="btn btn-primary join-item" disabled={pending}>
          {pending ? 'creating...' : 'create offer'}
        </button>
  )
};

const SubmitForm = () => {
   const [state, formAction] = useFormState(createOffer, initialState);
  return <form action={formAction}>
      {state.message ? <p className="mb-2"> {state.message}</p> : null}
      <div className="join w-full mb-8">
          <input
              type="text"
              className="input input-bordered join-item w-full"
              placeholder="type here"
              name="message"
              required
              />
          <SubmitBtn />
      </div>
  </form>
};

export default SubmitForm;