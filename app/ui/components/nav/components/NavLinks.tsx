import {useState} from 'react'
import NavLink from './NavLink'


export default function NavLinks(){

    const [current,setCurrent] = useState("All")

    const setCurrentLink = (index:string) => {
        setCurrent(index)
        console.log("current="+current)
    }



    const navLinks = [
        {
            name:'All',
            path: '/'
        },
        {
            name:'Accessories',
            path: '/Accessories'
        },
        {
            name:'Clothing',
            path: '/Clothing'
        }
    ]

    return <>
     <ul className='hidden gap-4 overflow-x-auto whitespace-nowrap md:flex lg:gap-8 lg:px-0 '>
                {navLinks.map((item, index) => {
                    return (
                        <NavLink key={index} href={`${item.path}`} setCurrentLink={setCurrentLink} name={item.name} current={current}>
                            {item.name}
                        </NavLink>
                    )
                })
            }
            </ul>
    
    
    </>

}