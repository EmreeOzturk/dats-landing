"use client"
import { useFormStatus } from "react-dom"
import { Loader } from "lucide-react"
const FormButton = () => {
    const { pending } = useFormStatus()
    return (
        <button type="submit" className="flex hover:bg-zinc-400 transition-all items-center justify-center w-full gap-4 mt-4 bg-[#EAEAEA] text-base text-black font-semibold rounded-full py-[10px] px-[22px] ">
            {pending ? <Loader size={16} className="animate-spin"/> : "Send Message"}
        </button>
    )
}

export default FormButton