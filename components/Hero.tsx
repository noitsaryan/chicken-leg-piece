import Image from 'next/image'
import React from 'react'
import { PiFacebookLogoLight, PiInstagramLogo, PiYoutubeLogo } from "react-icons/pi";
import Paragraph from './Paragraph';
import Link from 'next/link';

function Hero() {
  return (
    <section className='flex gap-8 justify-center flex-col-reverse lg:flex-row'>
      <div className=' py-[8vw] space-y-5 '>
        <h1 className='lg:text-4xl text-center text-3xl lg:text-left font-bold'>Hi, I'm <Link href="https://www.facebook.com/chickenlegpiececlp" className='border-b-4 border-red-500 '>Chicken Leg Piece.</Link></h1>
        <p className='text-sm  lg:text-left text-center'>~ <Link href="https://g.co/kgs/UuZiLf" className=' text-xl lg:text-2xl'>Ulhas Kamathe<span className='text-red-500'>.</span></Link></p>
        <div className='flex items-center gap-4 text-4xl '>
        </div>
        <div className='grid grid-cols-3 gap-4 rounded-full'>
          {
            Array.from([{ icon: <PiInstagramLogo className="transition-all text-pink-500  cursor-pointer hover:text-gray-400 text-3xl mx-auto md:mx-0" />, name: '@ulhaskamthe', followers: '3.2M', link: 'https://instagram.com/ulhaskamthe' }, { icon: <PiFacebookLogoLight className="transition-all text-blue-500  cursor-pointer hover:text-gray-400 text-3xl mx-auto md:mx-0" />, name: '@chickenlegpiececlp', followers: '2.3M', link: 'https://facebook.com/chickenlegpiececlp' }, { icon: <PiYoutubeLogo className="transition-all text-red-500  cursor-pointer hover:text-gray-400 text-3xl mx-auto md:mx-0" />, name: '@ChickenLegPiece', followers: '4.44M', link: 'https://youtube.com/@ChickenLegPiece' }]).map((e, i) => (
              <Link href={e.link} key={i}>
                <div className='bg-white shadow-xl border p-4 space-y-2 rounded-xl'>
                {
                  e.icon
                }
                <p className='text-gray-400 text-center md:text-left truncate md:block'> {e.name} </p>
                <p className='text-3xl font-bold text-center md:text-left'> {e.followers} </p>
              </div>
              </Link>
            ))
          }
        </div>
        <div className='bg-white w-full shadow-xl border p-4 rounded-xl'>
          <p className='uppercase text-2xl text-gray-400 '>we do</p>
          <Paragraph/>
        </div>
      </div>
      <div className='relative px-[5vw] mx-auto'>
        <Image alt='hero image' src="/Profile.webp" width={400} height={400} className='rounded-full shadow-xl' priority />
        <Image src="https://yt3.googleusercontent.com/sfv6NgCH0PMKBP_7eFFUVP9mhZ4nNhn_QJXUYqOJBF6MljeBojkBB2D5DZDm2BIIYlEbnWV0bA=s176-c-k-c0x00ffffff-no-rj" alt='Logo' width={150} height={150} className='rounded-full absolute bottom-0 shadow-xl ' />
      </div>
    </section>
  )
}

export default Hero