import React from 'react';
import {getOffer} from "@/utils/actions";
import Link from "next/link";
import EditForm from "@/components/EditForm";

const TypeOfPropertyPage = async ({ params }) => {
    const offer = await getOffer(params.id);
  return (
    <>
      <div className="mb-16">
          <Link href="/todo-list" className="btn btn-accent">
              Back
          </Link>
      </div>
      <EditForm task={offer} />
    </>
  );
};

export default TypeOfPropertyPage;