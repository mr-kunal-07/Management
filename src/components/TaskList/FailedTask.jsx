import React from 'react'

const FailedTask = () => {
  return (
      <div className='h-full w-[285px] flex-shrink-0 bg-green-400 rounded-lg overflow-y-scroll ' id='task-list'>
          <div className='flex justify-end items-center'>
              <h4 className='m-2 px-3 py-1 bg-red-600 rounded-md text-sm'>{data.date}</h4>
          </div>
          <h2 className='mt-1 pl-3 text-2xl font-semibold'>{data.title}</h2>
          <p className='text-sm mt-2 pl-3  '>
              {data.description}
          </p>
          <div className='mt-2'>
              <button className='w-full'>Failed</button>

          </div>

      </div>
  )
}

export default FailedTask