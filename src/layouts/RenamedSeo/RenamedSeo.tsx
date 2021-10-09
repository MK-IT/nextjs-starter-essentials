import React from "react";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import type { FC } from "react";
import type { NextRouter } from "next/router";
import type { NextSeoProps } from "next-seo";

type Image = {
  url: string;
  alt: string;
};

interface SeoProps extends NextSeoProps {
  title: string;
  description: string;
  keywords: string | string[];
  image: Image;
}

function buildCanonicalUrl(router: NextRouter) {
  const path = router?.asPath;
  const pathSliceLength = Math.min.apply(Math, [
    path.indexOf("?") > 0 ? path.indexOf("?") : path.length,
    path.indexOf("#") > 0 ? path.indexOf("#") : path.length,
  ]);

  return process.env.SITE_URL + path.substring(0, pathSliceLength);
}

const Seo: FC<SeoProps> = ({
  title,
  description,
  keywords,
  image,
  ...nextSeoProps
}) => {
  const router = useRouter();

  return (
    <NextSeo
      title={title}
      description={description}
      additionalMetaTags={[
        {
          name: "keywords",
          content: Array.isArray(keywords) ? keywords.join() : keywords,
        },
      ]}
      canonical={buildCanonicalUrl(router)}
      openGraph={{
        images: [
          {
            ...image,
            width: 1024,
            height: 512,
          },
        ],
      }}
      {...nextSeoProps} // eslint-disable-line
    />
  );
};

export default Seo;
