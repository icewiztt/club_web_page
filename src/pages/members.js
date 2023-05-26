import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import professorPhoto from '@/public/images/members/professorPhoto.jpg'
import advisorPhoto from '@/public/images/members/advisor.jpeg'
import presidentPhoto from '@/public/images/members/presidentPhoto2.png'
import vicePresidentPhoto1 from '@/public/images/members/vicePresident1.jpg'
import vicePresidentPhoto2 from '@/public/images/members/VicePresident2.jpg'
import designerLeader from '@/public/images/members/designerLeader.png'
import frontendLeader from '@/public/images/members/frontendLeader.jpeg'
import businessLeader from '@/public/images/members/businessLeader.jpg'
import useWindowDimensions from '@/components/hooks/useWindowDimensions'
import Loader from '@/components/Loader'

const CoreMemberRight = ({ position, description, photo }) => {

  return (
    <>
      <div className='col-span-1'></div>
      <div className='col-span-3 flex flex-col items-start justify-start width-1/2'>
        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>{position}</h2>
        <p className='font-medium dark:text-light/75'>
          {description}
        </p>
      </div>
      <div className='flex justify-end w-full'>
        <Image src={photo} alt='Our Team' className='h-40 w-auto rounded-[20%]'
                priority
                sizes='(max-width: 768px) 100vw
                        (max-width: 1200px) 50vw,
                        50vw'
          />
      </div>
      <div className='col-span-1 lg:hidden'></div>
    </>
  )
}

const CoreMemberLeft = ({ position, description, photo, index }) => {

  return (
    <>
      <div className='col-span-1 lg:hidden'></div>
      <div className={`flex justify-start lg:order-[${index}] lg:col-span-6 lg:justify-center`}>
        <Image src={photo} alt='Our Team' className='h-40 w-auto rounded-[20%] xl:h-35 xl:w-35'
               priority
               sizes='(max-width: 768px) 100vw
                      (max-width: 1200px) 50vw,
                      50vw'
        />
      </div>
      <div className={`col-span-3 flex flex-col items-start justify-start
                      width-1/2 lg:order-[${index + 1}] lg:col-span-6 lg:items-center lg:text-center`}>
        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>{position}</h2>
        <p className='font-medium dark:text-light/75'>
          {description}
        </p>
      </div>
      <div className='col-span-1 lg:hidden'></div>
    </>
  )
}

const MEMBERS = [
  {
    position: 'President',
    description: "Sebastián Romero is our club's president, he is a Computer Science student at VinUniversity and has been working as a software developer for the past 2 years.",
    photo: presidentPhoto
  },
  {
    position: 'Vice-President',
    description: "Vu Hong Phuc is our club's vice-president and AI Leader, he is a Computer Science student at VinUniversity and currently an intern at Got It AI.",
    photo: vicePresidentPhoto1
  },
  {
    position: 'Vice-President',
    description: "Thành Trần is our club's vice-president and Backend Leader, he is a Computer Science student at VinUniversity and has been working as a backend engineer for more than one year.",
    photo: vicePresidentPhoto2
  },
  {
    position: 'Frontend Leader',
    description: "Thanh Đinh Văn is our Frontend Leader, he is a Computer Science student at VinUniversity and has been working as a frontend engineer for more than one year.",
    photo: frontendLeader
  },
  {
    position: 'Business and Marketing Leader',
    description: "Trịnh Chiến Thắng is our Business Leader, he is a Business Administration student at VinUniversity.",
    photo: businessLeader
  },
  {
    position: 'UI/UX Designer',
    description: "Đinh Thế Minh is our UI/UX Designer, he is an Electrical Engineering student at VinUniversity.",
    photo: designerLeader
  },
]

const Members = () => {

  const { width } = useWindowDimensions();

  return (
    <>
        <Loader />
        <Head>
            <title>Members</title>
            <meta name='Members' content='Magnus Members'></meta>
        </Head>
        <main className='flex w-full flex-col items-center justify-center dark:text-light/75'>
          <Layout className='pt-16'>
            <AnimatedText text='Our most valuable asset is our people'
                          className='mb-16 lg:!text-7xl md:!text-6xl sm:!text-5xl 
                          xs:!text-4xl sm:mb-8'
            >
            </AnimatedText>
            <div className='grid w-full grid-cols-6 gap-16 items-center justify-center lg:gap-6'>
              <div className='col-span-3 flex flex-col items-start justify-start lg:order-0 lg:col-span-6 lg:text-center lg:items-center'>
                <h2 className='mb-4 text-xl font-bold uppercase text-dark/75 dark:text-light/75'>
                  Club&rsquo;s Advisor
                </h2>
                <p className='font-medium'>
                  Meet our team&rsquo;s advisor, Professor Laurent El Ghaoui, a world-renowned
                  expert in the field of Machine Learning and Artificial Intelligence.
                </p>
              </div>
              <div className='flex col-span-3 relative h-max mb-16 lg:order-0 lg:col-span-6 lg:justify-center lg:mb-12'>
                  {
                    width < 1023 ?
                      <Image src={advisorPhoto} alt='Our Team' className='h-40 w-auto rounded-[20%] xl:h-35 xl:w-35 items-center'
                             priority
                      />
                      :
                      <Image src={professorPhoto} alt='Our Team' className='w-full h-auto rounded-[100%]'
                           priority
                           sizes='(max-width: 768px) 100vw
                                    (max-width: 1200px) 50vw,
                                    50vw'
                      />
                  }
              </div>
              <div className='col-span-6 flex justify-center mb-4'>
                <h2 className='text-xl font-bold uppercase
                              text-dark/75 dark:text-light/75'>
                    Club Members
                </h2>
              </div>
              {
                MEMBERS.map((member, index) => (
                  index % 2 === 0 || width < 1023 ? <CoreMemberLeft
                    key={index}
                    index={index*2 + 2}
                    position={member.position}
                    description={member.description}
                    photo={member.photo}
                  />
                  : <CoreMemberRight
                    key={index}
                    position={member.position}
                    description={member.description}
                    photo={member.photo}
                  />
                ))
              }
            </div>
          </Layout>
        </main>
    </>
  )
}

export default Members