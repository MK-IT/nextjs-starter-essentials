// Configuration of `next-sitemap`; see https://www.npmjs.com/package/next-sitemap
/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || "http://localhost:3000",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/", disallow: "/api/*" }],
  },
  autoLastmod: false,
};
