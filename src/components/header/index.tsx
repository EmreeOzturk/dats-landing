import Logo from './logo'
import Navbar from './navbar'
const Header = () => {
    return (
        <header className='flex items-center absolute top-0 left-0 right-0 justify-between gap-10  pt-8 max-w-[1440px] mx-auto '>
            <Logo />
            <Navbar />
        </header>
    )
}

export default Header