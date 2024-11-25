import React from 'react'
import { Link } from 'react-router-dom'
import { simpal_get } from '../utils/requests';

function Header() {
    const handleGetUserData = React.useCallback(async () => {
        try {
            const res = await simpal_get('/profile')
            const profileInfo = await res.json()
            console.log(profileInfo);
            
        } catch(err) {
            console.log(err);
            alert('somthing want wrong')
        }
    }, [simpal_get])

    React.useEffect(() => {
        handleGetUserData()
    }, [handleGetUserData])
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
