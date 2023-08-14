import { productsPerCategoryQuery } from "@/utils/queries";
import client from "@/utils/sanity";
import { NextRequest, NextResponse } from "next/server";

// FETCH ALL PRODUCTS
export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const cat = searchParams.get("cat");

  try {
    const products = await client.fetch(productsPerCategoryQuery, {
        filter: cat
      })
    return new NextResponse(JSON.stringify(products), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};

{/**TO DO
export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const doc = {
        _type: 'product',
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: body?._id,
          },
        pricea: 55,
        },
        
      };
    console.log(body)
    console.log("doc to post", doc)
   // const product = await client.create(doc)
   const product = "product"
    return new NextResponse(JSON.stringify(product), { status: 201 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
 */}