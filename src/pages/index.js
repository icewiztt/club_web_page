import AnimatedText from '@/components/AnimatedText'
import { LinkArrow, MagnusIconLight } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import Loader from '@/components/Loader'

export default function Home() {
  return (
    <>
      <Loader/>
      <Head>
        <title>Magnus</title>
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen lg:min-h-min dark:text-light'>
        <Layout className='pt-0 md:pt-16 sm:pt-4'>
          <div className='flex justify-between w-full lg:flex-col lg:items-center'>
            <div className='w-1/2 lg:w-[85%]  pt-0'>
              <MagnusIconLight className='w-full h-auto md:inline-block md:w-full'></MagnusIconLight>
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText text='Software and AI development'
                            className='!text-6xl !text-left lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl'>
              </AnimatedText>
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
                We are an AI and software development club at <a href="https://www.vinuni.edu.vn/" target="_blank" className='text-blue'>VinUniversity</a> specialized in consulting,
                software construction, and training.
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href='/about' passHref
                  className='flex items-center bg-dark text-light p-2.5 px-6
                    rounded-lg font-semibold hover:bg-light hover:text-dark transition-all
                    border-2 border-solid border-transparent hover:border-dark mr-4
                    dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light
                    dark:hover:border-light md:p-2 md:px-4 md:text-base'  
                >
                  About <LinkArrow className='w-6 ml-1'></LinkArrow>
                </Link>
                <Link href='mailto:magnus.vinuni@gmail.com' passHref target={'_blank'}
                  className='ml-4 text-lg capitalize font-medium text-blue underline
                             dark:text-light md:text-base'
                >
                  EMAIL US
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}
