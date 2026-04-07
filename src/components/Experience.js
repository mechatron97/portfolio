import React, { useRef } from 'react'
import { motion, useScroll } from "framer-motion"
import LiIcon from './LiIcon'

const Details = ({position, company, time, work}) => {

    const ref = useRef(null);

    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between
        md:w-[80%]'>
        <LiIcon reference={ref} />
        <motion.div 
        initial={{y: 50}} 
        whileInView={{y: 0}} 
        transition={{duration: 0.5, type: 'spring'}}>
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                {position}&nbsp;@{company}
            </h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
            {time}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {work}
            </p>
        </motion.div>
        </li>
    )
}

const Experience = () => {

    const ref = useRef(null);

    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    ); 

  return (
    <div className='my-64'>
    <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
        Experience</h2>
    <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
        <motion.div style={{scaleY: scrollYProgress}} className='absolute left-7 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
        md:w-[2px] md:left-[30px] xs:left-[20px]'/>
        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                        <Details
            position='Software Engineer'
            company={'SpinSci Technologies LLC'}
            time='Jan 2026 - Present | Hybrid'
            work='Architecting and integrating mission-critical health-tech applications utilizing a high-performance stack of JavaScript, React, and Node.js to deliver scalable business solutions. 
Implementing resilient microservices and serverless logic via AWS Lambda and Docker to optimize system performance and resource efficiency across distributed healthcare environments.
Translating complex clinical requirements and healthcare operational specifications into functional system designs and robust, product-based architectures.
Managing high-concurrency integrations with PostgreSQL relational databases, ensuring absolute data accuracy for patient records and resolving intricate backend performance bottlenecks.
Maintaining high-availability applications through disciplined Git-based version control, implementing secure code updates and troubleshooting production environments to meet rigorous compliance standards.
Providing high-level technical guidance and subject matter expertise in emerging technologies to ensure the delivery of scalable, secure, and efficient software.'
            />
            
            <Details
            position='Full Stack Developer'
            company={'XceptAI'}
            time='May 2024 – Present | Remote'
            work='Engineered a scalable, AI-driven SMS automation platform using Node.js, TypeScript, Express, Twilio, and OpenAI APIs.
Implemented SMS number rotation service to maximize delivery rates and avoid carrier limits.
Integrated Google Calendar and Gmail APIs for automated appointment booking and email notifications.
Designed PostgreSQL knowledge base with pgvector for AI-powered semantic search features.
Established Dockerized microservices architecture with CI/CD pipelines and cloud deployment.
Built secure authentication and token refresh mechanisms for seamless third-party integrations.'
            />

<Details
            position='Software Developer'
            company={'Digy4 Inc.'}
            time='Jul 2021 - Oct 2022 | Remote'
            work='Created a CRM application with NodeJS, Express, MongoDB, and EJS.
Implemented automated testing frameworks using TestNG and Selenium.
Worked with Confluence and Jira for project management and storyboarding.'
            />

<Details
            position='Front End Developer'
            company={'Evolve Branding'}
            time='Apr 2020 - Jun 2021 | Remote'
            work='Worked as a Front-End Developer for Worldwide Bee Apiaries.
Built the website frontend using ReactJS, Bootstrap, and Tailwind CSS.
Integrated Eventbrite API for seamless event management.'
            />

        </ul>
    </div>
    </div>
  )
}

export default Experience