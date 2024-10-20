import FluidAnimation from "@/components/fluidEffect/FluidAnimation";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <FluidAnimation/>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
