import { NAVBARMENU } from "@/lib/consts";
const Navbar = () => {
    return (
        <div className="w-full flex items-center justify-between">
            <ul className="flex items-center justify-center gap-10">
                {NAVBARMENU.map((item) => (
                    <li key={item.id}>
                        {item.name}
                    </li>
                ))}
            </ul>
            <div>
                <button className="bg-white text-black">Sign Up</button>
                <button>Download</button>
            </div>
        </div>
    )
}

export default Navbar