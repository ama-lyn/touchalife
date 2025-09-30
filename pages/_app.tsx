// pages/_app.tsx
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Rowdies, Manrope } from "next/font/google";

// Titles
const rowdies = Rowdies({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// Paragraphs
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Touch A Life Foundation</title>
        <meta name="description" content="This is a Charity website" />
      </Head>
      <div className={manrope.className}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
