import prisma from "@/utils/db";
import {getAllOffers} from "@/utils/actions";

export default async function handler(req, res) {
    const offers = await getAllOffers();
    if (req.method === "POST") {
        const { FirstName, LastName, email, phone, message } = req.body;

        try {
            const offer = await prisma.offer.create({
                data: {
                    firstName: FirstName,
                    lastName: LastName,
                    email: email,
                    phone: phone,
                    message: message,
                },
            });
            res.status(200).json({ message: "Offer submitted successfully!" });
        } catch (error) {
            res.status(500).json({ message: "Something went wrong!" });
        }
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}