import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mechanic-frontend-smoky.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
  url: `${baseUrl}/about`,
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.8,
},
{
  url: `${baseUrl}/contact`,
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.8,
},
    {
      url: `${baseUrl}/booking`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    
    {
      url: `${baseUrl}/ac-repair-theni`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
   {
     url: `${baseUrl}/ac-repair-madurai`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
     url: `${baseUrl}/ac-repair-dindigul`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/fridge-repair-theni`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/fridge-repair-madurai`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/fridge-repair-dindigul`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/washing-machine-repair-theni`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
     {
      url: `${baseUrl}/washing-machine-repair-madurai`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
     {
      url: `${baseUrl}/washing-machine-repair-dindigul`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tv-repair-theni`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}