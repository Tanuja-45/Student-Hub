import React from 'react'
import { useRouteError } from 'react-router-dom'


export default function Routingerror() {
    let e=useRouteError()
  return (
    <div className=' text-center text-danger mt-5'>
        <h1>{e.data}</h1>
        <h1>{e.status}</h1>
    </div>
  )
}
