"use server";
import { Resend } from "resend";
import ContactEmail from "@/components/email/email";
type StateType = {
  name: string;
  surname: string;
  message: string;
  email: string;
};

export type ReturnType = {
  message: string;
  status: string;
};

export async function sendMail(
  prevState: StateType,
  formData: FormData
): Promise<any> {
  const name = formData.get("name") as string;
  const surname = formData.get("surname") as string;
  const message = formData.get("message") as string;
  const email = formData.get("email") as string;
  const resend = new Resend("re_L7kzbXrd_AHaizxYURhmdF3epUMsnbQEW");

  try {
    const { data, error } = await resend.emails.send({
      from: "DATS PROJECT <test@zeynel.dev>",
      to: "hello@datsproject.io",
      subject: `Dats Project - Contact Form Message`,
      react: ContactEmail({
        name: name,
        email: email,
        message: message,
      }),
    });
    console.log(data, error);
  } catch (error) {
    console.log(error);
    return {
      message: "Email could not be sent",
      status: "error",
    };
  }

  return {
    message: "Email sent successfully",
    status: "success",
  };
}
