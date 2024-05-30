import Image from 'next/image'
import React from 'react'

interface Props {
    image : string,
    resumeLink : string
}
const Members = (props : Props) => {
  return (
    <div className='max-w-60 bg-[#220303] rounded-lg px-4 py-12'>
    <Image className='rounded-lg' src={props.image} alt={''} width={768} height={1024}/>
    <div className='w-full flex flex-col justify-center gap-1 text-white pt-5'>
        <p className='w-full text-center'>Hilmi Azmi</p>
        <p className='w-full text-center text-xs'>Lead</p>
        <p className='w-full text-center text-xs text-gray-500'>Project Head</p>
        <div className='w-full flex justify-center'><button className='btn bg-[#f30101] px-5 py-2 mt-3 rounded-lg'>Learn More</button></div>
    </div>
</div>
  )
}

export default Members