import React, { FormEvent } from "react"
import { Link, useNavigate } from "react-router-dom"
import { simple_post } from "../utils/requests"

function RegisterPage() {

    const [username, setUsername] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [loading, setLoding] = React.useState(false)

    const [error, setError] = React.useState('')

    const navigate = useNavigate()

    const handleRegister = React.useCallback(async (e: FormEvent) => {
        e.preventDefault()
        try {
            setLoding(true)
            const res = await simple_post('/register', {username, email, password})
            const data = await res.json()
            // console.log(data)
            setLoding(false)
            if(res.ok) {
                navigate('/')
            } else {
                if (data.problem) {
                    setError(data.problem)
                } else {
                    setError('both')
                }
            }
        } catch (error) {
            alert('Registration failed')
            console.log(error);
        }
    }, [username, email, password, setLoding, navigate, simple_post])

    return (
        <main className='flex pt-20 items-center justify-center'>
            <div className='max-w-xl w-full'>
                <h2 className='text-center mb-10 text-2xl font-semibold '>Register</h2>
                <form 
                    className='flex flex-col w-full'
                    onSubmit={handleRegister}
                >
                    <input 
                        className={`p-2 rounded-xl border-2 mb-3 ${error === 'username' ? "border-red-500 text-red-500" : "border-black"}`}
                        type="text" 
                        id="username" 
                        name="username" 
                        placeholder='Username'
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)}
                        required 
                    />
                    <input 
                        className={`p-2 rounded-xl border-2 mb-3 ${error === 'email' ? "border-red-500 text-red-500" : "border-black"}`}
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder='Email' 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                            loading ? 'Loading...' : 'Register'
                        }
                    </button>
                </form>
                <p className="text-red-500">
                    {
                        error === 'both' ? 'Somthing wents Wrong!!' : ''
                    }
                    {
                        error === 'email' ? 'Email already exist!!' : ''
                    }
                    {
                        error === 'username' ? 'Username already exist!!' : ''
                    }
                </p>
                <Link to="/login"><p className='text-center pr-5 py-5'>Already have an account!!</p></Link>
            </div>
        </main>
    )
}

export default RegisterPage
