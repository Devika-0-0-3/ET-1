import React from 'react'

const Card = () => {
  return (
    <div className='w-3/4 m-auto '>
        <div className='mt-20'>
            <div className="bg-white shadow-2xl h-[450px] text-black rounded-xl">

                <div className='h-56 rounded-t-xl  bg-sky-300 flex justify-center items-center'>
                    <img src='' alt='PP' className='h-44 w-44 rounded-full bg-white'/>
                </div>

                <div className='flex flex-col justify-center items-center gap-4 p-4'>
                    <p className='text-xl font-semibold'>ABC</p>
                    <p>abc@gmail.com</p>
                    <button className='bg-sky-600 text-white text-lg px-6 py-1 rounded-xl'>View More</button>
                </div>
                

            </div>
        </div>
      
    </div>
  )
}


export default Card
