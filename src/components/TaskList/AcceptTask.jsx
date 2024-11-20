import React from 'react'

const AcceptTask = ({data}) => {
    return (
        <div className='h-full w-[285px] flex-shrink-0 bg-red-400 rounded-lg overflow-y-scroll ' id='task-list'>
            <div className='flex justify-end items-center'>
                <h4 className='m-2 px-3 py-1 bg-red-600 rounded-md text-sm'>{data.date}</h4>
            </div>
            <h2 className='mt-1 pl-3 text-2xl font-semibold'>{data.title}</h2>
            <p className='text-sm mt-2 pl-3  '>
                {data.description}
            </p>
            <div className='flex justify-around mt-4 '>
                <button className='bg-green-500 py-1 px-2 text-sm'>Mark as Completed</button>
                <button className='bg-red-500 py-1 px-2 text-sm'>Mark as Failed</button>
            </div>

        </div>
    )
}

export default AcceptTask