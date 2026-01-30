 
import { NavBar } from '../components/NavBar'
import { Outlet } from 'react-router-dom'
import  Footer  from '../components/Footer'
 
 const PublicLayout = () => {
   return (
     <div className='flex w-full min-h-screen flex-col justify-between bg-slate-50'>
        <NavBar/>
        <main className='mt-30 flex flex-col items-center text-violet-600'>
            <Outlet/>
        </main>
        <Footer/>
     </div>
   )
 }
 
 export default PublicLayout