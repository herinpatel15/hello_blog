import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { simpal_get } from '../utils/requests';
import { useProfile } from '../provider/profileContextProvider';

function Header() {
    const navigate = useNavigate()
    // const [isLogin, setIsLogin] = React.useState(null)
    const { profileInfo, setProfileInfo } = useProfile()
    const handleGetUserData = React.useCallback(async () => {
        try {
            const res = await simpal_get('/profile')
            const profileInfo = await res.json()
            console.log(res.status);
            if (res.status === 500) {
                // console.log('error');
                navigate('/login')
            } else {
                console.log('done');
                setProfileInfo(profileInfo)
                // setIsLogin(profileInfo)
            }
        } catch (err) {
            console.log(err);
            alert('somthing want wrong')
        }
    }, [navigate, setProfileInfo])

    React.useEffect(() => {
        handleGetUserData()
    }, [handleGetUserData])
    return (
        <nav className='flex items-center justify-between py-10'>
            <h1 className='font-bold text-2xl'><Link to='/'>HelloBlogs</Link></h1>
            {
                profileInfo
                    ? (<div className='flex gap-5'>
                        <Link to="/new-post" className='font-medium text-gray-700 text-lg'>Create New Post</Link>
                        <Link to="/profile" className='font-medium text-gray-700 text-lg'>Profile</Link>
                    </div>)
                    : (<div className='flex gap-5'>
                        <Link to="/login" className='font-medium text-gray-700 text-lg'>LogIn</Link>
                        {/* <Link to="/login" className='font-medium text-gray-700 text-lg'>LogIn</Link> */}
                    </div>)
            }
        </nav>
    )
}

export default Header
