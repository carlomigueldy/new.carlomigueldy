import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Box, Stack, ChakraProvider, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
// import "@fontsource/epilogue";
// import "@fontsource/poppins";
import "@fontsource/sora";
import '@fontsource/epilogue'
import Head from "next/head";
import { META } from "../constants/meta";
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
import { GlobalProps } from "@emotion/react";

/**
 * Blured background
 * @see https://bgjar.com/colored-patterns
 * @see https://www.svgbackgrounds.com/
 * @see https://www.w3schools.com/howto/howto_css_blurred_background.asp
 * @see https://www.lapa.ninja/blog/the-best-free-svg-patterns/
 */

const theme = extendTheme({
  fonts: {
    heading: "Epilogue",
    body: "Epilogue",
    mono: "Fira Code",
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  styles: {
    global: (props: GlobalProps) => ({
      body: {
        color: mode("gray.800", "whiteAlpha.900")(props),
        bg: mode("gray.100", "#080808")(props),
      },
    }),
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>{META.title}</title>
        <meta name="title" content={META.title} />
        <meta name="description" content={META.description} />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        <meta name="application-name" content="carlomigueldy" />
        <meta name="theme-color" content="#000000" />
        <meta name="keywords" content={META.keywords.join(", ")} />
        <meta name="environment" content={META.environment} />
        <meta name="author" content={META.author} />
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
        <meta property="twitter:creator" content={META.twitterHandle} />
        <meta property="twitter:site" content={META.twitterHandle} />
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
        backgroundImage="url(/colored-shapes.svg)"
        backgroundAttachment="fixed"
        // filter="blur(6px)"
      >
        <Box bgColor="red" backdropFilter="blur(64px)" background="transparent">
          <Component {...pageProps} />
          <AppFooter />
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
