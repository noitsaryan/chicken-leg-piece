import React from 'react'

function Services() {
  return (
    <section className='px-8'>
        <h1 className='border-b  border-red-500 inline-block text-4xl'> Services  </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-8'>
            {
                ['Social Media Branding', 'Brand Collaboration', 'Curated Experiences', 'Social Outreach'].map((e,i) => (
                    <div className='bg-white border rounded-xl p-4 shadow-xl text-gray-600' key={i}>
                        <h1>
                            <span className='text-red-500'>{i+1}. </span>
                        {
                            e
                        }
                        </h1>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Services