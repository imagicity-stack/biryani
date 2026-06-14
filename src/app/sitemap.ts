import type { MetadataRoute } from "next";

const BASE = "https://mirzava.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/heritage", "/craft", "/collection", "/experience", "/contact"];
  return routes.map((route) => ({
    url: `${BASE}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
