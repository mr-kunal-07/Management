import React, { useState } from 'react'

const Login = ({handleLogin}) => {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)

        setEmail('')
        setPassword('')
    }
    return (
        <div
            className='flex items-center justify-center h-screen w-screen'>
            <div className='border-2 rounded-lg border-red-600 p-20'>
                <form
                    onSubmit={(e) => submitHandler(e)}
                    className='flex flex-col items-center justify-center'>
                    <input
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        required
                        className='border-2 border-red-600 rounded-lg py-3 px-5 text-xl outline-none bg-transparent placeholder:text-gray-300 '
                        type="email"
                        placeholder='Email'
                    />
                    <input
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        required
                        className='border-2 border-red-600 rounded-lg py-3 px-5 text-xl outline-none bg-transparent placeholder:text-gray-300 mt-4'
                        type="password"
                        placeholder='Password'
                    />
                    <button
                        className='mt-5 bg-red-600 rounded-lg py-3 px-5 text-xl outline-none  placeholder:text-white  '
                        type='submit'>Log in
                    </button>
                </form>

            </div>
        </div>
    )
}

export default Login