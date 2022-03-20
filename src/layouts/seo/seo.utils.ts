import type { NextRouter } from "next/router";

import type { Keywords, Image } from "./seo.props";

export function buildKeywords(keywords: Keywords) {
  return {
    name: "keywords",
    content: Array.isArray(keywords) ? keywords.join() : keywords,
  };
}

export function buildCanonicalUrl(router: NextRouter) {
  const path = router?.asPath;

  if (!path) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }

  const pathSliceLength = Math.min.apply(Math, [
    path.indexOf("?") > 0 ? path.indexOf("?") : path.length,
    path.indexOf("#") > 0 ? path.indexOf("#") : path.length,
  ]);
  const pathSlice = path.substring(0, pathSliceLength);
  return process.env.NEXT_PUBLIC_SITE_URL + pathSlice;
}

export function buildImage(image: Image) {
  return {
    ...image,
    width: 1024,
    height: 512,
  };
}
