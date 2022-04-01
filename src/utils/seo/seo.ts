import type { NextRouter } from "next/router";

export function buildKeywordsTag(keywords: string | string[]) {
  return {
    name: "keywords",
    content: Array.isArray(keywords) ? keywords.join() : keywords,
  };
}

export function buildImageTag(url: string, alt: string) {
  return {
    url,
    alt,
    width: 1024,
    height: 512,
  };
}

export function buildCanonicalUrlTag(router: NextRouter) {
  const path = router?.asPath;

  if (!path) {
    return process.env.NEXT_PUBLIC_SITE_URL!;
  }

  const pathSliceLength = Math.min.apply(Math, [
    path.indexOf("?") > 0 ? path.indexOf("?") : path.length,
    path.indexOf("#") > 0 ? path.indexOf("#") : path.length,
  ]);
  const pathSlice = path.substring(0, pathSliceLength);
  return process.env.NEXT_PUBLIC_SITE_URL + pathSlice;
}
