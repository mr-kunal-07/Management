import React, { useState } from 'react'

const CreateTask = () => {

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [taskAsignTo, setTaskAsignTo] = useState('')
    const [taskCategory, setTaskCategory] = useState('')

    const [newTask, setNewTask] = useState([])


    const submiteHandler = (e) => {
        e.preventDefault()

        setNewTask({taskTitle, taskDescription, taskDate, taskCategory, active:false, completed:false, failed:false})
        
        const data = JSON.parse(localStorage.getItem('employee'))
        
        data.forEach((e)=>{
            if (taskAsignTo == e.firstName) {
               e.tasks.push(newTask)
               e.taskconunts.newTask = e.taskconunts.newTask + 1
               
            }
        })

        localStorage.setItem('employee', JSON.stringify(data))

        settaskTitle('')
        settaskDescription('')
        settaskDate('')
        settaskAsignTo('')
        settaskCategory('')
    
    }

    return (

        <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
            <form onSubmit={(e) => { submiteHandler(e) }} className='flex w-full flex-wrap  items-start justify-between'>
                <div className='w-1/2 '>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                        <input
                            value={taskTitle}
                            onChange={(e) => setTaskTitle(e.target.value)}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Task Title'
                        />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input
                            value={taskDate}
                            onChange={(e) => setTaskDate(e.target.value)}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date"
                        />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Asign to</h3>
                        <input
                            value={taskAsignTo}
                            onChange={(e) => setTaskAsignTo(e.target.value)}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Employe name' />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input
                            value={taskCategory}
                            onChange={(e) => setTaskCategory(e.target.value)}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='design, dec, etc' />
                    </div>
                </div>

                <div className='w-1/2'>
                    <h3>Task Description</h3>
                    <textarea
                        value={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)}
                        className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' name="" id="" cols="30" rows="10"></textarea>
                </div>

                <button className='bg-red-500 py-3 hover:bg-red-600 px-5 rounded text-2xl font-semibold mt-4 w-full'>Create Task</button>

            </form>
        </div>
    )
}

export default CreateTask