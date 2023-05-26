import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import { MagnusIcon, MagnusIconLight, VinUniIcon } from './Icons'

const MotionLink = motion(Link)

const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
        <MotionLink href="/"
            className='w-44 h-auto flex items-center justify-center text-2xl font-bold'
            whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.3 },
            }}
        >
          <div className='w-1/2'>
            <MagnusIconLight className='w-full'></MagnusIconLight>
          </div>
          <div className='w-1/2'>
            <VinUniIcon className='w-full mt-3'/>
          </div>
        </MotionLink>
    </div>
  )
}

export default Logo