import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mechanic-frontend-smoky.vercel.app";

  return [
    {
      url: `${baseUrl}/ac-repair-theni`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/refrigerator-repair-theni`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/washing-machine-repair-theni`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tv-repair-theni`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },]
}