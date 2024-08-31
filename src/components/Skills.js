import React from 'react'
import {motion} from 'framer-motion'

const Skill = ({name, x, y}) => {
    return (
        <motion.div className='flex items-center justify-center rounded-full font-bold bg-dark text-light
        py-3 px-6 shadow-dark cursor-pointer absolute'
        style={{x, y}}
        initial={{x: 0, y: 0}}
        whileInView={{x: x, y: y}}
        viewport={{once: true}}
        transition={{duration: 1.5, type: 'spring', stiffness: 100}}
        whileHover={{scale: 1.05}}
        >
                {name}
        </motion.div>
    )
}

const Skills = () => {
  return (
   <>
    <h2 className='font-bold text-8xl mt-64 w-full text-center'>My Skills</h2>
    <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
        <motion.div className='flex items-center justify-center rounded-full 
        font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer'
        whileHover={{scale: 1.05}}
        >
            Software
        </motion.div>
        <Skill name="C++" x='-25vw' y='18vw'/>
        <Skill name="Java" x='15vw' y='-12vw'/>
        <Skill name="JavaScript" x='20vw' y='6vw'/>
        <Skill name="NodeJS" x='18vw' y='18vw'/>
        <Skill name="NextJS" x='-20vw' y='-15vw'/>
        <Skill name="React Native" x='0vw' y='12vw'/>
        <Skill name="MySQL" x='32vw' y='-5vw'/>
        <Skill name="MongoDB" x='0vw' y='-20vw'/>
        <Skill name="Unity 3D" x='-25vw' y='2vw'/>
        <Skill name="BabylonJS" x='-5vw' y='-10vw'/>
    </div>
   </>
  )
}

export default Skills