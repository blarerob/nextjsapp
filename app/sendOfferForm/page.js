"use client"
import React, {useEffect, useState} from 'react';
import { createTask } from "@/utils/actions";
import Link from "next/link";
import prisma from "@/utils/db";

const SendOfferForm = () => {

useEffect(() => {
const form = document.getElementById("form");
const result = document.getElementById("result");

form.addEventListener("submit", async function (e) {
e.preventDefault();
//   form.add("validated");
if (!form.checkValidity()) {
    form.querySelectorAll(":invalid")[0].focus();
    return;
}
const formData = new FormData(form);
const object = Object.fromEntries(formData);
const json = JSON.stringify(object);

result.innerHTML = "Sending...";

    try {
        const response = await fetch("/api/submitOffer", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: json,
        });
        const data = await response.json();
        if (response.status === 200) {
            result.innerHTML = data.message;
        } else {
            result.innerHTML = data.message;
        }
    } catch (error) {
        console.log(error);
        result.innerHTML = "Something went wrong!";
    } finally {
        form.reset();
        setTimeout(() => {
            result.style.display = "none";
        }, 5000);
    }
});
}, []);


return (
<div className="w-full max-w-screen-xl mx-auto px-5 py-10">

<div>
    <h2 className="text-secondary text-center text-3xl md:text-5xl mx-auto font-bold">
        Get in touch about your offer <br /> We would love to hear from you
    </h2>
    <p className="text-center text-gray-700 font-medium text-lg leading-normal max-w-3xl mx-auto pt-8">
        Let&#39;s talk about your offer, ideas, or anything you want to discuss.
        Please fill out the form below. We will get back to you as soon as
        possible.
    </p>
</div>
<form method="POST" id="form" noValidate>
    <input type="hidden" name="access_key" value="1be16739-38a8-495b-af21-2bce599fc643" />
    <input type="checkbox" className="hidden" name="botcheck" />

    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-14">
        <div>
            <input
                type="text"
                name="FirstName"
                required
                className="peer border-2 border-muted-medium py-4 px-4 rounded-xl placeholder:text-default focus:border-primary focus:ring-1 focus:ring-primary outline-none w-full [.validated_&]:invalid:border-pink-600 [.validated_&]:invalid:ring-2 [.validated_&]:invalid:ring-pink-200"
                placeholder="Name*"
            />
            <p className="mt-2 hidden [.validated_&]:peer-invalid:block text-pink-600 text-sm">
                Please provide your first name.
            </p>
        </div>
        <div>
            <input
                type="text"
                name="LastName"
                required
                className="peer border-2 border-muted-medium py-4 px-4 rounded-xl placeholder:text-default focus:border-primary focus:ring-1 focus:ring-primary outline-none w-full [.validated_&]:invalid:border-pink-600 [.validated_&]:invalid:ring-2 [.validated_&]:invalid:ring-pink-200"
                placeholder="Last name*"
            />
            <p className="mt-2 hidden [.validated_&]:peer-invalid:block text-pink-600 text-sm">
                Please provide your last name.
            </p>
        </div>
        <div>
            <input
                type="email"
                name="email"
                required
                className="peer border-2 border-muted-medium py-4 px-4 rounded-xl placeholder:text-default focus:border-primary focus:ring-1 focus:ring-primary outline-none w-full [.validated_&]:invalid:border-pink-600 [.validated_&]:invalid:ring-2 [.validated_&]:invalid:ring-pink-200"
                placeholder="Email address*"
            />
            <p className="mt-2 hidden [.validated_&]:peer-placeholder-shown:peer-invalid:block text-pink-600 text-sm">
                Please provide your email.
            </p>
            <p
                className="mt-2 hidden [.validated_&]:peer-[:not(:placeholder-shown)]:peer-invalid:block text-pink-600 text-sm">
                Please enter a valid email address.
            </p>
        </div>
        <div>
            <input
                type="text"
                name="phone"
                required
                className="peer border-2 border-muted-medium py-4 px-4 rounded-xl placeholder:text-default focus:border-primary focus:ring-1 focus:ring-primary outline-none w-full [.validated_&]:invalid:border-pink-600 [.validated_&]:invalid:ring-2 [.validated_&]:invalid:ring-pink-200"
                placeholder="Phone*"
            />
            <p className="mt-2 hidden [.validated_&]:peer-invalid:block text-pink-600 text-sm">
                Please provide your phone number.
            </p>
        </div>

        <div className="md:col-span-2">
    <textarea
        name="message"
        required
        className="peer border-2 border-muted-medium py-4 px-4 rounded-xl placeholder:text-default focus:border-primary focus:ring-1 focus:ring-primary outline-none w-full h-40 [.validated_&]:invalid:border-pink-600 [.validated_&]:invalid:ring-2 [.validated_&]:invalid:ring-pink-200"
        placeholder="Message*"></textarea>
            <p className="mt-2 hidden [.validated_&]:peer-invalid:block text-pink-600 text-sm">
                Please provide your message.
            </p>
        </div>
        <div className="md:col-span-2">
            <div className="text-center">
                <button
                    type="submit"
                    className="bg-pink-500 text-lg font-medium rounded-lg py-5 px-14 text-white transition hover:bg-primary-strong">
                    Submit Now
                </button>

                <div id="result" className="mt-3 text-center"></div>
            </div>
        </div>
    </div>
</form>

</div>

/* <form id="form" action={createTask} method="POST" noValidate>
 <h2 classNameName="text-center font-extrabold mb-2">Where Should We Send Your Offer?</h2>
 <div classNameName="flex flex-col w-full mb-8">
     <input classNameName="w-80 p-4 mb-4 border border-base-300 rounded-lg shadow-lg" type="text" placeholder="First Name" required />
     <input classNameName="w-80 p-4 mb-4 border border-base-300 rounded-lg shadow-lg" type="text" placeholder="Last Name" required />
     <div>
     <input
         classNameName="peer w-80 p-4 mb-4 border border-base-300 rounded-lg shadow-lg focus:ring-2 focus:ring-primary [.validated_&]:invalid:border-pink-600 required"
         type="email"
         name="email"
         required
         placeholder="Email Adresss*"
     />
         <p classNameName="mt-2 hidden [.validated_&]:peer-[:not(:placeholder-shown)]:peer-invalid:block text-pink-600">Please enter a valid email address</p>
     </div>
     <input classNameName="w-80 p-4 mb-4 border border-base-300 rounded-lg shadow-lg" type="text" placeholder="Phone Number" required />
     <Link href="/conditionOfPropertyForm" type="button" classNameName="btn btn-secondary btn-nav-lg w-full mb-2">
         <button type="submit" classNameName="btn btn-secondary btn-nav-lg w-full mb-2">
             Submit
         </button>
     </Link>
 </div>
</form>*/
);
};

export default SendOfferForm;