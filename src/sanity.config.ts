import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './studio/schemas';

const config = defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  title: "Product delivery",
  apiVersion: "2023-08-09",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas }
})

export default config