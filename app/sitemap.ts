import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://kngine.richmondcollege.lk",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://kngine.richmondcollege.lk/webdev",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://kngine.richmondcollege.lk/graphicdesign",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: "https://kngine.richmondcollege.lk/quiz",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
      {
      url: "https://kngine.richmondcollege.lk/cybercombat",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
      {
      url: "https://kngine.richmondcollege.lk/contact",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
      {
      url: "https://kngine.richmondcollege.lk/register",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
