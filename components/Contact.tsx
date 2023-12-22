import { Home, Mail, PhoneCall } from 'lucide-react'
import React from 'react'

function Contact() {
  return (
    <section className='px-8'>
        <h1 className='border-b  border-red-500 inline-block text-4xl'> Reach Us  </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-8 '>
            {
                [{icon: <PhoneCall/>, name: 'Phone', data: '+91 8793047933'}, {icon: <Mail/>, name: 'Email', data: 'asrv@powerhousemedia.in'}, {icon: <Home/>, name: 'Address', data: 'Chicken leg piece studio, <br/> Rane hall, Lingeshwar Sadan, Near Ashirwad hotel, Kaju pada, Bhatwadi, Ghatkopar (west), Mumbai - 400 086'}].map((e,i) => (
                    <div className='bg-white border break-inside-avoid rounded-xl p-4 shadow-xl text-gray-600' key={i}>
                        <h1 className='flex gap-3'>
                        {
                            e.icon
                        }
                        {
                            e.name
                        }
                        </h1>
                        <div className='my-2' dangerouslySetInnerHTML={{__html: e.data}} />
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Contact