'use server';
import prisma from "@/utils/db";
import { revalidatePath } from "next/cache";
import {redirect} from "next/navigation";

export const createOffer = async (prevState, formData) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const message = formData.get('message');

    try {
        await prisma.offer.create({
            data: {
                message,
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
            }
        })

        revalidatePath('/todo-list');
        return {message: 'Offer created!'};
    } catch (error) {
        return {message: 'Error creating offer'};
    }
};


export const getAllOffers = async () => {
    return prisma.offer.findMany({
        orderBy: {
            firstName: 'asc',
        }
    });
};

export const deleteOffer = async (formData) => {
const id = parseInt(formData.get('id'), 10);
await prisma.offer.delete({
        where: { id }
    });

    revalidatePath("/todo-list");
};

export const getOffer = async (id) => {
    return prisma.offer.findUnique({
        where: { id: parseInt(id, 10) }
    });
};

export const editOffer = async (formData) => {
    const id = parseInt(formData.get('id'), 10);
    const firstName = formData.get('firstName') || '';
    const lastName = formData.get('lastName') || '';
    const message = formData.get('message') || '';
    const email = formData.get('email') || '';
    const phone = formData.get('phone') || '';
    const completed = formData.get('completed');

    await prisma.offer.update({
        where: {
            id
        },
        data: {
            message,
            completed: completed === 'on',
            firstName,
            lastName,
            email,
            phone,
        }
    });

    redirect('/todo-list');
};