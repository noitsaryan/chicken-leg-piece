import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <main className='flex flex-col justify-center p-[5vw]'>
      <Hero/>
      <Services/>
      <Contact/>
      <p className='text-center'> Developed by <Link className='underline '  href="mailto:imailaryan01@gmail.com"> Aryan Vishwakarma </Link> </p>
    </main>
  )
}

export default page