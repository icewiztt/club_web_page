import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import vinUniPhoto from '@/public/images/profile/VinUniversityImage.jpg'
import Loader from '@/components/Loader'

const AnimatedNumbers = ({value}) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {duration: 3000})
  const isInView = useInView(ref, {once: true})

  useEffect (() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
      springValue.on("change", (latest) => {
        if(ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0)
        }
      })
  }, [springValue, value])

  return (
    <span ref={ref}></span>
  )
}

const Animated = ({number, text}) => {
  return (
    <div className='flex flex-col items-end justify-center xl:text-center'>
      <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
        <AnimatedNumbers value={number}/>+
      </span>
      <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75
                     xs:text-center md:text-lg sm:text-base xs:text-sm'
      >
        {text}
      </h2>
    </div>
  )
}

const ANIM = [
  {
    number: 15,
    text: 'Members'
  },
  {
    number: 4,
    text: 'Departments'
  },
  // {
  //   number: 2,
  //   text: 'Years of Experience'
  // },
]

const about = () => {
  return (
    <>
        <Loader/>
        <Head>
            <title>About</title>
            <meta name='About Magnus' content='Information about Magnus Software'></meta>
        </Head>
        <main className='flex w-full flex-col items-center justify-center dark:text-light'>
          <Layout className='pt-16'>
            <AnimatedText text='An Initiative Sponsored By VinUniversity'
                          className='mb-16 lg:!text-7xl md:!text-6xl sm:!text-5xl 
                                     xs:!text-4xl sm:mb-8'>
            </AnimatedText>
            <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
              <div className='col-span-2 flex flex-col items-start justify-start xl:col-span-8
                              xl:order-2 md:col-span-8 xl:text-center xl:items-center'>
                <h2
                  className='mb-4 text-lg xl:text-center font-bold uppercase text-dark/75 dark:text-light/75'
                >
                  Who are we?
                  </h2>
                <p className='font-medium'>
                  We are Magnus, a VinUniversity&rsquo;s club formed with the aim of unifying
                  our talented tech and business community to create innovative solutions.
                </p>
                <p className='my-4 font-medium'>
                  Our services range from web and mobile applications development to
                  Machine Learning and Artificial Intelligence adaptations, everything
                  based on your particular needs.
                </p>
                <p className='font-medium'>
                  The values that better define our work are &ldquo;Innovation&rdquo;, 
                  &ldquo;Creativity&rdquo;, &rdquo;Responsibility&rdquo;, and &ldquo;Passion&rdquo;.
                </p>
              </div>

              <div className='col-span-4 relative h-max xl:order-1 xl:col-span-8'>
                  <Image src={vinUniPhoto} alt='Our Team'
                         className='w-full h-auto rounded-[100%]'
                         priority
                         sizes='(max-width: 768px) 100vw
                                (max-width: 1200px) 50vw,
                                50vw'
                  />
              </div>
              <div className='col-span-2 flex flex-col items-center justify-center
                              xl:col-span-8 xl:flex-row xl:justify-around xl:order-3
                              xl:items-center'>
                {
                  ANIM.map((item, index) => (
                    <Animated key={index} number={item.number} text={item.text}></Animated>
                  ))
                }
              </div>
            </div>
          </Layout>
        </main>
    </>
  )
}

export default about