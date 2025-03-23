import Hero from '@/components/main/Hero'
import React from 'react'

const page = () => {
  return (
    <main className='h-full w-full'>
     <div className='flex flex-col h-[850px] gap-20'>
<Hero />
     </div>
    </main>
  )
}

export default page