import nodemailer from "nodemailer";

export const runtime = "edge";
/* export const config = {
  runtime: "edge",
}; */
type EmailPayload = {
  to: string;
  subject: string;
  html: string;
};

// Replace with your SMTP credentials
const smtpOptions = {
  host: process.env.NEXT_PUBLIC_SMTP_HOST || "smtp.hostinger.com",
  port: parseInt(process.env.NEXT_PUBLIC_SMTP_PORT || "465"),
  secure: true,
  auth: {
    user: process.env.NEXT_PUBLIC_SMTP_USER || "form@sittaris.com",
    pass: process.env.NEXT_PUBLIC_SMTP_PASSWORD || "ic5GP_:-8cG@Gu52",
  },
};

export const sendEmail = async (data: EmailPayload) => {
  try {
    const transporter = nodemailer.createTransport({
      ...smtpOptions,
    });

    return await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_SMTP_FROM_EMAIL || "form@sittaris.com",
      ...data,
    });
  } catch (error) {
    console.log(error);
    return false;
  }
};
