import React from 'react'

// Types
import { firstnameCardProps } from '@/types'

const FirstnameCard = (detailedFirstname: firstnameCardProps) => {

  const translation = detailedFirstname?.translation
  const pronunciation = detailedFirstname?.pronunciation
  const audio = detailedFirstname?.audio
  const isEmpty = detailedFirstname?.isEmpty

  return (
    <div className='flex flex-col items-center justify-center w-3/4 min-h-32 px-3 sm:px-7 py-5 mb-10 bg-white rounded-lg shadow-lg'>
      {isEmpty === undefined ?
        null :
        translation ?
          <>
            <h2 className='font-bold text-center text-3xl md:text-4xl mb-4 text-black'>{translation}</h2>
            <h3 className='text-center'><span className='italic text-black'>Ça se prononce:</span> <span className="text-black font-bold mx-2">{pronunciation}</span> <a href={audio} target="_blank" rel="noreferrer" className='px-[5px] py-[3px] bg-white border border-slate-50 hover:shadow-inner hover:border-gray-100 rounded-full shadow-sm'>🔊</a></h3>
          </>
          :
          <>
            <h2 className='text-left text-black'>
              <p className='mb-3 font-bold'>Oops, pas de traduction pour ce prénom...</p>
              <p>💬 <span className='italic'>Essayez avec une orthographe différente.</span></p>
            </h2>
          </>}
    </div>
  )
}

export default FirstnameCard