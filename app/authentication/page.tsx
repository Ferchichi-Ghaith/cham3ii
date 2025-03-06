import React from 'react'
import MainLayout from '../MainLayout'
import { Auth } from '@/components/elements/Auth'

const page = () => {
  return (
   <MainLayout>
    <section className='min-h-screen bg-black flex items-center justify-center flex-col'> 
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-white/80 mb-16">
        legends boost account connection
      </h1>
     <Auth/> 
    </section>
    
   </MainLayout>
  )
}

export default page