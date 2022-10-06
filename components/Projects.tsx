import { motion } from 'framer-motion'
import Link from 'next/link';
import React from 'react'
import { urlFor } from '../sanity';
import { Project } from '../typings';

type Props = {
    projects: Project[];
}

function Projects({ projects }: Props) {
  return (
    <motion.div
        className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
    >
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>

        <div className='relative mt-14 md:mt-32 w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
            {projects.map((project) => (
                <div key={project._id} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                    <motion.img
                        initial={{
                            y: -300,
                            opacity: 0,
                        }}
                        transition={{ duration: 1.2 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        src={urlFor(project?.image).url()} alt=""
                        className='max-w-[300px] md:max-w-[500px] object-fit'
                    />
                    <div className='space-y-5 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-2xl lg:text-4xl font-semibold text-center'>{project?.title}</h4>

                        <div className='flex items-center space-x-2 justify-center'>
                            {project?.technologies.map((technology) => (
                                <img
                                    className='h-10 w-10 rounded-full'
                                    key={technology._id}
                                    src={urlFor(technology.image).url()}
                                    alt=""
                                />
                            ))}
                        </div>

                        <p className='text-sm md:text-base text-center md:text-left'>{project?.summary}</p>

                        <div className='text-center flex items-center justify-center'>
                            <Link href={project?.linkToBuild}>
                                <button className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg hover:bg-opacity-60'>View Project</button>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12' />
    </motion.div>
  )
}

export default Projects