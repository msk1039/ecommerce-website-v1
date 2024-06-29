"use client";

import clsx from "clsx";
import Link from "next/link";

export default function NavLink({ href, children , setCurrentLink , name ,current}:{href:string, children:React.ReactNode , setCurrentLink: (index:string) => void , name:string , current:string}){
    return <>
    <li className="inline-flex">
        <Link href={`${href}`} 
            className={clsx(
                current===name ? "border-neutral-900 text-neutral-900" : "border-transparent text-neutral-500",
                "inline-flex items-center border-b-2 pt-px text-sm font-medium hover:text-neutral-700",
            )}
            onClick={() => setCurrentLink(name)}
        >
        {children}
        </Link>
    </li>
    </>
}