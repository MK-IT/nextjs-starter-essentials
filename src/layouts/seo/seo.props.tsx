import type { NextSeoProps } from "next-seo";

export type Keywords = string | string[];

export type Image = {
  url: string;
  alt: string;
};

export interface SeoProps extends NextSeoProps {
  title: string;
  description: string;
  keywords: Keywords;
  image: Image;
}
