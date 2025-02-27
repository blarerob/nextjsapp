import React from 'react';
import { editOffer } from "@/utils/actions";

const EditForm = ({ task }) => {
    const { id, message } = task;

  return <form action={editOffer}
  className="max-w-sm p-12 border border-base-300 rounded-md"
  >
      <input type="hidden" name="id" value={id} />
      <input type="text"
             name="message"
             defaultValue={message}
             className="input input-bordered w-full"
      />
      <div className="form-control my-4">
          <label className="label cursor-pointer" htmlFor="completed">
              <span className="label-text">Completed</span>
              <input
                  type="checkbox"
                  name="completed"
                  id="completed"
                  className="checkbox-primary checkbox checkbox-sm"
              />
          </label>
      </div>
<button type="submit" className="btn btn-primary btn-block btn-sm mt-4">Edit</button>
  </form>
};

export default EditForm;