import React from 'react'

const CreateTask = () => {
  return (

      <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
          <form className='flex w-full flex-wrap  items-start justify-between'>
              <div className='w-1/2 '>
                  <div>
                      <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                      <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Task Title' />
                  </div>
                  <div>
                      <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                      <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" />
                  </div>
                  <div>
                      <h3 className='text-sm text-gray-300 mb-0.5'>Asign to</h3>
                      <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Employe name' />
                  </div>
                  <div>
                      <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                      <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='design, dec, etc' />
                  </div>
              </div>

              <div className='w-1/2'>
                  <h3>Task Description</h3>
                  <textarea className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' name="" id="" cols="30" rows="10"></textarea>
              </div>

              <button className='bg-red-500 py-3 hover:bg-red-600 px-5 rounded text-2xl font-semibold mt-4 w-full'>Create Task</button>

          </form>
      </div>
  )
}

export default CreateTask