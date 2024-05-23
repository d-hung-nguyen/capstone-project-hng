import { GlobabalStyles } from "../styles";
import "../globals.css";
import { Open_Sans, Poly } from "next/font/google";
import Layout from "../components/Layout";

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
  <Layout>
   <Component {...pageProps} />
  </Layout>
 );
}
