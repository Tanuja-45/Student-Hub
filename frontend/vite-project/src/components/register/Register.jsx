import React, { useState } from 'react';
import './Register.css';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function StudentRegistration() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [formData, setFormData] = useState({
    studentID: '',
    fullName: '',
    dateOfBirth: '',
    gender: '',
    email: '',
    phone: '',
    address: '',
    department: '',
    year: '',
    semester: '',
    enrolledCourses: '',
    alternativeEmail: '',
    alternativePhone: '',
    password: '', 
  });

  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  async function onUserRegister(newUser) {
    
    try {
      let res = await fetch("https://student-hub-v3qo.vercel.app/student-api/student", {
        method: "POST",
        headers: { "Content-type": "application/json" ,},
        body: JSON.stringify(newUser),
      });
      let data=await res.json()
      
      if (data.message === 'user created') {
        //navigate to Login component
        navigate("/login");
      }
      else{
        setErr(data.message)
      }
    } catch (err) {
      console.log("err is ", err);
      setErr(err.message);
    }
  }

  return (
    <div className="registration-container">
      <form onSubmit={handleSubmit(onUserRegister)} className="registration-form">
        <h1>Student Registration</h1>
        <fieldset>
          <legend>Student Information</legend>
          <label>
            Student Reg Id:
            <input 
              type="text" 
              name="studentID" 
              value={formData.studentID} 
              {...register('studentID', { required: "Student Reg Id is required" })} 
              onChange={handleChange} 
              required 
            />
            {errors.studentID && <p className="error-message">{errors.studentID.message}</p>}
          </label>
          <label>
            Full Name:
            <input 
              type="text" 
              name="fullName" 
              value={formData.fullName} 
              {...register('fullName', { required: "Full Name is required" })} 
              onChange={handleChange} 
              required 
            />
            {errors.fullName && <p className="error-message">{errors.fullName.message}</p>}
          </label>
          <label>
            Date of Birth:
            <input 
              type="date" 
              name="dateOfBirth" 
              value={formData.dateOfBirth} 
              {...register('dateOfBirth', { required: "Date of Birth is required" })} 
              onChange={handleChange} 
              required 
            />
            {errors.dateOfBirth && <p className="error-message">{errors.dateOfBirth.message}</p>}
          </label>
          <label>
            Gender:
            <select 
              name="gender" 
              value={formData.gender} 
              {...register('gender', { required: "Gender is required" })} 
              onChange={handleChange} 
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors.gender && <p className="error-message">{errors.gender.message}</p>}
          </label>
          <label>
            Email Address:
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              {...register('email', { 
                required: "Email Address is required", 
                validate: value => value.endsWith('@pvpsit.ac.in') || 'Email must be from @pvpsit.ac.in domain' 
              })} 
              onChange={handleChange} 
              required 
              style={{ borderColor: err.includes('Email must be from') ? 'red' : '' }}
            />
            {errors.email && <p className="error-message">{errors.email.message}</p>}
          </label>
          <label>
            Password:
            <input 
              type="password"
              name="password"
              value={formData.password}
              {...register('password', { 
                required: "Password is required", 
                minLength: { value: 8, message: "Password must be at least 8 characters" } 
              })}
              onChange={handleChange}  
              required          
            />
            {errors.password && <p className="error-message">{errors.password.message}</p>}
          </label>
          <label>
            Phone Number:
            <input 
              type="tel" 
              name="phone" 
              value={formData.phone} 
              {...register('phone', { required: "Phone Number is required" })} 
              onChange={handleChange} 
              required 
            />
            {errors.phone && <p className="error-message">{errors.phone.message}</p>}
          </label>
          <label>
            Address:
            <input 
              type="text" 
              name="address" 
              value={formData.address} 
              {...register('address', { required: "Address is required" })} 
              onChange={handleChange} 
              required 
            />
            {errors.address && <p className="error-message">{errors.address.message}</p>}
          </label>
        </fieldset>

        <fieldset>
          <legend>Academic Details</legend>
          <label>
            Department:
            <input 
              type="text" 
              name="department" 
              value={formData.department} 
              {...register('department', { required: "Department is required" })} 
              onChange={handleChange} 
              required 
            />
            {errors.department && <p className="error-message">{errors.department.message}</p>}
          </label>
          <label>
            Year of Study:
            <input 
              type="text" 
              name="year" 
              value={formData.year} 
              {...register('year', { required: "Year of Study is required" })} 
              onChange={handleChange} 
              required 
            />
            {errors.year && <p className="error-message">{errors.year.message}</p>}
          </label>
          <label>
            Semester:
            <input 
              type="text" 
              name="semester" 
              value={formData.semester} 
              {...register('semester', { required: "Semester is required" })} 
              onChange={handleChange} 
              required 
            />
            {errors.semester && <p className="error-message">{errors.semester.message}</p>}
          </label>
          <label>
            Enrolled Courses:
            <textarea 
              name="enrolledCourses" 
              value={formData.enrolledCourses} 
              {...register('enrolledCourses', { required: "Enrolled Courses are required" })} 
              onChange={handleChange} 
              required 
            />
            {errors.enrolledCourses && <p className="error-message">{errors.enrolledCourses.message}</p>}
          </label>
        </fieldset>

        <fieldset>
          <legend>Contact Information</legend>
          <label>
            Alternative Email Address:
            <input 
              type="email" 
              name="alternativeEmail" 
              value={formData.alternativeEmail} 
              {...register('alternativeEmail')} 
              onChange={handleChange} 
            />
          </label>
          <label>
            Alternative Phone Number:
            <input 
              type="tel" 
              name="alternativePhone" 
              value={formData.alternativePhone} 
              {...register('alternativePhone')} 
              onChange={handleChange} 
            />
          </label>
        </fieldset>

        <button type="submit">Register</button>
        {err && <p className="error-message">{err}</p>}
      </form>
    </div>
  );
}

export default StudentRegistration;
