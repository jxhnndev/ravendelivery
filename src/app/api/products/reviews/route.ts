import { getAuthSession } from "@/utils/auth";
import { userReviewsQuery } from "@/utils/queries";
import client from "@/utils/sanity";
import { NextRequest, NextResponse } from "next/server";

// FETCH USER REVIEWS
export const GET = async (req: NextRequest) => {
  const session = await getAuthSession();

  if (session?.user.email) {
    try {
      const reviews = await client.fetch(userReviewsQuery, {
        email: session.user.email!
      })
      return new NextResponse(JSON.stringify(reviews), { status: 200 });
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