'use client'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import React, { useState } from 'react'

interface IUser {
  email: string
  password: string
  username: string
}

const SingUp = () => {
  const userInicialValue: IUser = {
    email: '',
    password: '',
    username: ''
  }
  const [user, setUser] = useState<IUser>(userInicialValue)

  const singUp = async () => {

  }
  return (
    <main className="p-4 text-black">
      <form className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <label htmlFor="username" className="block font-semibold mb-1">username</label>
        <input
          id="username"
          type="text"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
        />
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
        <button onClick={singUp} className="w-full bg-blue-500 text-white font-semibold py-2 mt-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
          SingUp
        </button>
      </form>
    </main>

  )
}

export default SingUp