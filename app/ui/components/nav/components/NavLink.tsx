"use client";

import clsx from "clsx";

export default function NavLink({ href, children }:{href:string, children:React.ReactNode}){
    return <>
    <li className="inline-flex">
        <a href={`${href}`} 
        // className={clsx(
		// 			isActive ? "border-neutral-900 text-neutral-900" : "border-transparent text-neutral-500",
		// 			"inline-flex items-center border-b-2 pt-px text-sm font-medium hover:text-neutral-700",
		// 		)}
        className="inline-flex items-center  pt-px text-sm font-medium hover:text-neutral-700 border-transparent text-neutral-500"
                
        >
        {children}
        </a>
    </li>
    </>
}