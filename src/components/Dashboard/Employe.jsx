import React from 'react'
import Header from '../others/Header'
import TaskBar from '../others/TaskBar'
import TaskList from '../TaskList/TaskList'

const Employe = ({data}) => {

  return (
    <div className='p-10 bg-[#1C1C1C] h-screen w-screen'>
      <Header data={data} />
      <TaskBar data={data} />
      <TaskList data={data} />
    </div>
  )
}

export default Employe