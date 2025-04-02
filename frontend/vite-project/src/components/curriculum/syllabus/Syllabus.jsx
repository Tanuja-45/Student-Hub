import React from 'react'

import { useNavigate } from 'react-router-dom'

function Syllabus() {
  let navigate=useNavigate()
function handleSI()
{
    navigate('/semesterI')
}
function handleSII()
{
    navigate('/semesterII')
}
function handleSIII()
{
    navigate('/semesterIII')
}
function handleSIV()
{
    navigate('/semesterIV')
}
function handleSV()
{
    navigate('/semesterV')
}
function handleSVI()
{
    navigate('/semesterVI')
}
function handleSVII()
{
    navigate('/semesterVII')
}
function handleSVIII()
{
    navigate('/semesterVIII')
}


  return (
    <div>
       <div className='button-card-row row'>
       <div className='col-md-4 mb-4'>
            <div className="button-card card-light-pink p-2">
                <div className="btn btn-custom" onClick={handleSI}>SEM I</div>
            </div>
            </div>
            <div className='col-md-4 mb-4'>
            <div className="button-card card-light-pink p-2">
                <div className="btn btn-custom" onClick={handleSII}>SEM II </div>
            </div>
            </div>
            <div className='col-md-4 mb-4'>
            <div className="button-card card-light-pink p-2">
                <div className="btn btn-custom" onClick={handleSIII}>SEM III</div>
            </div>
            </div>
       </div>

          <div className='button-card-row row'>
          <div className='col-md-4 mb-4'>
            <div className="button-card card-light-pink p-2">
                <div className="btn btn-custom" onClick={handleSIV}>SEM IV</div>
            </div>
            </div>
            <div className='col-md-4 mb-4'>
            <div className="button-card card-light-pink p-2">
                <div className="btn btn-custom" onClick={handleSV}>SEM V</div>
            </div>
            </div>
            <div className='col-md-4 mb-4'>
            <div className="button-card card-light-pink p-2">
                <div className="btn btn-custom" onClick={handleSVI}>SEM VI</div>
            </div>
            </div>
          </div>
           

           <div className='button-card-row row'>
           <div className='col-md-6 mb-4'>
            <div className="button-card card-light-pink p-2">
                <div className="btn btn-custom" onClick={handleSVII}>SEM VII</div>
            </div>
            </div>
            <div className='col-md-6 mb-4'>
            <div className="button-card card-light-pink p-2">
                <div className="btn btn-custom" onClick={handleSVII}>SEM VIII</div>
            </div>
            </div>
           </div>
    </div>
  )
}

export default Syllabus