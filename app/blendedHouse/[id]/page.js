import Image from "next/image";
// import { translate } from '@vitalets/google-translate-api';
import React from 'react';
import Link from "next/link";


const url = 'https://jsonplaceholder.typicode.com/users?';

const getEvent = async (id) => {
    console.log(`Fetching data for id: ${id}`);
    const response = await fetch(url + id);
    console.log(`Request URL: ${url + id}`);

    if (!response.ok) {
        throw new Error('Failed to fetch an Event!');
    }
    return response.json();
};

/*const translateText = async (text, targetLang) => {
    const result = await translate(text, { to: targetLang });
    return result.text;
}*/

const EventPage = async ({ params }) => {
    const data = await getEvent(params.id);
    const company = data[0]?.company;
    const phone = data[0]?.phone;
    const userName = data[0]?.username;

/*    if (title) {
        title = await translateText(title, 'en');
    }*/

    console.log(userName);

    return (
        <div>
            <Link href="/blendedHouse" className="btn btn-primary mt-8 mb-10">
                Back it up
            </Link>
            <Image
                src="https://unsplash.com/photos/LBI7cgq3pbM"
                width={200}
                height={300}
                alt="images"
                className="w-48 h-48 rounded shadow-lg mb-4"
            />
            <h1 className="text-4xl mb-8">{userName}</h1>
        </div>
    );
};

export default EventPage;