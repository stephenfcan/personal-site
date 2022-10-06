import React from 'react'
import { motion } from 'framer-motion'
import { PageInfo } from '../typings'
import { urlFor } from '../sanity';

type Props = {
    pageInfo: PageInfo;
}

function About({ pageInfo }: Props) {
  return (
    <motion.div
        className='flex flex-col relative text-center md:text-left md:flex-row h-screen max-w-7xl px-10 justify-evenly mx-auto items-center'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
    >
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
        <motion.img
            className='mt-7 -mb-[120px] md:mb-0 flex-shrink-0 w-40 h-40 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 lg:w-[300px] lg:h-[400px]'
            src={urlFor(pageInfo?.profilePic).url()}
            initial={{
                x: -200,
                opacity: 0,
            }}
            whileInView={{
                x: 0,
                opacity: 1,
            }}
            viewport={{
                once: true,
            }}
            transition={{
                duration: 1.2,
            }}
        />
        <div className='space-y-5 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>A little bit about me</h4>
            <p className='text-base'>{pageInfo?.backgroundInformation}</p>
        </div>
    </motion.div>
  )
}

export default About