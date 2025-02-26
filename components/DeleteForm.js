import React from 'react';
import { deleteOffer } from "@/utils/actions";

const DeleteForm = ({id}) => {
  return <form action={deleteOffer}>
      <input type="hidden" name="id" value={id} />
        <button className="btn btn-xs btn-error">
            Delete
        </button>
  </form>
};

export default DeleteForm;