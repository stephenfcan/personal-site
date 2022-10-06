import React from 'react'
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from 'react-hook-form'
import { PageInfo } from '../typings'

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
}
type Props = {
    pageInfo: PageInfo;
}

function ContactMe({ pageInfo }: Props) {
  
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:stephenfcan@gmail.com?subject=${formData.subject}&body=${formData.name}. ${formData.message} (${formData.email})`
  };
    
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact</h3>

        <div className='flex flex-col space-y-5 mt-10'>
            <h4 className='text-2xl md:text-4xl font-semibold text-center'>Want to have a chat? <span className='underline decoration-[#F7AB0A]/50'>Let's talk.</span></h4>

            <div>
                <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                    <p className='text-xl'>+404-518-4166</p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                    <p className='text-xl'>stephenfcan@gmail.com</p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                    <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                    <p className='text-xl'>{pageInfo?.address}</p>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className='space-x-2 flex'>
                    <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
                    <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
                </div>
                <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />
                <textarea {...register('message')} placeholder='Message' className='contactInput' />
                <button type='submit' className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg hover:bg-opacity-60'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default ContactMe