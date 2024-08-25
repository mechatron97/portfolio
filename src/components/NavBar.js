import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <header className='w-full px-32 py-8 font-medium'>
        <nav>
            <Link href='/'>Logo</Link>
            <ul className='flex gap-8'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    </header>
  )
}

export default NavBar