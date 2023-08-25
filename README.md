## Project Description

Restaurant website with food order functionality.

**Technology used:**

- Next.js - Frontend and APIs
- React - Frontend
- Tailwind CSS
- Stripe - for payments
- Sanity.io - CMS
- Zustand, React Context - State management

**Features:**

- Display featured items on landing page
- Filter products based on category on menu/[category] page
- Option to choose different food size on product/[slug] page
- Add and view Product reviews  
- Global *Add to cart* function
- Custom Stripe Checkout UI
- Create order in *Sanity.io* CMS and update order status once getting confirmation from Stripe that Order is paid
- Admin/Customer authentication and authorization (Next Auth, Google login)
- Admin dashboard with ability to update order delivery status
- Customer Order dashboard
- Add Voucher code text to clipboard by clicking on it
- etc.

**Upcoming:**

- Final touches to some UI elements, mobile responsiveness fixes
- Bug fixes
- Add Product functionality for Admins
- Restaurant Menu / Daily Menu pages
- update order status via Stripe webhooks
- etc.




This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
