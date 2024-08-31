import React, { useRef } from 'react'
import { motion, useScroll } from "framer-motion"
import LiIcon from './LiIcon'

const Details = ({position, company, time, work}) => {

    const ref = useRef(null);

    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
        <LiIcon reference={ref} />
        <motion.div 
        initial={{y: 50}} 
        whileInView={{y: 0}} 
        transition={{duration: 0.5, type: 'spring'}}>
            <h3 className='capitalize font-bold text-2xl'>
                {position}&nbsp;@{company}
            </h3>
            <span className='capitalize font-medium text-dark/75'>
            {time}
            </span>
            <p className='font-medium w-full'>
                {work}
            </p>
        </motion.div>
        </li>
    )
}

const Education = () => {

    const ref = useRef(null);

    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    ); 

  return (
    <div className='my-64'>
    <h2 className='font-bold text-8xl mb-32 w-full text-center'>
        Experience
    </h2>
    <div ref={ref} className='w-[75%] mx-auto relative'>
        <motion.div style={{scaleY: scrollYProgress}} className='absolute left-7 top-0 w-[4px] h-full bg-dark origin-top'/>
        <ul className='w-full flex flex-col items-start justify-between ml-4'>
            <Details
            position='Software Developer'
            company={'Bapoo Pizza'}
            time='Jan 2023 - Present | Remote'
            work='Developed a pizza store website using ASP.NET Core, MySQL, and C#.
Managed the code repository using GitHub and VSCode.
Deployed the project using Microsoft Azure.'
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

<Details
            position='Junior Developer'
            company={'Web Vertical Domains'}
            time='Jan 2020 - Apr 2020 | Remote'
            work='Designed and maintained websites using WordPress and Joomla.
Worked on database configurations and troubleshooting.
Communicated with clients to understand project requirements and deliver solutions.'
            />
        </ul>
    </div>
    </div>
  )
}

export default Education