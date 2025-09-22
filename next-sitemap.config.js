const siteUrl = process.env.SITE_URL || "https://portfolio.davidwebprojects.fr";

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "daily",
  priority: 0.7,
  autoLastmod: true,
  exclude: ["/404"],

  additionalPaths: async (config) => [
    await config.transform(config, "/about"),
    await config.transform(config, "/projects"),
    await config.transform(config, "/projects/davidwebprojects-website"),
    await config.transform(config, "/projects/portfolio-v1"),
    await config.transform(config, "/projects/portfolio-v2"),
    await config.transform(config, "/projects/office-notarial-le-soler"),
    await config.transform(config, "/projects/le-chateau"),
    await config.transform(config, "/projects/sauves-ton-phones"),
    await config.transform(config, "/contact"),
    await config.transform(config, "/mentions"),
    await config.transform(config, "/rgpd"),
  ],

  transform: async (config, path) => {
    let priority = config.priority;
    let changefreq = config.changefreq;

    if (path === "/") {
      priority = 1.0;
      changefreq = "daily";
    } else if (path.startsWith("/projects")) {
      priority = 0.8;
      changefreq = "weekly";
    } else if (path === "/about" || path === "/contact") {
      priority = 0.7;
      changefreq = "monthly";
    } else if (path === "/mentions" || path === "/rgpd") {
      priority = 0.3;
      changefreq = "yearly";
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },

  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "Googlebot-Image", allow: "/" },
      { userAgent: "Googlebot-News", disallow: ["/mentions", "/rgpd"] },
    ],
    additionalSitemaps: [
      `${siteUrl}/sitemap.xml`,
      `https://davidwebprojects.fr/sitemap.xml`,
    ],
  },
};
