import React, { useContext } from 'react'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'
import Header from '../others/Header'
import { AuthContext } from '../../context/AuthProvider'

const Admin = () => {
  const data1 = useContext(AuthContext);
  return (
    <div className='h-screen w-full p-7'>
      <Header/>
      <CreateTask />
      <AllTask data={data1} />


    </div>
  )
}

export default Admin