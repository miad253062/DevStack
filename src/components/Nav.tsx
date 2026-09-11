import NavLogo from '../assets/logo-text.png'
import NavBar from '../assets/hamburger.png'

function Nav(){
    return (
        <div className='container mx-auto mt-4 sticky top-0 z-50'>
            <nav className='flex justify-between items-center mx-2 py-2 bg-white'>
                <img className='md:hidden' src={NavBar} alt="" />
                <img src={NavLogo} alt="" />
                <ul className='hidden md:flex md:items-center md:gap-5 md:text-gray-600'>
                    <li className='text-[#d91a83]'><a href="#home">Home</a></li>
                    <li><a href="#technology">Technologies</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contacts">Contact</a></li>
                </ul>
                <div>
                    <button className='px-3 cursor-pointer'>Sign In</button>
                    <button className='text-white bg-[#d91a83] rounded-4xl px-4 py-2 cursor-pointer'>Sign Up</button>
                </div>
            </nav>
        </div>
    )
}


export default Nav