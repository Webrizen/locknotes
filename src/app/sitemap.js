export default function sitemap() {
    return [
      {
        url: 'https://locknotes.in',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: 'https://locknotes.in/about',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://locknotes.in/contact',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: 'https://locknotes.in/sponsorships',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: 'https://locknotes.in/create',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: 'https://locknotes.in/accounts',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
      },
    ]
  }