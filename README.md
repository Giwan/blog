# Mytoori blog with NextJS and MDX

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

---

# Screenshot upload

For the design page a screenshot is created and uploaded to cloudinary.
The `nodeScreenshot.js` script takes a url e.g. https://mytoori.com/

```bash
# using node directly

node nodeScreenshot.js https://mytoori..com
```

The script returns a reference value that is added to tools data file in `/data/designPagesData.js`.

```json

// /data/designPagesData.js
// example entry

{
    "url": "https://mytoori.com",
    "imgName": "/v1607982756/landing_pages/mytoori.com",
    "labels": [labels.education, labels.productivity],
    "description": "Bilingual stories",
},

```

The above entry should be entered manually. It will then show up on the design page.

---
# Troubleshooting
Having some issues with deploying.
