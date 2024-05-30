import React from 'react'
import Image from 'next/image'
const Header = () => {
  return (
    <div className='flex flex-row justify-center gap-4 flex-wrap px-11'>
    <div className='flex flex-row justify-center pb-7'>
        <div className='max-w-screen-sm'>
            <Image src="/images/logo.png" alt="alt" width={120} height={120} />

            <div className='flex flex-row justify-center relative'>
                {/* <Image className='absolute' src="/images/dragon.png" alt="alt" width={300} height={300} /> */}
            </div>
            <div className='flex flex-col gap-3 mt-16'>
                <p className='text-[#e80000] font-bold text-sm'>Over 4k users interacted.</p>
                <p className='font-extrabold text-6xl italic'>GEMENTAR TEAM</p>
                <p className='font-extrabold text-4xl italic'>JOURNEY STARTS WITH ONE STEP!</p>
                <p className='font-bold text-xs'>We&apos;re a group of passionate individuals pursuing hobbies and freelance projects with big dreams for the future. Join us on this exciting journey of creativity and innovation! Stay tuned for remarkable things ahead with Gementar Team!</p>
            </div>
        </div>
    </div>

    <div className='flex px-6  flex-col gap-4 bg-[#e80000] justify-center text-white rounded-br-full rounded-bl-full pt-16'>
        <div className='flex flex-row gap-4 justify-center flex-wrap'>
            <div className='grow flex flex-col justify-center'>
                <div className='flex flex-row justify-center  text-center sm:text-left'>
                    <div>
                        <div className='font-bold'>Contact Us</div>
                        <div>team@gementar.com</div>
                    </div>
                </div>
            </div>
            <div className='grow flex flex-col justify-center  text-center sm:text-left'>
                <div className='flex flex-row justify-center'>
                    <div>
                        <div className='font-bold'>Call us</div>
                        <div>+60 16455 3677</div>
                    </div>
                </div>
            </div>
            <div className='grow flex flex-col justify-center text-black'>
                <div className='flex flex-row justify-center'>
                    <button className='bg-white border border-white p-3 rounded-3xl font-bold hover:bg-[#e80000] hover:text-white'>
                        <div>Check us out! -{`>`}</div>
                    </button>
                </div>
            </div>
        </div>
        <div className='flex flex-row justify-center'>
            <Image src="/images/pc.png" alt="alt" width={400} height={400} />
        </div>
    </div>
</div>
  )
}

export default Header