# Getting Started

## Install dependencies

Run `npm install`.

This will install all related dependencies of the project in the `node_modules` folder.

Please make sure that you have a compatible `Node.js` version with the used `Next.js` version.

## Start application

Run `npm run dev`.

The app should become available at `http://localhost:3000`. The port may differ if `3000` is already occupied by another service on your machine.

## Build application

Run `npm run build`.

This command generates a production-ready build of the app.

## Available routes

The following pages/routes are available in the app:

- `/` - products list
- `/products/:id` - single product page
- `/shopping-cart` - the shopping cart page

## Light/dark mode

The app supports light/dark mode achieved with the TailwindCSS primitives.

You can toggle the modes from the theme mode button in the header.

## Cart persistence

I used a simple custom hook, based on `localStorage`, for managing the cart. It provides the API for adding and removing products as well as a persistence layer so that consumers of the hook can have the most up-to-date product information.

## Thank you

Thank you for taking the time to review this application :) I'm looking forward to discussing it in greater detail if we get the chance to speak.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
