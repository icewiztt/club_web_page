import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const Loader = () => {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const handleStart = (url) => (url !== router.asPath) && setLoading(true);
        const handleComplete = (url) => (url === router.asPath) && setLoading(false);

        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleComplete);
        router.events.on('routeChangeError', handleComplete);

        return () => {
        router.events.off('routeChangeStart', handleStart);
        router.events.off('routeChangeComplete', handleComplete);
        router.events.off('routeChangeError', handleComplete);
        }
    })
    return (
        <div className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center
                        bg-dark/50 z-50 transition-all duration-300
                        ${loading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className='w-20 h-20 border-4 border-solid border-light rounded-full animate-spin'></div>
        </div>
    )
}

export default Loader
