import React, { useState } from 'react'

const Header = () => {
  // const [username, setUsername] = useState('')

  // if (!data) {
  //   setUsername('Admin')
  // }else{
  //   setUsername(data.firstName)
  // }

  const logOut = () => {
    localStorage.setItem('loggedInUser', '');
    window.location.reload();
  } 

  return (
    <div  className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>Kunal👋</span> </h1>
        <button onClick={logOut} className='bg-red-600 text-lg font-medium  text-white px-5 py-2 rounded-md'>Log Out</button>
    </div>
  )
}

export default Header