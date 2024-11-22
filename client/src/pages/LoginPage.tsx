import React, { FormEvent } from "react"
import { Link, useNavigate } from "react-router-dom"
import { simple_post } from "../utils/requests"

function LoginPage() {

    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState('')

    const navigate = useNavigate()

    const handleLogin = React.useCallback(async (e: FormEvent) => {
        e.preventDefault()
        try {
            setLoading(true)
            const res = await simple_post('/login', { username, password })
            const data = await res.json()
            // console.log(data)
            setLoading(false)

            if (res.ok) {
                navigate('/')
            } else {
                // alert('Invalid username or password')
                setError(data.problem)
            }
        } catch (err) {
            // alert('Login failed')
            setError('both')
            console.error(err)
        }
    }, [username, password, setLoading, simple_post, navigate])

    return (
        <main className='flex pt-20 items-center justify-center'>
            <div className='max-w-xl w-full'>
                <h2 className='text-center mb-10 text-2xl font-semibold '>LogIn</h2>
                <form 
                    className='flex flex-col w-full'
                    onSubmit={handleLogin}
                >
                    <input 
                        className='p-2 rounded-xl border-2 border-black mb-3' 
                        type="text" 
                        id="username" 
                        name="username" 
                        placeholder='Username' 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required 
                    />
                    <input 
                        className='p-2 rounded-xl border-2 border-black mb-3' 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder='Password' 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                    />
                    <button className='bg-black text-white p-3 rounded-xl mt-5 font-semibold'>
                        {
                            loading ? 'Loading...' : 'LogIn'
                        }
                    </button>
                </form>
                <p className="text-red-500">
                    {
                        error === 'both' ? 'Somthing wents Wrong!!' : ''
                    }
                    {
                        error === 'username' ? 'Invalid username' : ''
                    }
                    {
                        error === 'password' ? 'Invalid password' : ''
                    }
                </p>
                <Link to='/register'><p className='text-center pr-5 py-5'>Create new account!!</p></Link>
            </div>
        </main>
    )
}

export default LoginPage
