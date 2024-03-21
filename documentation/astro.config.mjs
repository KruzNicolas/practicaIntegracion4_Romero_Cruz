import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Video-games Fake Store API",
      social: {
        github: "https://github.com/KruzNicolas",
      },
      sidebar: [
        {
          label: "REST API",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Products", link: "/guides/products/" },
            { label: "Carts", link: "/guides/carts/" },
            { label: "Swagger Docs", link: "/guides/swagger/" },
          ],
        },
      ],
    }),
  ],
});
