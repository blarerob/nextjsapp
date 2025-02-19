'use server';
import prisma from "@/utils/db";
import { revalidatePath } from "next/cache";

const createTask = async (formData) => {

    formData.get("content");
    await prisma.task.create({
        data: {
            name: "content",
        },
    });

    revalidatePath('/todo-list');
};

export const getAllTasks = async () => {
    return await prisma.task.findMany({
        orderBy: {
            createdAt: 'desc',
        },
    });
};

export default createTask;