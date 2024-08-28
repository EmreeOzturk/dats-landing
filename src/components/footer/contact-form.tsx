"use client";

import { sendMail } from "@/actions/email-actions";
import { useFormState } from "react-dom";
import FormButton from "./contact-form-button";
const ContactForm = () => {
    const [state, action] = useFormState(sendMail, {
        message: "",
        status: "",
    })
    return (
        <form
            action={action}
            className="w-full flex flex-col items-center justify-center gap-4">
            <div className="flex items-center justify-center w-full gap-4">
                <input name="name" type="text" placeholder="Enter your name" className="w-full bg-[#1e1e1e] text-[#f0f0f0] rounded-xl py-4 px-6" />
                <input name="surname" type="text" placeholder="Enter your surname" className="w-full bg-[#1e1e1e] text-[#f0f0f0] rounded-xl py-4 px-6" />
            </div>
            <div className="flex items-center justify-center w-full gap-4">
                <textarea name="message" placeholder="Enter your message" className="w-full bg-[#1e1e1e] text-[#f0f0f0] rounded-xl py-4 px-6" />
            </div>
            <div className="flex items-center justify-center w-full gap-4">
                <input name="email" type="email" placeholder="Enter email" className="w-full bg-[#1e1e1e] text-[#f0f0f0] rounded-xl py-4 px-6" />
            </div>
            <FormButton />
        </form>
    )
}

export default ContactForm