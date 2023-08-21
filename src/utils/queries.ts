import { groq } from "next-sanity"

export const singleUserQuery = groq`
*[_type == "user" && !(_id in path('drafts.**')) && email == $email][0] {
  ...,
}
`;

export const productsQuery = groq`
*[_type == "product" && !(_id in path('drafts.**'))] | order(_createdAt desc) {
  ...,
 }
 `;

export const productsPerCategoryQuery = groq`
*[_type == "product" && $filter in categories[]->slug.current && !(_id in path('drafts.**'))] | order(_createdAt desc) {
  ...,
 }
 `;

export const singleProductQuery = groq`
*[_type == "product" && !(_id in path('drafts.**')) && slug.current == $slug][0] {
  ...,
  priceOptions[]->,
}
`;

export const reviewsQuery = groq`
*[_type == "review" && !(_id in path('drafts.**')) && product._ref == $productId && approved == true] {
  _id, 
  name, 
  email, 
  rating, 
  comment,
  _createdAt
}
`;

export const sliderQuery = groq`
*[_type == "sliderContent" && !(_id in path('drafts.**'))] | order(_createdAt desc) {
  ...,
 }
 `;

export const ordersQuery = groq`
*[_type == "order" && !(_id in path('drafts.**'))] | order(_createdAt desc) {
  ...,
 }
 `;

export const singleOrderQuery = groq`
*[_type == "order" && !(_id in path('drafts.**')) && _id == $id][0] {
  ...,
}
`;

export const orderByIntentIdQuery = groq`
*[_type == "order" && !(_id in path('drafts.**')) && intent_id == $intent_id][0] {
  ...,
}
`;

export const userOrdersQuery = groq`
*[_type == "order" && orderedBy._ref in *[_type=="user" && email==$email]._id && !(_id in path('drafts.**'))]| order(_createdAt desc) {
  ...,
 }
 `;

export const specialOfferQuery = groq`
*[_type == "specialOffer" && !(_id in path('drafts.**'))][0] {
  ...,
 }
 `;

export const itemsQuery = groq`
*[_type == "item" && !(_id in path('drafts.**'))] | order(_createdAt desc) {
  ...,
 }
 `;

export const categoriesQuery = groq`
*[_type == "category" && !(_id in path('drafts.**'))] | order(_createdAt desc) {
  ...,
 }
 `;

export const dailyMenuQuery = groq`
*[_type == "dailyMenu" && !(_id in path('drafts.**'))] | order(_createdAt desc) {
  ...,
 }
 `;

export const allergensQuery = groq`
*[_type == "allergen" && !(_id in path('drafts.**'))] | order(_createdAt desc) {
  ...,
 }
 `;