import Cta from '@/components/Cta'
import Gallery from '@/components/Gallery'
import Hero from '@/components/Hero'
import Process from '@/components/Process'
import Testimonials from '@/components/Testimonials'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero/>
      <div className="gradient-03 z-0" />
      <Testimonials/>
      <Process/>
      <Gallery/>
      <Cta/>
    </div>
  )
}

export default page