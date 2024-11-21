import React from 'react'
import Header from '../others/Header'
import TaskBar from '../others/TaskBar'
import TaskList from '../TaskList/TaskList'

const Employe = (props) => {

  return (
    <div className='p-10 bg-[#1C1C1C] h-screen w-screen'>
      <Header changeUser={props.changePage} data={props.data} />
      <TaskBar data={props.data} />
      <TaskList data={props.data} />
    </div>
  )
}

export default Employe