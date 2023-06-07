import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='bg-slate-200'>
        <div className='container flex mx-auto justify-around flex-col md:flex-row items-center'>
            <div>
                <h1 className='font-medium text-3xl'>HYT FJWR</h1>
            </div>

            <nav className=''>
                <Link to="/">
                    <a href="#" className='mr-3 hover:text-white duration-300'>Home</a>
                </Link>

                <Link to="/About">
                    <a href="#" className='mr-3 hover:text-white duration-300'>About</a>
                </Link>
                
                <Link to="/Photo">
                    <a href="#" className='hover:text-white duration-300'>Photos</a>
                </Link>
            </nav>
        </div>
        
    </header>
  )
}

export default Header
