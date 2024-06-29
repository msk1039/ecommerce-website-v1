
import { IoLogoLinkedin } from "react-icons/io5";

export default function Logo() {
    return <>
        <a href="/" className="flex items-center space-x-2">
            {/* <img
                src="/logo.svg"
                alt="Logo"
                className="w-8 h-8"
            /> */}
            <IoLogoLinkedin className="h-8 w-8"/>
        </a>
    </>
}