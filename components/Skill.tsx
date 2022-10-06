import { motion } from 'framer-motion'
import React from 'react'
import { urlFor } from '../sanity';
import { Skill } from '../typings';

type Props = {
    directionLeft?: boolean;
    skill: Skill;
}

function Skill({ directionLeft, skill }: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img
            className=" rounded-full border border-gray-500 object-cover h-14 w-14 md:h-24 md:w-24 filter group-hover:grayscale transition duration-300 ease-in-out"
            initial={{
                x: directionLeft ? -200 : 200,
                opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src={urlFor(skill?.image).url()}
        />

        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-14 w-14 md:h-24 md:w-24 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-sm font-bold text-black opacity-100'>{skill?.title}</p>
            </div>
        </div>
    </div>
  )
}

export default Skill