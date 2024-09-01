import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import project1 from '../../public/images/projects/agency-website-cover-image.jpg'

const FeaturedProject = ({type, title, summary, img, link}) => {
    return (
        <article>
            <Link href={link} target='_blank'>
                <Image src={img} alt={title} className='w-full h-auto' />
            </Link>
                <div>
                    <span>{type}</span>
                    <Link href={link} target='_blank'>
                        <h2>{title}</h2>
                    </Link>
                    <p>{summary}</p>
                    <div>
                        <Link href={link} target='_blank' className='text-lg font-medium underline'>
                        Visit
                        </Link>
                    </div>
                </div>
        </article>
    )
}

const projects = () => {
  return (
    <>
    <Head>
      <title>Sriharsh Sai | Projects</title>
      <meta name="description" content="projects page" />
    </Head>
    <main className='w-full mb-16 flex flex-col items-center justify-center'>
        <Layout className='pt-16'>
            <AnimatedText text="Imagination Meets Implementation" />
            <div className='grid grid-cols-12 gap-24'>
                <div className='col-span-12'>
                    <FeaturedProject
                    type="iOS App"
                    title="SportsBuddy"
                    summary="Developed a sports social media app aimed at connecting athletes and sports clubs within a specific geographic radius.
Implemented categorization features to group users by specific sports and relevant events happening at nearby sports clubs.
Built using React Native, Expo Go, and React Native UI components to ensure a smooth and intuitive user experience.
Integrated third-party authentication for seamless sign-up and sign-in using Google and Facebook."
                    img={project1}
                    link="https://github.com/mechatron97/SportsBuddy"
                    />
                </div>
                <div className='col-span-6'>
                    Project-1
                </div>
                <div className='col-span-6'>
                    Project-2
                </div>
                <div className='col-span-12'>
                    Featured Project
                </div>
                <div className='col-span-6'>
                    Project-3
                </div>
                <div className='col-span-6'>
                    Project-4
                </div>
            </div>
        </Layout>
    </main>
    </>
  )
}

export default projects