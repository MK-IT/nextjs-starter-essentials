import { useRouter } from "next/router";
import { NextSeo } from "next-seo";

import defaultSeo from "@root/next-seo.config";

import { buildKeywords, buildCanonicalUrl, buildImage } from "./seo.utils";
import { SeoProps } from "./seo.props";

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
        images: [...defaultSeo.openGraph!.images!, buildImage(image)],
      }}
      {...nextSeoProps} // eslint-disable-line
    />
  );
}

export default Seo;
