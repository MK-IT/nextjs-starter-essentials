import { useRouter } from "next/router";
import { buildKeywordsTag, buildImageTag, buildCanonicalUrlTag } from "./seo";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      asPath: "/some-url",
    };
  },
}));

describe("SEO utilities", () => {
  describe("buildKeywordsTag()::return next-seo compatible keywords object", () => {
    it("should export such a function", () => {
      expect(buildKeywordsTag).toBeDefined();
      expect(typeof buildKeywordsTag).toBe("function");
    });

    it("should receive a string and return keywords SEO object", () => {
      const keywords = "Some, keywords, split";

      const keywordsSeoObject = buildKeywordsTag(keywords);

      expect(keywordsSeoObject).toStrictEqual({
        name: "keywords",
        content: keywords,
      });
    });

    it("should receive an array of strings and return keywords SEO object", () => {
      const keywords = ["Some", "keywords", "split"];

      const keywordsSeoObject = buildKeywordsTag(keywords);

      expect(keywordsSeoObject).toStrictEqual({
        name: "keywords",
        content: keywords.join(),
      });
    });
  });

  describe("buildImageTag()::return next-seo compatible image object", () => {
    it("should export such a function", () => {
      expect(buildImageTag).toBeDefined();
      expect(typeof buildImageTag).toBe("function");
    });

    it("should receive url and alt strings and return image SEO object", () => {
      const url = "/images/default-social-image.png";
      const alt = "default social media cover image";

      const imageSeoObject = buildImageTag(url, alt);

      expect(imageSeoObject).toStrictEqual({
        url,
        alt,
        width: 1024,
        height: 512,
      });
    });
  });

  describe("buildCanonicalUrlTag()::return next-seo compatible Canonical URL string", () => {
    it("should export such a function", () => {
      expect(buildCanonicalUrlTag).toBeDefined();
      expect(typeof buildCanonicalUrlTag).toBe("function");
    });

    it("should receive router and return Canonical URL string", () => {
      const router = useRouter();

      const canonicalUrl = buildCanonicalUrlTag(router);

      expect(canonicalUrl).toBe(`${process.env.NEXT_PUBLIC_SITE_URL}/some-url`);
    });

    it("should receive router with `?` and return Canonical URL string", () => {
      const router = useRouter();
      router.asPath = "/some-url?id=123";

      const canonicalUrl = buildCanonicalUrlTag(router);

      expect(canonicalUrl).toBe(`${process.env.NEXT_PUBLIC_SITE_URL}/some-url`);
    });

    it("should receive router with `#` and return Canonical URL string", () => {
      const router = useRouter();
      router.asPath = "/some-url#h1";

      const canonicalUrl = buildCanonicalUrlTag(router);

      expect(canonicalUrl).toBe(`${process.env.NEXT_PUBLIC_SITE_URL}/some-url`);
    });

    it("should receive undefined router and return Canonical URL string with default value", () => {
      const router = undefined;
      // @ts-expect-error
      const canonicalUrl = buildCanonicalUrlTag(router);

      expect(canonicalUrl).toBe(`${process.env.NEXT_PUBLIC_SITE_URL}`);
    });

    it("should receive corrupted router and return Canonical URL string with default value", () => {
      const router = useRouter();
      // @ts-expect-error
      router.asPath = undefined;

      const canonicalUrl = buildCanonicalUrlTag(router);

      expect(canonicalUrl).toBe(`${process.env.NEXT_PUBLIC_SITE_URL}`);
    });
  });
});
