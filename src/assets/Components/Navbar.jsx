function Navbar(){
    return(
        <div id="navbar" className="fixed top-0 left-0 w-full bg-black/40 flex items-center z-10">
            <div id="container" className="container w-3/4 mx-auto px-4 grid grid-cols-2 gap-3 items-center">
                <a href="#!">
                    <div id="brand" className="w-40 h-16 bg-[url('./assets/images/common/logo.jpg')] bg-contain bg-no-repeat bg-center"></div>
                </a>

                <ul className={`gap-3 flex justify-end `}>
                    {["About", "Service", "Reservation","Menu","Contact"].map((item)=>(
                        <li key={item} className='sm:text-center'>
                            <a href={`#${item.toLowerCase()}`} className="text-white hover:text-yellow-500 transition duration-300 ">
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default Navbar;