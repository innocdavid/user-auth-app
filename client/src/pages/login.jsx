import React from 'react'
import logo from '../assets/images/avatar.png'

export default function Login() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center h-screen">
        <div>
          <div className="title flex flex-col items-center">
            <img src={logo} alt="logo" className="w-12" />
            <h4 className="text-4xl font-bold mt-2">Login</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Explore more by connecting with us.
            </span>
            <form className="py1">
          

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
