'use server';
import prisma from "@/utils/db";
import { revalidatePath } from "next/cache";

const createOffer = async (formData) => {

    formData.get("firstName");
    await prisma.offer.create({
        data: {
            name: "firstName",
        },
    });

    revalidatePath('/todo-list');
};

export const getAllOffers = async () => {
    return await prisma.offer.findMany({
        orderBy: {
            lastName: 'desc',
        },
    });
};

export default createOffer;