import { Box, Text } from "@chakra-ui/layout";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import AppHeader from "../components/AppHeader";
import { META } from "../constants/meta";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{META.title}</title>
        <meta name="title" content={META.title} />
        <meta name="description" content={META.description} />
        <link rel="icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        <meta name="application-name" content="carlomigueldy" />
        <meta name="theme-color" content="#000000" />
        <meta name="keywords" content={META.keywords.join(", ")} />
        <meta name="environment" content={META.environment} />
        <link rel="canonical" href={META.url} />

        {/* Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={META.url} />
        <meta property="og:title" content={META.title} />
        <meta property="og:site_name" content={META.title} />
        <meta property="og:description" content={META.description} />
        <meta property="og:image" content={META.imageUrl} />

        {/* Twitter */}
        <meta property="twitter:title" content={META.title} />
        <meta property="twitter:description" content={META.description} />
        <meta property="twitter:url" content={META.url} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:creator" content="@CarloMiguelDy" />
        <meta property="twitter:site" content="@CarloMiguelDy" />
        <meta property="twitter:image" content={META.imageUrl} />
        <meta property="twitter:image:src" content={META.imageUrl} />
        <meta property="twitter:image:alt" content={META.imageAlt} />

        {/* Forem */}
        <meta property="forem:name" content={META.title} />
        <meta property="forem:logo" content={META.imageUrl} />
        <meta property="forem:domain" content={META.url} />
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
            <a
              href="https://linktr.ee/carlomigueldy"
              target="_blank"
              rel="noreferrer"
            >
              carlomigueldy.eth
            </a>
          </h4>
        </div>
      </Box>
    </>
  );
};

export default Home;
