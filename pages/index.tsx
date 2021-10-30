import { Box, Text } from "@chakra-ui/layout";
import type { NextPage } from "next";
import AppHeader from "../components/AppHeader";
import AppHero from "../components/AppHero";

const Home: NextPage = () => {
  return (
    <>
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

      <Box
        height="50vh"
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
