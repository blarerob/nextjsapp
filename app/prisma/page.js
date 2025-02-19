import React from 'react';
import prisma from "@/utils/db";

const getAllTasks = async () => {
    await prisma.task.create({
        data: {
            content: 'Homes',
        },
    })

/*    await prisma.task.update({
        where: {
            id: "25cab9d0-fcec-453b-b9bc-a44281463755",
        },
        data : {
            content: 'buy milk done',
        }
    })

    await prisma.task.delete({
        where: {
            id: "25cab9d0-fcec-453b-b9bc-a44281463755",
        },
    })*/

    const allTasks = await prisma.task.findMany();
    return allTasks;
};

const Prisma = async () => {
     const tasks =  await getAllTasks();

       return (
    <div>
    <h1 className="text-7xl">Tasks</h1>
    {tasks?.map((task) => (
    <h1 key={task.id}>{task.content}</h1>
    ))}
       </div>)
};

export default Prisma;