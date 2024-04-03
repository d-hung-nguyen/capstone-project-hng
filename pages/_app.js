import GlobalStyle from "../styles";
import Layout from "@/components/Layout";
import {Open_Sans, Poly} from "next/font/google";
import {FeedNavItemsProvider} from "@/components/FeedavContext";
import {useState, useEffect} from "react";

const openSans = Open_Sans({
  weight: "400",
  subsets: ["latin"],
});
const poly = Poly({
  weight: "400",
  subsets: ["latin"],
});

export default function MyApp({Component, pageProps}) {
  const usePageTitle = () => {
    const [title, setTitle] = useState("");

    useEffect(() => {
      setTitle(window.location.pathname);
    }, []);

    const setActive = (newTitle) => {
      setTitle(newTitle);
    };

    return {title, setActive};
  };

  const {title, setActive} = usePageTitle();

  return (
    <>
      <FeedNavItemsProvider>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </FeedNavItemsProvider>
    </>
  );
}
