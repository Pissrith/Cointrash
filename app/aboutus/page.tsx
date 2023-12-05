import React from 'react'
import Nav from '@/components/Nav1'
import About from '@/components/about'
export default function page() {
    return (
        <div className='h-screen'>
            <div className='shadow-xl shadow-gray-300'>
                <Nav />
            </div>
            <About />
            <footer className="flex items-center justify-center py-4 bg-green-800">
                <p className="text-center text-white">© CoinTrash. All rights reserved.</p>
            </footer>
        </div >)
}
