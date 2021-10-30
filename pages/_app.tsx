import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource/epilogue";
import "@fontsource/poppins";
import Head from "next/head";
import { META } from "../constants/meta";

const theme = extendTheme({
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
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
        {/* TODO: To be updated when deploying for Production */}
        <meta
          name="google-site-verification"
          content="sz3uEzwwk-zznHKwFghGoJPVjIGypzQG6NLl_F5A9oM"
        />

        {/* Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={META.url} />
        <meta property="og:title" content={META.title} />
        <meta property="og:site_name" content={META.title} />
        <meta property="og:description" content={META.description} />
        <meta property="og:image" content={META.imageUrl} />
        <meta property="og:locale" content={META.locale} />

        {/* Twitter */}
        <meta property="twitter:title" content={META.title} />
        <meta property="twitter:description" content={META.description} />
        <meta property="twitter:url" content={META.url} />
        <meta property="twitter:card" content="player" />
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

      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
