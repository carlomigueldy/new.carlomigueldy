import { Box, Text } from "@chakra-ui/layout";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import AppHeader from "../components/AppHeader";
import { PHOTOS } from "../constants/photos";
import styles from "../styles/Home.module.css";

const META = {
  title: "Carlo Miguel Dy",
  description:
    "A full stack software engineer, practices software architecture & test driven development, knows the importance of writing tests, and aims to build a better software by leveraging on software design principles. While he also loves to explore, build and contribute to open-source communities he finds it interesting.",
  url: "https://carlomigueldy.dev",
  /** @todo to add image url */
  imageUrl: PHOTOS.me,
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{META.title}</title>
        <meta name="description" content={META.description} />
        <link rel="icon" href="/favicon.svg" />

        {/* Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={META.url} />
        <meta property="og:title" content={META.title} />
        <meta property="og:description" content={META.description} />
        <meta property="og:image" content={META.imageUrl} />

        {/* Twitter */}
        <meta property="twitter:title" content={META.title} />
        <meta property="twitter:description" content={META.description} />
        <meta property="twitter:url" content={META.url} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content={META.imageUrl} />
      </Head>

      <AppHeader />

      <Box
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <div>
          <Text fontSize="4xl">Under Construction 🏗️</Text>
          <h4>
            <a href="https://linktr.ee/carlomigueldy" target="_blank">
              carlomigueldy.eth
            </a>
          </h4>
        </div>
      </Box>
    </>
  );
};

export default Home;
