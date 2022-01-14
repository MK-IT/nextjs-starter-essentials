import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import type { NextRouter } from "next/router";
import type { NextSeoProps } from "next-seo";

import defaultSeo from "@root/next-seo.config";

type Keywords = string | string[];

type Image = {
  url: string;
  alt: string;
};

interface SeoProps extends NextSeoProps {
  title: string;
  description: string;
  keywords: Keywords;
  image: Image;
}

function buildKeywords(keywords: Keywords) {
  return {
    name: "keywords",
    content: Array.isArray(keywords) ? keywords.join() : keywords,
  };
}

function buildCanonicalUrl(router: NextRouter) {
  const path = router?.asPath;
  const pathSliceLength = Math.min.apply(Math, [
    path.indexOf("?") > 0 ? path.indexOf("?") : path.length,
    path.indexOf("#") > 0 ? path.indexOf("#") : path.length,
  ]);

  return process.env.NEXT_PUBLIC_SITE_URL + path.substring(0, pathSliceLength);
}

function buildImage(image: Image) {
  return {
    ...image,
    width: 1024,
    height: 512,
  };
}

function Seo({
  title,
  description,
  keywords,
  image,
  ...nextSeoProps
}: SeoProps) {
  const router = useRouter();

  return (
    <NextSeo
      title={title}
      description={description}
      additionalMetaTags={[
        // @ts-ignore
        ...defaultSeo.additionalMetaTags,
        buildKeywords(keywords),
      ]}
      canonical={buildCanonicalUrl(router)}
      openGraph={{
        ...defaultSeo.openGraph,
        // @ts-ignore
        images: [...defaultSeo.openGraph?.images, buildImage(image)], // eslint-disable-line
      }}
      {...nextSeoProps} // eslint-disable-line
    />
  );
}

export default Seo;
