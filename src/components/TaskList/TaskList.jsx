import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompletTask from './CompletTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {

  return (
    <div id='task-list' className='h-[50%] overflow-x-auto flex items-center justify-start mt-10 gap-5 flex-nowrap'>

          {data.tasks.map((e,idx) => {
            
            if(e.active){
              return <AcceptTask key={idx} data={e}  />
            }
            if(e.newTask){
              return <NewTask key={idx} data={e} />
            }
            if(e.completed){
              return <CompletTask key={idx} data={e} />
            }
            if(e.failed){
              return <FailedTask key={idx} data={e} />
            }

          })}  
          
        </div >
  )
}

export default TaskList