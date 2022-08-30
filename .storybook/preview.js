import * as NextImage from "next/image";

import "@styles/globals.scss";

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: {
      iphoneSE: {
        name: "1. iPhone SE 375x667",
        styles: { width: "375px", height: "667px" },
      },
      iphone13: {
        name: "2. iPhone 13 Pro 390x844",
        styles: { width: "390px", height: "844px" },
      },
      ipadMini: {
        name: "3. iPad Mini 768x1024",
        styles: { width: "768px", height: "1024px" },
      },
      ipadAir: {
        name: "4. iPad Air 820x1180",
        styles: { width: "820px", height: "1180px" },
      },
      ipadPro: {
        name: "5. iPad Pro 1024x1366",
        styles: { width: "1024px", height: "1366px" },
      },
      macBookAir13: {
        name: "6. MacBook Air 13 1280x800",
        styles: { width: "1280px", height: "800px" },
      },
      macBookPro16: {
        name: "7. MacBook Pro 16 1536x960",
        styles: { width: "1536px", height: "960px" },
      },
      iMac27: {
        name: "8. iMac 27 2560x1440",
        styles: { width: "2560px", height: "1440px" },
      },
      fourK: {
        name: "9. 4K 3840x2160",
        styles: { width: "3840px", height: "2160px" },
      },
    },
  },
};
