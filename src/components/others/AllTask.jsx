import React, { useContext } from 'react'
import AuthContext from '../../context/AuthProvider'
import AuthProvider from '../../context/AuthProvider'

const AllTask = ({ data }) => {


    return (

        <div id='task-list' className='bg-[#1c1c1c] p-5 mt-5 rounded'>
            <div className='bg-red-400 mb-3 py2 px-4 flex justify-between rounded'>
                <h2 className='text-lg font-medium w-1/5'>Employee Name </h2>
                <h3 className='text-lg font-medium w-1/5'> New Task </h3>
                <h5 className='text-lg font-medium w-1/5'> Active Task </h5>
                <h5 className='text-lg font-medium w-1/5'> Completed </h5>
                <h5 className='text-lg font-medium w-1/5'> Failed </h5>
            </div>
            <div id='task-list' className=''>
                {data.employees.map((e, idx) => {
                    return <div key={idx} className='border-2 border-emerald-500 mb-3 py2 px-4 flex justify-between rounded text-lg font-medium'>
                        <h2 className='text-lg font-medium w-1/5 '>{e.firstName}</h2>
                        <h3 className='text-lg font-medium w-1/5 text-blue-400'> {e.taskCount.newTask} </h3>
                        <h5 className='text-lg font-medium w-1/5 text-white'>{e.taskCount.active}</h5>
                        <h5 className='text-lg font-medium w-1/5 text-green-600'>{e.taskCount.completed}</h5>
                        <h5 className='text-lg font-medium w-1/5 text-red-600'> {e.taskCount.failed} </h5>
                    </div>
                })}
            </div>


        </div>
    )
}

export default AllTask