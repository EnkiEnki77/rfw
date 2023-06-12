import React, { useState } from 'react'

const SignUp = ({onValidated , status, message}) => {
  const [email, setEmail] = useState('')
  
  const submit = (e) => {
    e.preventDefault()

    onValidated({
      EMAIL: email,
    });
    setEmail('')
  }
   

  return (
    <form className='flex flex-col items-center text-white gap-5 pt-[225px] h-full' onSubmit={(e) => submit(e)}>
        
        {status === "error" && (
          <div
            style={{ color: "red" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "sending" && (
          <div
          className=' px-8 py-4 bg-black/40 rounded-xl top-56   absolute mx-auto text-green-300 flex items-center justify-center text-center'
            
          >sending...</div>
        )}
        {status === "success" && (
          <div
          className=' px-8 py-4 bg-black/40 rounded-xl top-56   absolute mx-auto text-pink-300 flex items-center justify-center text-center'
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        <h2 className='uppercase text-3xl font-bold leading-3'>COMING BACK 2024</h2>
        <h1 className='text-center text-lg'>Sign-up for updates on RFW events, <br/>
            programming and experiences!</h1>
           
        <input type="text" 
               placeholder='Enter email...'
               className='py-1 px-3 text-black'
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               />

        <button className='h-10 w-32 bg-[#D88BB9] hover:brightness-110 flex items-center justify-center uppercase text-xs font-bold' 
                type='submit'>
                    submit
        </button>
    </form>
  )
}

export default SignUp