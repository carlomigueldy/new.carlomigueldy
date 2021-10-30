import { Box, Text } from "@chakra-ui/layout";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
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
