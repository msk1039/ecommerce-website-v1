"use client"

import NavLinks from './components/NavLinks'
import SearchBar from './components/SearchBar'
import Cart from './components/Cart'
import Menu from './components/Menu'
import MenuContent from './components/MenuContent'
import User from './components/User'



export default function Nav(){

   
    return (
        <nav className=" flex w-full gap-4 lg:gap-6" aria-label="Main navigation">
           
           <NavLinks />

            <div className='ml-auto flex items-center justify-center gap-4 whitespace-nowrap lg:gap-8'>
                <div className="hidden lg:flex">
                      <SearchBar />
                </div>
            </div>
            
            <Cart />
            <User />
            <MenuContent>
                <Menu />
            </MenuContent>

        </nav>
    )
}