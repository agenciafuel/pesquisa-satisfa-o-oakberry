import localFont from "next/font/local";

const nexaSlab = localFont({
  src: [
    {
      path: "../../../public/fonts/nexaslab/NexaSlabThin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../../public/fonts/nexaslab/NexaSlabThinItalic.woff2",
      weight: "100",
      style: "italic",
    },
    {
      path: "../../../public/fonts/nexaslab/NexaSlab-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../public/fonts/nexaslab/NexaSlabLightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../../public/fonts/nexaslab/NexaSlab-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/nexaslab/NexaSlabRegularItalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../../public/fonts/nexaslab/NexaSlab-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../public/fonts/nexaslab/NexaSlabBoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../../public/fonts/nexaslab/NexaSlab-xBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../../public/fonts/nexaslab/NexaSlabxBoldItalic.woff2",
      weight: "800",
      style: "italic",
    },
    {
      path: "../../../public/fonts/nexaslab/NexaSlabBlack.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../../public/fonts/nexaslab/NexaSlabBlackItalic.woff2",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-nexaslab",
});

export { nexaSlab };
