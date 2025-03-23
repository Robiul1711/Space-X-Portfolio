import React from 'react'
import HeroConttent from '../sub/HeroConttent'

const Hero = () => {
  return (
    <div className='relative text-white flex flex-col h-full w-full'>
<video autoPlay loop muted className='absolute rotate-180 top-[-350px] left-0 z-[1] w-full h-full object-cover'>
    <source src='/blackhole.webm' type='video/webm' />
</video>
<HeroConttent />
    </div>
  )
}

export default Hero