import React from 'react'
import MobileSidebar from '../_components/mobile-sidebar'
import NavbarRoutes from '../_components/navbar-routes'

const AdminNavbar = () => {
  return (
    <div className='items-center bg-white dark:bg-gray-900 text-gray-900 dark:text-slate-200 flex-1 border-b p-4 px-12 flex justify-between'>
        <MobileSidebar />
        <NavbarRoutes />
    </div>
  )
}

export default AdminNavbar