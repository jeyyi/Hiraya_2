import React from 'react'

function tailwindtutorial() {
  return (
    <div className='h-screen flex justify-between'>
        <div className='flex h-full w-1/4 bg-red-500 justify-center content-center'>
            <p className='text-3xl font-bold text-green-900'>Hello world</p>
        </div>
        <div className='h-full w-full bg-blue-500'/>
        <div className='h-full w-1/4 bg-yellow-500'/>
    </div>
  )
}

export default tailwindtutorial