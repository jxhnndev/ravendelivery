export const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: '2023-03-20',
  useCdn: process.env.NODE_ENV === "production",
  token: process.env.SANITY_TOKEN,
}