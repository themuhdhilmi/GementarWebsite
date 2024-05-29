
import React from 'react'
import Header from './components/Header'

const page = () => {
  return (
    <div>
        <Header/>

        <div className='bg-black mt-28'>
            <div className='flex flex-col justify-center py-11'>
                <div className='flex w-full flex-row justify-center'>
                    <p className='font-extrabold text-4xl italic text-white'>GEMENTAR TEAM</p>
                </div>
                <div className='flex w-full flex-row justify-center'>
                    <p className='font-extrabold text-3xl italic text-[#e80000]'>MEMBER</p>
                </div>
            </div>


        </div>



    </div>
  )
}

export default page