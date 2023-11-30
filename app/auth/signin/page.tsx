"use client"
import React from 'react'
import { signIn } from 'next-auth/react'
import { useRef } from 'react'
import Link from 'next/link'
export default function Page() {
    const username = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)

    const handlerLogin = () => {
        signIn("credentials", {
            username: username.current?.value,
            password: password.current?.value,
            redirect: true,
            callbackUrl: '/'
        })
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-green-100">
            <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Log in to your account
                </h2>
                <div className="rounded-md shadow-sm -space-y-px">
                    <div>
                        <label htmlFor="username" className="sr-only">
                            Username
                        </label>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Username"
                            ref={username}
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="sr-only">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Password"
                            ref={password}
                        />
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={handlerLogin}
                    >
                        Log In
                    </button>
                </div>
                <hr />
                <div className='text-center'>
                    No account ?
                    <span>
                        <Link href='#' className='text-blue-500 pl-1 underline'>
                            sign Up
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    )
}
