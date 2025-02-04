import React from 'react';
import EventsList from "@/components/EventsList";
import https from 'https';

const url = 'https:jsonplaceholder.typicode.com/posts';

const BlendedHouse = async () => {
    const agent = new https.Agent({ rejectUnauthorized: false });

    const response = await fetch(url, { agent });
    console.log(response.status, response.statusText);

    if(!response.ok) {
        throw new Error('Failed to fetch data');
    }

    const events = await response.json();
    console.log(events);


    return (
        <EventsList events={events} />
    );
};

export default BlendedHouse;