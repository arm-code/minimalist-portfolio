import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from '../components/Footer'

const PrivateLayout = () => {
  return (
    <div>
        <div> todo: build a navbar</div>
        <main>
            <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default PrivateLayout