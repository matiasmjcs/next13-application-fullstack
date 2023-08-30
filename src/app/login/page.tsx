'use client'
import React, { useState } from 'react'
import Link from 'next/link'

interface IUser {
  email: string
  password: string
}

const SingUp = () => {
  const userInicialValue: IUser = {
    email: '',
    password: '',
  }
  const [user, setUser] = useState<IUser>(userInicialValue)

  const Login = async () => {

  }
  return (
    <main className="p-4 text-black">
      <h4 className='text-2xl text-white font-bold text-center'>Login</h4>
      <form className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <label htmlFor="email" className="block font-semibold mb-1">email</label>
        <input
          id="email"
          type="text"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
        />
        <label htmlFor="password" className="block font-semibold mb-1">password</label>
        <input
          id="password"
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
        />
        <button onClick={Login} className="w-full bg-blue-500 text-white font-semibold py-2 mt-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
          Login
        </button>
      <Link className='p-2 text-black text-center' href={'/singup'}>Don't have an account? Sign up here</Link>
      </form>
    </main>

  )
}

export default SingUp