import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { IndianRupeeIcon, ShoppingCart, User2Icon } from "lucide-react";
import Link from "next/link";
import { BiCategory } from "react-icons/bi";

const page = () => {
    return (
        <>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/admin">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator/>
                    <BreadcrumbItem>
                        <BreadcrumbPage>Dashboard</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className="grid grid-cols-4 mt-5 gap-3">                

                <Link href="/admin/category">
                    <Card className="bg-[#603de0] text-[#edeef5] hover:bg-[#ef5151] shadow-lg">
                        <CardContent className="flex items-center p-4 justify-start">
                            <BiCategory className="w-12 h-12 mr-3" />
                            <div className="flex flex-col">
                                <CardTitle className="text-xl">40+</CardTitle>
                                <CardDescription className="text-[#edeef5] font-semibold">Total Category</CardDescription>
                            </div>                        
                        </CardContent>
                    </Card>
                </Link>

                <Link href="/admin/product">
                    <Card className="bg-[#145c85] text-[#edeef5] hover:bg-[#ef5151] shadow-lg">
                        <CardContent className="flex items-center p-4 justify-start">
                            <ShoppingCart className="w-12 h-12 mr-3" />
                            <div className="flex flex-col">
                                <CardTitle className="text-xl">40+</CardTitle>
                                <CardDescription className="text-[#edeef5] font-semibold">Total Product</CardDescription>
                            </div>                        
                        </CardContent>
                    </Card>
                </Link>

                <Link href="/admin/order">
                    <Card className="bg-[#b4368a] text-[#edeef5] hover:bg-[#ef5151] shadow-lg">
                        <CardContent className="flex items-center p-4 justify-start">
                            <IndianRupeeIcon className="w-12 h-12 mr-3" />
                            <div className="flex flex-col">
                                <CardTitle className="text-xl">40+</CardTitle>
                                <CardDescription className="text-[#edeef5] font-semibold">Total Order</CardDescription>
                            </div>                        
                        </CardContent>
                    </Card>
                </Link>

                <Link href="/admin/user">
                    <Card className="bg-[#c73a36] text-[#edeef5] hover:bg-[#ef5151] shadow-lg">
                        <CardContent className="flex items-center p-4 justify-start">
                            <User2Icon className="w-12 h-12 mr-3" />
                            <div className="flex flex-col">
                                <CardTitle className="text-xl">40+</CardTitle>
                                <CardDescription className="text-[#edeef5] font-semibold">Total User</CardDescription>
                            </div>                        
                        </CardContent>
                    </Card>
                </Link>
            </div>
        </>
    );
}

export default page;