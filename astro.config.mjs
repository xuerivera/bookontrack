import { defineConfig } from 'astro/config';
import db from "@astrojs/db";
import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [db(), tailwind()],
  output: "server",
  adapter: vercel({
    config: {
      // Enable verbose logging
      logLevel: 'debug'
    }
  })
});
