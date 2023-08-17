import { CartItemType } from "@/types";
import { getAuthSession } from "@/utils/auth";
import { ordersQuery, singleUserQuery, userOrdersQuery } from "@/utils/queries";
import client from "@/utils/sanity";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from 'uuid';

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
      const {userEmail, ...dataToUpload} = body

      const doc = {
        _type: "order",
        orderedBy: {
          _ref: orderedBy._id,
          _type: "reference"
        },
        ...dataToUpload,
        products: body.products.map((product: CartItemType) => (
          {
            _type: "orderItem",
            _key: uuidv4(),
            image: product.img?.src,
            itemPrice: product.itemPrice,
            optionTitle: product.optionTitle,
            price: product.price,
            quantity: product.quantity,
            tax: product.tax,
            taxPrice: product.taxPrice,
            title: product.title
          }
        ))
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