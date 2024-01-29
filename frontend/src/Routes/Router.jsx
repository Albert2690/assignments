import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from '../Pages/Home'
import StudentAttendance from '../Pages/StudentAttendance'

function Routerr() {
  return (
   

   < Routes>
   <Route path='/' element={<Home/>} />
   <Route path='/student-attendance' element={<StudentAttendance/>} />

   
   
   
   </Routes>
  

  )
}

export default Routerr