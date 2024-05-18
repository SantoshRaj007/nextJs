import SidebarRoutes from '../_components/sidebar-routes'

const Sidebar = () => {
  return (
    <div className='h-full border-r flex flex-col overflow-y-auto bg-[#edeef5] text-gray-900 shadow-sm'>
        <div className='p-6'>
            <h1 className='text-2xl font-semibold'>Admin Panel</h1>
        </div>
        <SidebarRoutes/>
    </div>
  )
}

export default Sidebar