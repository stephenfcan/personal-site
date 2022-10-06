import React from 'react'
import { motion } from 'framer-motion'
import { Experience } from '../typings'
import { urlFor } from '../sanity';

type Props = {
    experience: Experience;
}

function ExperienceCard({ experience }: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-3 md:space-y-7 flex-shrink-0 w-[300px] md:w-[400px] h-[450px] md:[550px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img
            className='w-24 h-24 rounded-full xl:w-[120px] xl:h-[120px] object-cover object-center'
            src={urlFor(experience?.companyImage).url()}
            alt=""
            initial={{
                y: -100,
                opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{ once: true }}
        />

        <div className='px-0'>
            <h4 className='text-xl md:text-2xl font-light text-center'>{experience?.jobTitle}</h4>
            <p className='font-bold text-2xl mt-1 text-center'>{experience?.company}</p>
            <div className='flex space-x-2 my-2'>
                {experience?.technologies?.map((technology) => (
                    <img
                        key={technology._id}
                        className='h-10 w-10 rounded-full'
                        src={urlFor(technology.image).url()}
                        alt=""
                    />
                ))}
            </div>
            <p className='text-xs md:text-base uppercase py-3 text-gray-300'>
                {new Date(experience?.dateStarted).toDateString()} -{' '}
                {experience?.isCurrentlyWorkingHere ? 'Present' : new Date(experience?.dateEnded).toDateString()}
            </p>

            <ul className='list-disc space-y-4 ml-5 text-lg h-20 overflow-y-scroll scrollbar-thin'>
                {experience?.points?.map((point, i) => (
                    <li className='text-xs md:text-base' key={i}>{point}</li>
                ))}
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard