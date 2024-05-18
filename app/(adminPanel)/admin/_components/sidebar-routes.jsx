"use client"
import { cn } from '@/lib/utils'
import { CompassIcon, IndianRupeeIcon, Layout, ShoppingBag, User2Icon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const adminRoutes = [
    {
        icon: Layout,
        label: "Dashboard",
        href: "/admin"
    },
    {
        icon: CompassIcon,
        label: "Manage Categories",
        href: "/admin/category"
    },
    {
        icon: ShoppingBag,
        label: "Manage Product",
        href: "/admin/product"
    },
    {
        icon: IndianRupeeIcon,
        label: "Manage Order",
        href: "/admin/order"
    },
    {
        icon: User2Icon,
        label: "Manage User",
        href: "/admin/user"
    }
]

const SidebarRoutes = () => {

    const pathname = usePathname();

    return (
        <div className='flex flex-col'>
            {
                adminRoutes.map((route, index) => {
                    const isSelected = pathname === route.href;
                    const Icon = route.icon
                    return (
                    <Link key={index} href={route.href} className={cn("w-full py-4 px-5 flex items-center bg-[#edeef5] text-[16px] font-semibold text-[#323233] hover:bg-[#ef5151] hover:text-[#edeef5]", isSelected && "bg-[#145c85] text-[16px] text-[#edeef5]")}><Icon className='h-6 w-6 mr-2' />{route.label}</Link>
                    );
                })
            }
        </div>
    )
}

export default SidebarRoutes