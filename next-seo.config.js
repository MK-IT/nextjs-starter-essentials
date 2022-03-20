// Configuration of `next-seo`; see https://www.npmjs.com/package/next-seo

/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOProps = {
  titleTemplate: "%s | NextJS Starter",
  defaultTitle: "NextJS Starter By MK IT",
  description: "NextJS starter bundled with essential tools",
  canonical: "https://github.com/MK-IT/nextjs-starter-essentials",
  additionalMetaTags: [
    {
      name: "keywords",
      content: "NextJS, starter, template, project, MK IT",
    },
    // PWA meta tags
    {
      name: "application-name",
      content: "NextJS Starter",
    },
    {
      name: "apple-mobile-web-app-title",
      content: "NextJS Starter",
    },
    {
      name: "apple-mobile-web-app-capable",
      content: "yes",
    },
    {
      name: "apple-mobile-web-app-status-bar-style",
      content: "black-translucent",
    },
    {
      name: "theme-color",
      content: "#6927ff",
    },
  ],
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/images/favicon.ico",
    },
  ],
  twitter: {
    cardType: "summary_large_image",
    site: "@twitter-handle",
    handle: "@twitter-handle",
  },
  facebook: {
    appId: "facebook-app-id",
  },
  openGraph: {
    url: "https://github.com/MK-IT/nextjs-starter-essentials",
    type: "website",
    title: "NextJS Starter By MK IT",
    description: "NextJS starter bundled with essential tools",
    images: [
      {
        url: "/images/default-social-image.png",
        width: 1024,
        height: 512,
        alt: "NextJS Starter By MK IT",
      },
    ],
  },
};

export default defaultSEOProps;
