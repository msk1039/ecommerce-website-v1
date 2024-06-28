import NavLink from './components/NavLink'
import SearchBar from './components/SearchBar'
import Cart from './components/Cart'
import Menu from './components/Menu'



export default function Nav(){
    const navLinks = [
        {
            name:'All',
            path: '/All'
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
    return (
        <nav className=" flex w-full gap-4 lg:gap-6" aria-label="Main navigation">
            <ul className='hidden flex gap-4 overflow-x-auto whitespace-nowrap md:flex lg:gap-8 lg:px-0'>
                {navLinks.map((item, index) => {
                    return (
                        <NavLink key={index} href={`/categories/${item.path}`}>
                            {item.name}
                        </NavLink>
                    )
                })
            }
            </ul>

            <div className='ml-auto flex items-center justify-center gap-4 whitespace-nowrap lg:gap-8'>
                <div className="hidden lg:flex">
                      <SearchBar />
                </div>
            </div>
            
            <Cart />
            <Menu />
            
       
        </nav>
    )
}