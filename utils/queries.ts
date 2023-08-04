import { groq } from "next-sanity"

export const productsquery = groq`
*[_type == "product" && !(_id in path('drafts.**'))] | order(_createdAt desc) {
  ...,
 }
 `;

export const sliderquery = groq`
*[_type == "sliderContent" && !(_id in path('drafts.**'))] | order(_createdAt desc) {
  ...,
 }
 `;