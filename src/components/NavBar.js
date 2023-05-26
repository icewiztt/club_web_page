import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { TwitterIcon, GithubIcon, LinkedInIcon, FacebookIcon, SunIcon, MoonIcon } from './Icons'
import { motion } from 'framer-motion'
import Logo from './Logo'
import useThemeSwitcher from './hooks/useThemeSwitcher'

const CustomLink = ({ href, title, className = '' }) => {
    const router = useRouter();
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`h-[1px] inline-block bg-dark 
                absolute left-0 -bottom-0.5
                group-hover:w-full transition-[width] ease duration-300
                dark:bg-light
                ${router.asPath === href ? 'w-full' : 'w-0'}
            `}
            >
                &nbsp;
            </span>
        </Link>
    )
}

const CustomLinkMobile = ({ href, title, className = '', toggle }) => {
    const router = useRouter();
    const handleClick = () => {
        toggle();
        router.push(href);
    }

    return (
        <button href={href}
                className={`${className} relative group my-2`} 
                onClick={handleClick}>
            {title}
            <span className={`h-[1px] inline-block bg-light 
                absolute left-0 -bottom-0.5
                group-hover:w-full transition-[width] ease duration-300
                dark:bg-dark
                ${router.asPath === href ? 'w-full' : 'w-0'}
            `}
            >
                &nbsp;
            </span>
        </button>
    )
}

const NavBar = () => {

    const [mode, setMode] = useThemeSwitcher();
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <header
            className='w-full px-32 py-4 font-medium flex justify-between items-center
                    dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8'
        >
            <button className='flex-col justify-center items-center w-auto hidden lg:flex lg:items-center lg:py-5'
                    onClick={handleClick}>
                <span className={`bg-dark dark:bg-light transition-all duration-300 
                                   ease-out block h-0.5 w-6 rounded-sm
                                   ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}
                >
                </span>
                <span className={`bg-dark dark:bg-light transition-all duration-300
                                   ease-out block h-0.5 w-6 rounded-sm my-0.5 
                                   ${isOpen ? 'opacity-0' : 'opacity-100'}`}
                >
                </span>
                <span className={`bg-dark dark:bg-light transition-all duration-300
                                  ease-out block h-0.5 w-6 rounded-sm
                                  ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}
                >
                </span>
            </button>
            <div className='w-full flex justify-between items-center lg:hidden'>
                <nav>
                    <CustomLink href="/" title="Home" className="mr-4" />
                    <CustomLink href="/about" title="About" className="mx-4" />
                    {/* <CustomLink href="/projects" title="Projects" className="mx-4"/> */}
                    <CustomLink href="/members" title="Members" className="ml-4" />
                </nav>
                <nav className='flex items-center justify-center flex-wrap'>
                    <motion.a href="https://www.facebook.com"
                        target={'_blank'}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className='w-6 mx-3'
                    >
                        <FacebookIcon className='w-6 h-6' />
                    </motion.a>
                    <motion.a href="https://www.twitter.com"
                        target={'_blank'}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className='w-6 mx-3'
                    >
                        <TwitterIcon className='w-6 h-6' />
                    </motion.a>
                    <motion.a href="https://www.github.com"
                        target={'_blank'}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className='w-6 mx-3'
                    >
                        <GithubIcon className='w-6 h-6' />
                    </motion.a>
                    <motion.a href="https://www.linkedin.com"
                        target={'_blank'}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className='w-6 ml-3'
                    >
                        <LinkedInIcon className='w-6 h-6' />
                    </motion.a>

                    <button
                        onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
                        className='ml-3 flex items-center justify-center rounded-full p-1'
                    >
                        {
                            mode === 'dark' ?
                                <SunIcon/>
                                :
                                <MoonIcon/>
                        }
                    </button>
                </nav>
            </div>
            
            {
                isOpen ?
                        <motion.div 
                            initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            className='min-w-[70vw] flex flex-col justify-between items-center
                            fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30
                            bg-dark/90 text-light dark:text-dark dark:bg-light/75
                            rounded-lg backdrop-blur-md py-32'
                        >
                            <nav className='flex items-center flex-col justify-center flex-wrap
                                            mt-2'
                            >
                                <CustomLinkMobile href="/" title="Home" toggle={handleClick}/>
                                <CustomLinkMobile href="/about" title="About" toggle={handleClick}/>
                                {/* <CustomLink href="/projects" title="Projects" className="mx-4"/> */}
                                <CustomLinkMobile href="/members" title="Members" toggle={handleClick}/>
                            </nav>
                            <nav className='flex items-center justify-center flex-wrap'>
                                <motion.a href="https://www.facebook.com"
                                    target={'_blank'}
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.9 }}
                                    className='w-6 mx-3 sm:mx-1'
                                >
                                    <FacebookIcon className='w-6 h-6' />
                                </motion.a>
                                <motion.a href="https://www.twitter.com"
                                    target={'_blank'}
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.9 }}
                                    className='w-6 mx-3 sm:mx-1'
                                >
                                    <TwitterIcon className='w-6 h-6' />
                                </motion.a>
                                <motion.a href="https://www.github.com"
                                    target={'_blank'}
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.9 }}
                                    className='w-6 mx-3 sm:mx-1'
                                >
                                    <GithubIcon className='w-6 h-6' />
                                </motion.a>
                                <motion.a href="https://www.linkedin.com"
                                    target={'_blank'}
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.9 }}
                                    className='w-6 ml-3 sm:mx-1'
                                >
                                    <LinkedInIcon className='w-6 h-6' />
                                </motion.a>

                                <button
                                    onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
                                    className='ml-3 flex items-center justify-center rounded-full p-1'
                                >
                                    {
                                        mode === 'dark' ?
                                            <SunIcon />
                                            :
                                            <MoonIcon />
                                    }
                                </button>
                            </nav>
                        </motion.div>
                    :
                        null
            }

            <div className='absolute left-[50%] top-2 translate-x-[-50%] sm:translate-x-[-30%]'>
                <Logo id="logo" className="dark"/>
            </div>
        </header>
    )
}

export default NavBar