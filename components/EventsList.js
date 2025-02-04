import React from 'react';
import Link from "next/link";
import Image from "next/image";

const EventsList = ({ events }) => {
  return (
    <ul className="grid sm:grid-cols-2 gap-6 mt-6">
        {events?.map((event) => (
           <li key={event.id}>
            <Link className="text-xl font-medium" href={`/blendedHouse/${event.id}`}>{event.title}
             <div className="relative w-60 h-60 mb-4">
              <Image src="https://unsplash.com/photos/LBI7cgq3pbM" alt={event.title} layout="fill" objectFit="cover" />
             </div>
              {event.body}
            </Link>
            </li>
        ))}
    </ul>
  );
};

export default EventsList;