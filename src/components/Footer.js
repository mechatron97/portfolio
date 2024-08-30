import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark 
    font-medium text-lg'>
        <Layout className='py-8 flex items-center justify-between'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
            <div className='flex items-center'>
                Built by&nbsp;<Link href={'/'}
                className='underline underline-offset-2' target={'_blank'}>Sriharsh Sai</Link>
            </div>
            <Link href={'/contact'} target={'_blank'} className='flex items-center'>Say Hello</Link>
        </Layout>
    </footer>
  )
}

export default Footer