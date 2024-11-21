import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import Employe from './components/Dashboard/Employe'
import Admin from './components/Dashboard/Admin'
import { AuthContext } from './context/AuthProvider'

const App = () => {


  const [user, setUser] = useState(null)
  const [loggedInUser, setLoggedInUser] = useState(null)
  const authData = useContext(AuthContext)

 useEffect(() => {
   const loggedInUser = localStorage.getItem('loggedInUser',)
   if(loggedInUser){
   const userData = JSON.parse(loggedInUser)
   
   setUser(userData.role)
   setLoggedInUser(userData.data)
   }
 },[])
 


  const handleLogin = (email, password) => {
    if (email == 'admin@me.com' && password == '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
    } else if (authData) {
      const employee = authData.employees.find(e => e.email == email && e.pass == password)
      if(employee){
        setUser('employee')
        setLoggedInUser(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee' , data: employee}));
      }
    }
    else {
      alert('Wrong email or password')
    }
  }



  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <Admin changeUser={setUser} /> : (user == 'employee' ? <Employe changeUser={setUser} data={loggedInUser} /> : '')}
    </>
  )
}

export default App