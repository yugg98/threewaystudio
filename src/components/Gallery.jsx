import Image from 'next/image'
import React from 'react'

const Gallery = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-xl text-center">
      <h2 className="text-lg font-semibold leading-8 tracking-tight text-white">Our Work</h2>
      <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        We have worked with thousands of amazing people
      </p>
    </div>
    <div className='my-12 grid grid-cols-2 grid-rows-2 gap-10 gap-x-12 max-w-5xl mx-auto'>
        <img src='/krida.webp' className='max-w-md' />
        <img src='/krida.webp' className='max-w-md' />
        <img src='/krida.webp' className='max-w-md' />
        <img src='/krida.webp' className='max-w-md' />

        </div>
    </div>
  )
}

export default Gallery