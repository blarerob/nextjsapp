import React from 'react';
import prisma from "@/utils/db";

const createOffer = async (formData) => {
    'use server';

    const message = formData.get('message');
    await prisma.offer.create({
        data: {
            message,
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
        }
    })
};

const SubmitForm = () => {
  return <form action={createOffer}>
      <div className="join w-full mb-8">
          <input
              type="text"
              className="input input-bordered join-item w-full"
              placeholder="type here"
              name="message"
              required
              />
          <button type="submit" className="btn btn-primary join-item">
              Submit
          </button>
      </div>
  </form>
};

export default SubmitForm;