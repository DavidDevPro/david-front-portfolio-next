// Importation de la configuration du site à partir de .env
const siteUrl = process.env.SITE_URL || "https://portfolio.davidwebprojects.fr";

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: siteUrl, // Base URL du site
  generateRobotsTxt: true, // Générer automatiquement le fichier robots.txt
  sitemapSize: 7000, // Taille maximale d'un fichier sitemap avant division
  changefreq: "daily", // Fréquence de mise à jour des pages
  priority: 0.7, // Priorité par défaut des URL
  exclude: ["/404"], // Utilisez 'exclude' uniquement pour des chemins spécifiques

  // Fonction de transformation pour générer des liens dynamiques
  transform: async (config, path) => {
    return {
      loc: path, // URL générée automatiquement
      changefreq: config.changefreq, // Fréquence de mise à jour par défaut
      priority: config.priority, // Priorité par défaut
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },

  // Configuration des options du fichier robots.txt
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" }, // Autoriser tous les robots sur toutes les pages
    ],
    additionalSitemaps: [
      `${siteUrl}/sitemap.xml`, // Ajouter d'autres sitemaps si nécessaire
    ],
  },
};
