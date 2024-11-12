import { appleImg, bagImg, searchImg } from "../utils"
import { navLists } from "../connstent"
const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
    <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="Apple Logo" width={14} height={18} />
        <div className="flex flex-1 justify-center max-sm:hidden ">
            {navLists.map((nav)=> (
                <div key={nav} className="
                

               px-5 cursor-pointer
                text-sm text-gray-500 hover:text-red-900 transition duration-300


                "  >
                    {nav}
                </div>
            
        ))}
        </div>
        <div className=" flex items-baseline
         gap-7
         max-sm:justify-end max-sm:flex-1" >
            <img src={searchImg} alt="serch" width={14}
        height={18} />
        <img src={bagImg} alt="bag" idth={14}
        height={18}  />
        </div>
    </nav>

    </header>
  )
}

export default Navbar