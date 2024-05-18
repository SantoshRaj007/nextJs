import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import React from 'react'
import Sidebar from '../_components/sidebar'

const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger className='md:hidden'>
        <Menu/>
      </SheetTrigger>
      <SheetContent side="left" className='p-0 w-56'>
        <Sidebar />
      </SheetContent>
    </Sheet>
  )
}

export default MobileSidebar