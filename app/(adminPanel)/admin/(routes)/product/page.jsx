import { columns } from './columns'
import { ProductTable } from './_components/ProductTable'
import Link from 'next/link'

const page = () => {
    return (
        <div>
            <div className='flex py-2 justify-between items-center'>
                <h2 className='text-xl font-semibold'>All Products</h2>
                <Link href="/admin/product/insert" className='bg-[#145c85] text-[#edeef5] px-3 py-2 rounded hover:bg-[#ef5151]'>Add Product</Link>
            </div>
            <ProductTable columns={columns} data={[]}/>
        </div>
    )
}

export default page