// Configuration of `next-seo`; see https://www.npmjs.com/package/next-seo
/** @type {import('next-seo').DefaultSeoProps} */

const defaultSEOProps = {
  titleTemplate: "NextJS Starter | %s",
  defaultTitle: "NextJS Starter By MK IT",
  description: "NextJS starter bundled with essential tools",
  additionalMetaTags: [],
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
