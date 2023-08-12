import { getAuthSession } from "@/utils/auth";
import { ordersQuery, singleUserQuery, userOrdersQuery } from "@/utils/queries";
import client from "@/utils/sanity";
import { NextRequest, NextResponse } from "next/server";

// FETCH ALL ORDERS
export const GET = async (req: NextRequest) => {
  const session = await getAuthSession();

  if (session) {
    try {
      if (session.user.isAdmin) {
        const orders = await client.fetch(ordersQuery)
        return new NextResponse(JSON.stringify(orders), { status: 200 });
      }
      const orders = await client.fetch(userOrdersQuery, {
        email: session.user.email
      })
      return new NextResponse(JSON.stringify(orders), { status: 200 });
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

// CREATE ORDER
export const POST = async (req: NextRequest, res: NextResponse) => {
  const session = await getAuthSession();

  if (session) {
    try {
      const body = await req.json();
      const orderedBy = await client.fetch(singleUserQuery, {
        email: body.userEmail
      })
     
      const doc = {
        _type: "order",
        orderedBy: {
          _ref: orderedBy._id,
          _type: "reference"
        },
        price: body.price,
        products: ["test", "test 2", "teeeeeeeeeest"], // here need to pass actual products
        status: body.status
      }
      const order = await client.create(doc)

      return new NextResponse(JSON.stringify(order), { status: 201 });
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