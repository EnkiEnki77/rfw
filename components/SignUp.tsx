import React from 'react'

type Props = {}

const SignUp = (props: Props) => {
  return (
    <form className='flex flex-col items-center text-white gap-5 pt-[265px] h-full'>
        <h2 className='uppercase text-3xl font-bold leading-3'>COMING BACK APRIL 2023</h2>
        <h1 className='text-center text-lg'>Sign-up for updates on RFW events, <br/>
            programming and experiences!</h1>
        <input type="text" 
               placeholder='Enter email...'
               className='py-1 px-3 text-black'
               />
        <button className='h-10 w-32 bg-[#D88BB9] hover:brightness-110 flex items-center justify-center uppercase text-xs font-bold' 
                type='submit'>
                    submit
        </button>
    </form>
  )
}

export default SignUp