import React from 'react'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'
import Header from '../others/Header'

const Admin = ({data}) => {
  console.log(data);
  return (
    <div className='h-screen w-full p-7'>
      <Header data={data}/>
      <CreateTask />
      <AllTask />


    </div>
  )
}

export default Admin