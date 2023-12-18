import nodemailer from "nodemailer";
import { NextResponse, type NextRequest } from "next/server";
import Mail from "nodemailer/lib/mailer";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  // create a transporter using gmail
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
    from: email,
  });

  // create mail message
  const mailOptions: Mail.Options = {
    from: email,
    to: process.env.NODEMAILER_EMAIL,
    subject: `Message through portfolio from ${name}`,
    text: `
Name: ${name}
Email: ${email}
Message: \n${message}
    `,
  };

  try {
    // send mail
    await transporter.sendMail(mailOptions);
    return NextResponse.json({
      status: 200,
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      status: 500,
      success: false,
      message: "Message failed to send!",
    });
  }
}
