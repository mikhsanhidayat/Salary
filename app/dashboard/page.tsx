import React from 'react'

import Sidebar from '../../components/sidebar';


const page = (    ) => {
  return (
    <div className="flex bg-white">
      <Sidebar /> 
      <div className="p-4 text-black">
        <h1 className=" text-5xl   bg font-bold">Dashboard</h1>
        <p>Welcome to the admin dashboard.</p>
      </div>
    </div>
  )
}

export default page
