import { Link } from 'react-router-dom'

function Header() {
    return (
        <nav className='flex items-center justify-between py-10'>
            <h1 className='font-bold text-2xl'><Link to='/'>HelloBlogs</Link></h1>
            <div>
                <Link to="/login" className='font-medium text-gray-700 text-lg'>LogIn</Link>
            </div>
        </nav>
    )
}

export default Header
