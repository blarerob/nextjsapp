import db from "@/utils/db";

export const GET = async (request) => {
    const offers = await db.offer.findMany();
    return Response.json({ data: offers });
};

export const POST = async (request) => {
    const data = await request.json();

    const offer = await db.offer.create({
        data: {
            message: data.message,
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phone: data.phone
        },
    });
    return Response.json({ data: offer });
};