
import client from "@/utils/sanity";
import { NextRequest, NextResponse } from "next/server";


// CHANGE THE STATUS OF AN ORDER
export const PUT = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;

  try {
    const updatedStatus = await req.json();

    // post data to sanity db
    await client
    .patch(id)
    .set({
        status: updatedStatus
      })
    .commit();
    return new NextResponse(
      JSON.stringify({ message: "Order has been updated!" }),
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};