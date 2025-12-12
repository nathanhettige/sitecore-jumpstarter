# Sitecore + Shadcn + Storybook template

> **Important Note:**
This project was generated using [`npx create-content-sdk-app`](https://www.npmjs.com/package/@sitecore-content-sdk/cli) with the **SSG (Static Site Generation)** method, **not** SSR (Server-Side Rendering).
Be aware that SSG and SSR have different implications for data fetching and deployment.



## 🚀 Quick Start

1. Set up environment variables in the `sitecore-rendering` folder:

   Your application requires certain environment variables for Sitecore integration. In the `sitecore-rendering` directory, create a `.env` file. You can use the provided `.env.container.example` as a starting point:

   ```bash
   cd sitecore-rendering
   cp .env.container.example .env
   # Edit .env as needed to provide your configuration values
   ```

2. Install dependencies:

   ```bash
   npm i
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

The app will be available at [http://localhost:3000](http://localhost:3000) by default.

The Storybook will be available at [http://localhost:6006](http://localhost:6006) by default.





