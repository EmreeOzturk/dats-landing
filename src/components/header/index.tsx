import Logo from './logo'
import Navbar from './navbar'
const Header = () => {
    return (
        <header className='flex gap-10 px-10 pt-8'>
            <Logo />
            <Navbar />
        </header>
    )
}

export default Header