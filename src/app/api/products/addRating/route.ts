import { getAuthSession } from "@/utils/auth";
import client from "@/utils/sanity";
import { NextRequest, NextResponse } from "next/server";

// CREATE REVIEW ON PRODUCT
export const POST = async (req: NextRequest, res: NextResponse) => {
  const session = await getAuthSession();

  if (session) {
    try {
      const body = await req.json();

      const doc = {
        _type: "review",
        ...body,
      }
     const review = await client.create(doc)

      return new NextResponse(JSON.stringify(review), { status: 201 });
    } catch (err) {
      console.log(err);
      return new NextResponse(
        JSON.stringify({ message: "Something went wrong!" }),
        { status: 500 }
      );
    }
  } else {
    return new NextResponse(
      JSON.stringify({ message: "You are not authenticated!" }),
      { status: 401 }
    );
  }
};