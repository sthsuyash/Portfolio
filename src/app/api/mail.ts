import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
    try {
        const {
            fullname,
            fromEmail,
            message,
        } = await req.json();

        // create a transporter using gmail
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.NODEMAILER_EMAIL,
                pass: process.env.NODEMAILER_PW,
            },
        });

        // create mail message
        const mailOptions = {
            from: fromEmail,
            to: process.env.NODEMAILER_EMAIL,
            subject: `Message from ${fullname}`,
            text: message,
        };

        // send mail
        const info = await transporter.sendMail(mailOptions);

        return NextResponse.json({
            success: true,
            message: "Message sent successfully!",
        }, {
            status: 200,
        })
    }
    catch (error) {
        console.log(error);
        return Response.json({
            success: false,
            message: "Message failed to send.",
        }, {
            status: 500,
        });
    }
}
