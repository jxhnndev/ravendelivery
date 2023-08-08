import { groq } from "next-sanity"

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