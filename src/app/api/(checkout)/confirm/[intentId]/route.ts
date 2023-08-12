
import { orderByIntentIdQuery } from "@/utils/queries";
import client from "@/utils/sanity";
import { NextResponse } from "next/server";

export const PUT = async ({ params }: { params: { intentId: string } }) => {
  const { intentId } = params;
  console.log(intentId)

  const order = await client.fetch(orderByIntentIdQuery, {
    intent_id: intentId
  })
  console.log(order)

  try {
    await client
    .patch(order._id)
    .set({
        status: "Being prepared!"
      })
    .commit();
    return new NextResponse(
      JSON.stringify({ message: "Order has been updated" }),
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