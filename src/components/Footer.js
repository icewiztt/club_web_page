import React from 'react'
import Layout from './Layout'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid
        font-medium text-lg dark:text-light sm:text-base sm:text-center'>
        <Layout className='py-5 flex items-center justify-end lg:flex-col lg:py-6'>
            <span>Magnus {new Date().getFullYear()} &copy; All Rights Reserved</span>
        </Layout>
    </footer>
  )
}

export default Footer