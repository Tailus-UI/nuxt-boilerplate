import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  // My Nuxt config
  head: {
    title: "Tailus",
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400&amp;display=swap",
      },
    ],
  },
  css: ["@/assets/css/tailus.css"],
  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js"),
    },
  },
});
