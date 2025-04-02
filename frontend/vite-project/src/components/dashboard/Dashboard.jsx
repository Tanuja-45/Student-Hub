import React, { useContext } from 'react'
import UserLoginStore from '../../context/Userstore'
import { userLoginContext } from '../../context/usercontext'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
    let {currentUser}=useContext(userLoginContext)
    let navigate=useNavigate()

function handleAttendance()
{
      navigate('/attendance')
}

function handleCurriculum()
{
 
      navigate('/curriculum_track')
  
}



  return (
    <div>
        <h2 className='text-danger text-center p-5'>Welcome to {currentUser.email}</h2>
        <div className="button-card-row row">
         <div className="col-md-6 mb-4"> 
          <div className="button-card card-light-pink shadow-lg">
            <h4>Attendance tracker</h4>
            <p>Effortlessly track your daily attendance and maintain a consistent record.</p>
            <div className="btn btn-custom" onClick={handleAttendance}>Track my attendance</div>
          </div>
        </div>
      <div className="col-md-6 mb-4">
         <div className="button-card card-white shadow-lg">
          <h4>Curriculum Progress</h4>
          <p>Easily track your subjects, assignments, and academic goals in one place.</p>
          <div className="btn btn-custom" onClick={handleCurriculum}>Curriculum tracker</div>
        </div>
      </div>
      
  
  </div>
</div>
  )
}

export default Dashboard