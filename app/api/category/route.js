import { NextResponse } from "next/server";
import { db } from "../../../lib/db";

export async function POST(req) {
    let {title, slug, description} = await req.json();

    try {
        let cat = await db.Category.create({
            data: {
                title,
                slug,
                description
            }
        });
    
        if (cat) {
            return NextResponse.json(cat);
        }
    } catch (error) {
        console.log("INSERT CATEGORY"+error.message);
        return NextResponse("internal error",{status:500});
    }
}