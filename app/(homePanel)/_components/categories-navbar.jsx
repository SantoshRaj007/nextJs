import Link from 'next/link'
import React from 'react'
import { CiMobile3 } from 'react-icons/ci'
import { FaTshirt } from 'react-icons/fa'
import { FaBagShopping, FaLaptop } from 'react-icons/fa6'
import { GiCommercialAirplane } from 'react-icons/gi'
import { MdOutlineLocalGroceryStore } from 'react-icons/md'

const CategoriesNavbar = () => {

  const items = [
    {
      id: 1,
      name: "Furniture",
      Icon: FaBagShopping,
    },
    {
        id: 2,
        name: "Electronics",
        Icon: FaLaptop
    },
    {
        id: 3,
        name: "Grocery",
        Icon: MdOutlineLocalGroceryStore
    },
    {
        id: 4,
        name: "Fashion",
        Icon: FaTshirt
    },
    {
        id: 5,
        name: "Mobile",
        Icon: CiMobile3
    },
    {
        id: 6,
        name: "Travel",
        Icon: GiCommercialAirplane
    }
  ]
  return (
    <div className='h-auto flex-1 flex justify-center items-center p-4'>
        {
            items.map((cat, i) => (
                <Link href="" className='flex flex-col gap-y-2 items-center p-3' key={i}>
                    <cat.Icon className='w-10 h-10 text-sky-600'/>
                    <h5>{cat.name}</h5>
                </Link>
            ))
        }        
    </div>
  )
}

export default CategoriesNavbar