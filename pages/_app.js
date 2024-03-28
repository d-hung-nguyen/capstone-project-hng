/** @format */

import GlobalStyle from "../styles";
import Layout from "@/components/Layout";
import { Open_Sans, Poly } from "next/font/google";
const openSans = Open_Sans({
  weight: "400",
  subsets: ["latin"],
}); 
const poly = Poly({
  weight: "400",
  subsets: ["latin"],
});

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
