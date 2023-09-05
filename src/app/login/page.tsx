'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/navigation'

interface IUser {
  email: string
  password: string
}

const Login = () => {
  const route = useRouter()
  const userInicialValue: IUser = {
    email: '',
    password: '',
  }
  const [user, setUser] = useState<IUser>(userInicialValue)
  const [loading, setLoading] = useState<boolean>(false)

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault()
      setLoading(true)
      const response = await axios.post('/api/users/login', user)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
    finally{
      setLoading(false)
    }
  }
  return (
    <main className="p-4 text-black dark:text-white grid justify-items-center">
      <h4 className='text-2xl text-black dark:text-white font-bold text-center'>Login</h4>
      <form onSubmit={login} className="max-w-md mx-auto dark:text-white dark:bg-slate-950 bg-white p-6 rounded-lg shadow-md">
        <label htmlFor="email" className="block font-semibold mb-1">email</label>
        <input
          id="email"
          type="text"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          className="w-full border dark:bg-slate-500 dark:border-black border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
        />
        <label htmlFor="password" className="block font-semibold mb-1">password</label>
        <input
          id="password"
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          className="w-full border dark:bg-slate-500 dark:border-black border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
        />
        <button className="w-full  bg-blue-500 text-white font-semibold py-2 mt-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
          Login
        </button>
      </form>
      <Link className='p-2 text-black dark:text-white text-center' href={'/singup'}>Don't have an account? Sign up here</Link>
      <Link className='p-2 text-black dark:text-white text-center' href={'/'}>Home</Link>
    </main>

  )
}

export default Login